const fullName = 'Nguyễn Đức Anh'
console.log(fullName)
// document.cookie = `fullName=${fullName}`
//nếu trong Cookies cột Expires / Max-Age là giá trị:Session(1 phiên: có nghĩa là khi tắt trình duyệt đi sẽ mất cookies)
//Thay đổi (nếu muốn bằng cách)
setCookies("fullName",fullName,3)//tạo cookies có thời gian sử dụng là 3 ngày
function setCookies(cname,cvalue,exdays){
    const d = new Date()
    d.setTime(d.getTime()+(exdays*24*60*60*1000))
    let expires = "expires="+d.toUTCString()
    document.cookie = cname + "=" + cvalue + ";" + expires
}
var cookie = document.cookie
console.log(cookie)
console.log(getCookies("fullName"))
function getCookies(cname){
    let name = cname + "="
    let ca = document.cookie.split(';')
    for(let i=0;i<ca.length;i++){
        let c = ca[i]
        while(c.charAt(0)==' '){
            c = c.substring(1)
        }
        if(c.indexOf(name)==0){
            return c.substring(name.length,c.length)
        }
    }
    return ""
}

function deleteCookies(cname){
    document.cookie = `fullName=${fullName};expires=Thu,01 Jan 2026 00:00:00 UTC`
}
