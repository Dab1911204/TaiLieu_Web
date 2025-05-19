const init = {
    todos:[{
        title:'Learn JavaScript',
        commpleted:false,
    },
    {
        title:'Learn HTML, CSS',
        commpleted:true,
    }]
}//giá trị khởi tạo cho store

export default function reducer(state = init, action){
    switch (action) {
        default:
            return state;
    }
}