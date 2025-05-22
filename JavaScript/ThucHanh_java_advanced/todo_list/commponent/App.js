import html from '../core.js'
import Header from './header.js'
import { connect } from '../store.js'
import Todo_list from './todo_list.js'
import Footer from './footer.js'

function App({todos}) {
    return html`
        <section class="todoapp">
            ${Header()}
            ${todos.length > 0 && Todo_list()}
            ${todos.length > 0 && Footer()}
        </section>
    `
}

export default connect()(App)
