import storege from "./util/storege.js"
const init = {
    todos:storege.get(),
    filter: 'all',
    filters: {
        all: () => true,
        active: todo => !todo.commpleted,
        completed: todo => todo.commpleted,
    },
    editIndex:null 
}//giá trị khởi tạo cho store

const actions = {
    add({todos}, title){
        if(title){
            todos.push({
                title,
                commpleted:false,
            })
            storege.set(todos)
        }
    },
    toggle({todos}, index){
        todos[index].commpleted = !todos[index].commpleted
        storege.set(todos)
    },
    toggleAll({todos}, checked){
        todos.forEach(todo => {
            todo.commpleted = checked
        })
        storege.set(todos)
    },
    destroy({todos}, index){
        todos.splice(index, 1)
        storege.set(todos)
    },
    switchFilter(state, newFilter){
        state.filter = newFilter
    },
    clearCompleted(state){
        state.todos = state.todos.filter(state.filters.active)
        storege.set(state.todos)
    },
    startEdit(state, index){
        state.editIndex = index
    },
    endEdit(state, title){
        if(state.editIndex !== null){
            if(title){
                state.todos[state.editIndex].title = title
                storege.set(state.todos)
            }else{
                this.destroy(state, state.editIndex)
            }
            state.editIndex = null
        }
    },
    cancelEdit(state){
        state.editIndex = null
    }
}

export default function reducer(state = init, action,args){
    actions[action] && actions[action](state, ...args)
    return state;
}