import html from '../core.js';
import Todo_item from './todo_item.js';
import { connect } from '../store.js';

function Todo_list({todos,filter,filters}) {
	 
    return html`
            <section class="main">
				<input id="toggle-all" class="toggle-all" type="checkbox" onchange="dispatch('toggleAll', this.checked)" ${todos.every(filters.completed) && 'checked'}>
				<label for="toggle-all">Mark all as complete</label>
				<ul class="todo-list">
					${todos.filter(filters[filter]).map((todo,index) => Todo_item({ todo,index }))}
				</ul>
			</section>
    `
}

export default connect()(Todo_list)//connect sẽ chả về 1 func nên thêm 1 () để chuyền tham số cho hàm đc return ra
