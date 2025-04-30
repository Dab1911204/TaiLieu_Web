//Default parameter values
//dùng khi không truyền tham số cho hàm
//hoặc truyền tham số undefined
function logger(mess){
    if (typeof log === 'undefined') {
        log = 'Giá trị mặc định';
    }
    console.log(log);
}
logger('Giá trị');
logger(); //Giá trị mặc định

function logger(mess,isAlert){
    if(isAlert) return alert(mess);
    console.log(mess);
}

logger('Giá trị'); //Giá trị
logger('Giá trị',true); //Giá trị

function logger(mess = 'Giá trị mặc định', type = 'log'){
    console[type](mess);
}
logger('Giá trị'); //Giá trị
logger('Giá trị', 'warn'); //Giá trị
logger('Giá trị', 'error'); //Giá trị