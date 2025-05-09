function Validator(formSelector){
    var _this = this;
    
    function getParent(element, selector) {
        while (element.parentElement) {
            if (element.parentElement.matches(selector)) {
                return element.parentElement;
            }
            element = element.parentElement;
        }   
    }
    var formRules = {};
    var validates = {
        required: function (value) {
            return value ? undefined : 'Vui lòng nhập trường này';
        },
        email: function (value) {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : 'Trường này phải là email';
        },
        min: function (min) {
            return function (value) {
                return value.length >= min ? undefined : `Vui lòng nhập tối thiểu ${min} kí tự`;
            }
        },
        max: function (max) {
            return function (value) {
                return value.length <= max ? undefined : `Vui lòng nhập tối đa ${max} kí tự`;
            }
        }

    }

    //lấy ra element trong DOM theo formSelector
    var formElement = document.querySelector(formSelector);
    if (formElement) {
        var inputs = formElement.querySelectorAll('[name][rules]');
        for (var input of inputs) {
            var rules = input.getAttribute('rules').split('|');
            for(var rule of rules) {
                var ruleInfo;
                rule = rule.trim();
                var isRulesHasValue = rule.includes(':');
                if (rule.includes(':')) {
                    ruleInfo = rule.split(':');
                    rule = ruleInfo[0];
                }
                var ruleFunc = validates[rule];
                if (isRulesHasValue) {
                    ruleFunc = ruleFunc(ruleInfo[1]);
                }
                if(Array.isArray(formRules[input.name])) {
                    formRules[input.name].push(ruleFunc);
                } else {
                    formRules[input.name] = [ruleFunc]
                }
                
            }
            //Lắng nghe sự kiện validate
            input.onblur = hanleValidate;
            input.oninput = hanleClearError;
            
        }
        //hàm thực hiện Validate
        function hanleValidate(event) {
            var rules = formRules[event.target.name];
            var errorMessage
            for(var rule of rules) {
                errorMessage = rule(event.target.value);
                if (errorMessage) break;
            }
            if (errorMessage) {
                var formGroup = getParent(event.target, '.form-group');
                if (formGroup) {
                    formGroup.classList.add('invalid');
                    var formMessage = formGroup.querySelector('.form-message');
                    if (formMessage) {
                        formMessage.innerText = errorMessage;
                    }
                }
            }
            return !errorMessage;
        }
        //Hàm clear lỗi
        function hanleClearError(event) {
            var formGroup = getParent(event.target, '.form-group');
            if (formGroup.classList.contains('invalid')) {
                formGroup.classList.remove('invalid');
                var formMessage = formGroup.querySelector('.form-message');
                if (formMessage) {
                    formMessage.innerText = '';
                }
            }
        }
    }
    //Xử lý hành vi submit form
    formElement.onsubmit = function (event) {
        event.preventDefault();
        var inputs = formElement.querySelectorAll('[name][rules]');
        var isValid = true;
        for (var input of inputs) {
            if (!hanleValidate({target: input})){
                isValid = false;
            }
        }
        //Khi không có lỗi thì submit form
        if (isValid) {
            if (typeof _this.onSubmit === 'function') {
                var enableInputs = formElement.querySelectorAll('[name]:not([disabled])')//lấy các thẻ có thuộc tính name và ko lấy thể có thuộc tính disabled
                var formValues = Array.from(enableInputs).reduce(function (values, input){
                    values[input.name] = input.value
                    switch(input.type){
                        case 'radio':
                            values[input.name] = formElement.querySelector('input[name="' + input.name + '"]:checked').value
                            break;
                        case 'checkbox':
                            console.log(!Array.isArray(values[input.name]))
                            if (!Array.isArray(values[input.name])) {
                                console.log('vào đây Array.isArray')
                                values[input.name] = [];
                            }
                            if (input.matches(":checked")) {
                                values[input.name].push(input.value);
                                console.log(!Array.isArray(values[input.name]))
                            }
                            break;
                        default:
                            values[input.name] = input.value
                    }
                    return values
                },{})
                _this.onSubmit(formValues);
            }else{
                formElement.submit();
            }
        }
    }
} 