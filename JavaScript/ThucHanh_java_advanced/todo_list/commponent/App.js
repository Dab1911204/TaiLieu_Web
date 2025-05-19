import html from '../core.js'
import Header from './header.js'
import Todo_list from './todo_list.js'
import Footer from './footer.js'

function App(){
    return html`
        <section class="todoapp">
            ${Header()}
            ${Todo_list()}
            ${Footer()}
        </section>
    `
}

export default App
