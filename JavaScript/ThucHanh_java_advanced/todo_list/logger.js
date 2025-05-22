export default function logger(reducer){
    return function(state,action,...args){
        console.group(action)
        console.log('%c prev state', 'color: gray', state)
        console.log('%c action', 'color: blue', action, ...args)
        const nextState = reducer(state,action,...args)
        console.log('%c next state', 'color: green', nextState)
        console.groupEnd()
        return nextState
    }
}