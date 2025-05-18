const init = {
    cars:['BMW']
}
export default function reducer(state = init, action,args){
    switch(action){
        case 'ADD':
            const [newCar] = args
            return {...state,cars:[...state.cars,newCar]}
            break;
        
        // case 'DELETE_CAR':
        //     return {...state,cars:state.cars.filter(car => car !== action.payload)}
        //     break;
        // case 'UPDATE_CAR':
        //     return {...state,cars:state.cars.map(car => car === action.payload.oldCar ? action.payload.newCar : car)}
        //     break;
        default:
            return state;
    }
}