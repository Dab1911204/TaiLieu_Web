//Đối tượng 'Validator'
function Validator (option){
    function getParent(element, selector){
        while(element.parentElement){
            if(element.parentElement.matches(selector)){
                return element.parentElement
            }
            element = element.parentElement
        }
    }
    var selectorRule = {}
    //hàm thực hiện validate
    function validate(inputElement, rule){
        var errorMessage
        var errorElement = getParent(inputElement, option.formGroupSelector).querySelector('.form-message')
        //lấy ra các rule của selector
        var rules = selectorRule[rule.selector]
        //lặp qua từng rule và kiểm tra
        for(var i = 0; i < rules.length; ++i){
            switch(inputElement.type){
                case 'radio':
                case 'checkbox':
                    errorMessage = rules[i](
                        formElement.querySelector(rule.selector + ':checked')
                    )
                    break;
                default:
                    errorMessage = rules[i](inputElement.value)
            }
            if(errorMessage) break//có lỗi thì dừng vòng lặp
        }
        if(errorMessage){
            errorElement.innerText = errorMessage
            getParent(inputElement, option.formGroupSelector).classList.add('invalid')
        }else{
            errorElement.innerText = ''
            getParent(inputElement, option.formGroupSelector).classList.remove('invalid')
        }
        //console.log(errorMessage)
        return !errorMessage
    }

    //lấy element của from cần validate
    var formElement = document.querySelector(option.form)

    if(formElement){
        //Khi submit form   
        formElement.onsubmit = function (e){
            e.preventDefault()
            var isFormValid = true
            //lặp qua từng rule và validate
            option.rules.forEach(rule => {
                var inputElement = formElement.querySelector(rule.selector)
                var isValid = validate(inputElement, rule)
                if(!isValid){
                    isFormValid = false
                }
            })
            if(isFormValid){
                console.log('Thành công')
                if(typeof option.onSubmit === 'function'){
                    var enableInputs = formElement.querySelectorAll('[name]:not([disabled])')//lấy các thẻ có thuộc tính name và ko lấy thể có thuộc tính disabled
                    var formValues = Array.from(enableInputs).reduce(function (values, input){
                        values[input.name] = input.value
                        switch(input.type){
                            case 'radio':
                                values[input.name] = formElement.querySelector('input[name="' + input.name + '"]:checked').value
                                break;
                            case 'checkbox':
                                // //console.log(!input.matches(':checked'))
                                // if(!input.matches(':checked')){
                                //     //console.log('vào đây !input.matches')
                                //     values[input.name] = ''
                                //     return values
                                // }
                                // console.log(!Array.isArray(values[input.name]))
                                // if(!Array.isArray(values[input.name])){
                                //     //console.log('vào đây Array.isArray')
                                //     values[input.name] = []
                                // }
                                // values[input.name].push(input.value)
                                //console.log(input.value)
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
                    option.onSubmit(formValues)
                }
            }
            // else{
            //     formElement.submit()
            // }
        }
        //Xử lý lặp qua mỗi rule và xử lý(lắng nghe sự kiện blur,input,...)
        option.rules.forEach(rule => {
            //Lưu lại các rules cho mỗi input
            if(Array.isArray(selectorRule[rule.selector])){
                selectorRule[rule.selector].push(rule.test)
            }else{
                selectorRule[rule.selector] = [rule.test]
            }
            var inputElements = formElement.querySelectorAll(rule.selector)
            Array.from(inputElements).forEach(function (inputElement){
                //Xử lý blur khỏi input
                inputElement.onblur = function (){
                    validate(inputElement, rule)
                }
                //Xử lý mỗi khi người dùng nhập vào input
                inputElement.oninput = function (){
                    var errorElement = getParent(inputElement, option.formGroupSelector).querySelector('.form-message')
                    errorElement.innerText = ''
                    getParent(inputElement, option.formGroupSelector).classList.remove('invalid')
                }
            })
        })

    }
}
//Định nghĩa rules
//Nguyên tắc của các rules:
//1. Khi có lỗi => Trả ra message lỗi
//2. Khi hợp lệ => Không trả ra cái gì cả (undefined)
Validator.isRequired = function (selector,mess){
    return {
        selector: selector,
        test: function (value){
            return value ? undefined : mess||'Vui lòng nhập trường này'
        }
    }
}
Validator.isEmail = function (selector,mess){
    return {
        selector: selector,
        test: function (value){
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : mess|| 'Trường này phải là email'
        }  
    }
}
Validator.minLength = function (selector, min,mess){
    return{
        selector: selector,
        test: function (value){
            return value.length >= min ? undefined : mess|| `Vui lòng nhập tối thiểu ${min} kí tự`
        }
    }
}
Validator.isConfirmed = function (selector, getConfirmValue,mess){
    return{
        selector: selector,
        test: function (value){
            return value === getConfirmValue() ? undefined : mess||'Giá trị nhập vào không chính xác'
        }
    }
}
Validator({
    form: '#form-1',
    formGroupSelector: '.form-group',
    rules: [
        Validator.isRequired('#fullname', 'Vui lòng nhập tên'),
        Validator.isRequired('#email', 'Vui lòng nhập email'),
        Validator.isRequired('#password_confirmation', 'Vui lòng nhập lại mật khẩu'),
        Validator.isRequired('input[name="gender"]', 'Vui lòng chọn giới tính'),
        Validator.isRequired('#province', 'Vui lòng chọn tỉnh thành phố'),
        Validator.isRequired('input[name="hobby"]', 'Vui lòng chọn sở thích'),
        Validator.isEmail('#email', 'Trường này phải là email'),
        Validator.minLength('#password', 6, 'Mật khẩu phải từ 6 kí tự'),
        Validator.isConfirmed('#password_confirmation', function(){
            return document.querySelector('#form-1 #password').value
        }, 'Mật khẩu không trùng khớp')
    ],
    onSubmit: function (data){
        console.log(data)
    }
})