import html from '../core.js';
import Todo_item from './todo_item.js';
import { connect } from '../store.js';

function Todo_list({todos}){
    return html`
            <section class="main">
				<input id="toggle-all" class="toggle-all" type="checkbox">
				<label for="toggle-all">Mark all as complete</label>
				<ul class="todo-list">
					${todos.map(todo => Todo_item({ todo }))}
				</ul>
			</section>
    `
}

export default connect()(Todo_list)//connect sẽ chả về 1 func nên thêm 1 () để chuyền tham số cho hàm đc return ra
