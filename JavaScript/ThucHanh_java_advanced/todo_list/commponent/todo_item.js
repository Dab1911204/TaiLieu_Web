import html from '../core.js';

function Todo_item({todo}){
    return html`
            		<li class="${todo.commpleted && 'completed'}">
						<div class="view">
							<input class="toggle" type="checkbox" ${todo.commpleted && 'checked'}>
							<label>${todo.title}</label>
							<button class="destroy"></button>
						</div>
						<input class="edit" value="Create a TodoMVC template">
					</li>
    `
}

export default Todo_item
