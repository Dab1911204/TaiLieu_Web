//DOM events
//1. Attribute events: là các sự kiện được gán trực tiếp vào trong thẻ HTML
//2. Assigned events using the element node: là các sự kiện được gán vào trong thẻ HTML thông qua thuộc tính của đối tượng DOM
var h1Element = document.querySelector("h1"); //lấy ra thẻ h1 đầu tiên trong trang web
console.log(h1Element);
//click: sự kiện click chuột lên 1 element nào đó
//change: sự kiện thay đổi nội dung của 1 element nào đó(hay dùng cho input, select, textarea)
//copy: sự kiện copy nội dung của 1 element nào đó
//doubleclick: sự kiện nháy đúp chuột vào 1 element nào đó
//drag: sự kiện kéo thả chuột vào 1 element nào đó
//dragend: sự kiện kết thúc kéo thả chuột vào 1 element nào đó
//focus: sự kiện khi 1 element nào đó được chọn(chỉ dùng cho input, select, textarea)
//keydown: sự kiện khi 1 phím trên bàn phím được nhấn xuống
//keyup: sự kiện khi 1 phím trên bàn phím được nhả ra
//load: sự kiện khi 1 trang web được tải xong
//mousedown: sự kiện khi 1 phím chuột được nhấn xuống
//mousemove: sự kiện khi 1 phím chuột được di chuyển
//mouseout: sự kiện khi 1 phím chuột được di chuyển ra ngoài 1 element nào đó
//mouseover: sự kiện khi 1 phím chuột được di chuyển vào trong 1 element nào đó
//mouseup: sự kiện khi 1 phím chuột được nhả ra
//resize: sự kiện khi 1 trang web hoặc kích thước của elemet được thay đổi kích thước
//scroll: sự kiện khi 1 trang web được cuộn lên hoặc xuống
h1Element.onclick = function () {
    console.log("H1 element clicked");
}
var h2Element = document.querySelectorAll("h2");
h2Element.forEach(function (h2) {
    h2.onclick = function (e) {
        //console.log("H2 element clicked: " + e);//e là đối tượng sự kiện, nó chứa các thông tin về sự kiện đó
        console.log(e.target);//e.target là đối tượng mà sự kiện xảy ra trên đó
    }
});
