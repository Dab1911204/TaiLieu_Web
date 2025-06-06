export default function html([first,...strings],...values){
    return values.reduce(
        (acc,cur) => acc.concat(cur,strings.shift()),
        [first]//ban đầu biến tích chữ sẽ là giá [first]
    )
    .filter(x => x && x!==true || x===0)
    .join('')
}

export function createStore(reducer){
    let state = reducer()
    const roots = new Map() 
    function render(){
        for(const [root,commponent] of roots){
            const output = commponent()
            root.innerHTML = output
        }
    }
    return {
        attach(component,root){
            roots.set(root,component)
            render()
        },
        connect(selector = state => state){
            return component => (props,...args) =>
                component(Object.assign({},props,selector(state),...args))
        },
        dispatch(action,...args){
            state = reducer(state,action,args)
            render()
        }
    }
}