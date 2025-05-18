//import {createStore} from 'https://cdn.skypack.dev/redux';
//////////////////////////Xây dựng thư viên redux////////////////////////////////
function createStore(reducer) {
    let state = reducer(undefined,{});
    let subscribers = [];

    return {
        getState() {
            return state;
        },
        dispatch(action) {
            state = reducer(state,action);
            subscribers.forEach(subscriber => subscriber());//sau khi duyệt bắt cái thông tin đi thì sẽ duyệt lại các func và thực thi nó
        },
        subscribe(subscriber){
            subscribers.push(subscriber);
        }
    }
}


////////////////////////Ứng Dụng///////////////////////////
const initState = 0//giá trị bạn đầu 
//reducer
function bankReducer(state = initState, action) {
    switch (action.type) {
        case 'DEPOSIT':
            return state + action.payload;
        case 'WITHDRAW':
            return state - action.payload;
        default:
            return state;
    }
}

//store
const store = window.store = createStore(bankReducer);
console.log(store.getState());
//Actions
function actionDeposit(payload){
    return {
        type:'DEPOSIT',
        payload
    }
}
function actionWithdraw(payload){
    return {
        type:'WITHDRAW',
        payload
    }
}
//DOM events
const deposit = document.querySelector('#deposit');
const withdraw = document.querySelector('#withdraw');

//Event handler
deposit.onclick = function (){
    store.dispatch(actionDeposit(10));
}
withdraw.onclick = function (){
    store.dispatch(actionWithdraw(10));
}
//Listener
store.subscribe(() => {
    render();
});
//Render
function render(){
    const output = document.querySelector('#output');
    output.innerHTML = store.getState();
}
render();
//subscribe
