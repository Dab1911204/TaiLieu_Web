//Toast function
function toast ({title='',message='',type='info',duration=3000}){
    const main = document.getElementById('toast')
    if(main){
        const toast = document.createElement('div')
        toast.classList.add('toast')
        toast.classList.add(`toast--${type}`)
        
        const autoRemoveId = setTimeout(()=>{
            main.removeChild(toast)
        },duration + 1000)
        toast.onclick = e => {
            if(e.target.closest('.toast__close')){
                main.removeChild(toast)
                clearTimeout(autoRemoveId)
            }
        }
        const delay = (duration/1000).toFixed(2)
        toast.style.animation = `slideInLeft ease .3s, fadeOut linear 1s ${delay}s forwards`
        const icons = {
            success:'fa-solid fa-circle-check',
            info:'fa-solid fa-circle-info',
            warning:'fa-solid fa-circle-exclamation',
            error:'fa-solid fa-circle-exclamation'
        }
        const icon = icons[type]
        toast.innerHTML = `
            <div class="toast__icon">
                <i class="${icon}"></i>
            </div>
            <div class="toast__body">
                <h3 class="toast__title">
                    ${title}
                </h3>
                <p class="toast__msg">
                    ${message}
                </p>
            </div>
            <div class="toast__close">
                <i class="fa-solid fa-xmark"></i>
            </div>
        `
        main.appendChild(toast)
    }
}
function showSuccessToast(){
    toast({
        title:'Success',
        message:' Máy vi tính kết nối internet thành công',
        type:'success',
        duration:3000
    })
}
function showInfoToast(){
    toast({
        title:'Info',
        message:' Máy vi tính kết nối internet thành công',
        type:'info',
        duration:3000
    })
}
function showWarningToast(){
    toast({
        title:'Warning',
        message:' Máy vi tính kết nối internet thành công',
        type:'warning',
        duration:3000
    })
}
function showErrorToast(){
    toast({
        title:'Error',
        message:' Máy vi tính kết nối internet thành công',
        type:'error',
        duration:3000
    })
}
