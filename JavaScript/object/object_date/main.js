 //Object Date

var date = new Date();
console.log(date);
console.log(date.getDate()); //lấy ngày trong tháng
console.log(date.getDay());//lấy ngày trong tuần
console.log(date.getFullYear());//lấy năm
console.log(date.getHours());//lấy giờ
console.log(date.getMilliseconds());//lấy mili giây
console.log(date.getMinutes());//lấy phút
console.log(date.getMonth());//lấy tháng
console.log(date.getSeconds());//lấy giây
console.log(date.getTime());//lấy thời gian
console.log(date.getTimezoneOffset());//lấy múi giờ
console.log(date.getUTCDate());//lấy ngày trong tháng theo múi giờ UTC
console.log(date.getUTCDay());//lấy ngày trong tuần theo múi giờ UTC
console.log(date.getUTCFullYear());//lấy năm theo múi giờ UTC
console.log(date.getUTCHours());//lấy giờ theo múi giờ UTC
console.log(date.getUTCMilliseconds());//lấy mili giây theo múi giờ UTC
console.log(date.getUTCMinutes());//lấy phút theo múi giờ UTC
console.log(date.getUTCMonth());//lấy tháng theo múi giờ UTC
console.log(date.getUTCSeconds());//lấy giây theo múi giờ UTC
console.log(date.getYear());//lấy năm
console.log(date.now());//lấy thời gian hiện tại
console.log(date.parse('2021-07-01'));//lấy thời gian từ 1970 đến ngày đó
console.log(date.setDate(1));//set ngày trong tháng 
console.log(date.setFullYear(2021));//set năm
console.log(date.setHours(12));//set giờ
console.log(date.setMilliseconds(100));//set mili giây
console.log(date.setMinutes(30));//set phút
console.log(date.setMonth(6));//set tháng
console.log(date.setSeconds(30));//set giây
console.log(date.setTime(0));//set thời gian
console.log(date.setUTCDate(1));//set ngày trong tháng theo múi giờ UTC
console.log(date.setUTCFullYear(2021));//set năm theo múi giờ UTC
console.log(date.setUTCHours(12));//set giờ theo múi giờ UTC
console.log(date.setUTCMilliseconds(100));//set mili giây theo múi giờ UTC
console.log(date.setUTCMinutes(30));//set phút theo múi giờ UTC
console.log(date.setUTCMonth(6));//set tháng theo múi giờ UTC
console.log(date.setUTCSeconds(30));//set giây theo múi giờ UTC
console.log(date.setYear(2021));//set năm
console.log(date.toDateString());//chuyển ngày thành chuỗi
console.log(date.toISOString());//chuyển ngày thành chuỗi
