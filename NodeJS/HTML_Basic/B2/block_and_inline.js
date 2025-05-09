/**
 * I.Block
 * -luôn bắt đầu trên 1 dòng mới (là 1 khối luôn chiếm full chiều ngang trên 1 dòng)
 * -1 số dạng thẻ block:+<div>
 *                      +<h1>,<h2>,<h3>,<h4>,<h6>
 *                      +<p>
 *                      +<table>
 *                      +<form>
 */

/**
 * II.Inline
 * -Ở trên cùng 1 hàng
 * -Chỉ xuống dòng khi hết chiều ngang
 * -1 số dạng thẻ inline:+<a>
 *                       +<b>
 *                       +<i>
 *                       +<img>
 *                       +<input>
 *                       +<lable>
 *                       +<select>
 *                       +<span>
 *                       +<textaere>
 *                       +<button>
 */

/**
 * Lưu ý:
 * -Phần tử inline ko đc chứa phần tử block
 * -Phần tử inline chỉ có thể chứ phần tử kiểu inline,dữ liệu
 * -Phần tử block chỉ đc chứ phần tử block,inline,dữ liệu
 * -Ngoại lệ thẻ <a>(inline) có thể chứa phần tử kiểu block
*/