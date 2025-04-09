function writeLog1 (message) {
    console.log(message);
}

writeLog1 ('Test message')

function writeLog2 () {
    console.log(arguments);
}

writeLog2 ('Test message', 'Another message')

function writeLog3 () {
    for (var param of arguments) {
        console.log(param);
    }
}

writeLog3 ('Test message', 'Another message', 'Yet another message')

function writeLog4 () {
    var message = ''
    for (var param of arguments) {
        message += param + ' '
    }
    console.log(message)
}

writeLog4 ('Test message', 'Another message', 'Yet another message')