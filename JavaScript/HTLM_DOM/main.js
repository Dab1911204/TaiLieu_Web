//HTML DOM (Document Object Model) :DOM là viết tắt của Document Object Model - một mô hình biểu diễn tài liệu dạng cây trong các tài liệu HTML hoặc XML.
//  DOM cho phép các lập trình viên truy cập và thay đổi nội dung,cấu trúc cũng như các kiểu của trang web thông qua ngôn ngữ lập trình, như JavaScript
/**
 * 1. Element : là thẻ tag trong html(H1, div, p, a, input, form, ...)
 * 2. Attribute: là thuộc tính của thẻ(href, src, id, class, style, ...)
 * 3. Text:
 */
//-----------------------------------------
//JavaScript:cung cấp công cụ để truy xuất vào đc cấu trúc của HTML DOM và thay đổi nó
//JavaScript chạy ở trình duyệt (Browser) hoặc ở Server(NodeJS)
//Browser:HTML -> DOM -> DOM API(Application progamming interface chỉ tồn tải ở trình duyệt để chạy web) -> JavaScript
//Bản thân JavaScript không thể truy cập vào DOM mà cần thông qua DOM API
//DOM API: cung cấp các phương thức, thuộc tính để truy xuất vào DOM,DOM có trên browser
//DOM API: Document, Element, NodeList, Event, ...
//Document: là trang web, nó chứa tất cả các element, attribute, text
//Document: đại diện toàn bộ cho webside phải qua document ms có thể thao tác vs các element,...
//Ví dụ
document.write('Hello World');//Sẽ viết ra hello world trên trang web      