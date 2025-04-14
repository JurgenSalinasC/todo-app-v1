import todoStore from '../store/todo.store';
import html from './app.html?raw';
import { renderTodos } from './use-cases';


const ElementIDs = {

    TodoList: '.todo-list',
    NewTodoInput: '#new-todo-input'


}

/**
 * 
 * @param {String} elemnetId 
 */

export const App = (elemnetId) => {


    const displayTodos = () =>{
        const todos = todoStore.getTodos(todoStore.getCurrentFilter());
        renderTodos(ElementIDs.TodoList, todos);
        

    }





    // cuando la funcion se llama
(()=>{

    const app = document.createElement('div');
    app.innerHTML = html;
    document.querySelector(elemnetId).append(app);
    displayTodos();

})();

// referencia HTML

const newDescriptionInput = document.querySelector(ElementIDs.NewTodoInput)

//Listeners 
newDescriptionInput.addEventListener('keyup', (event)=>{

    if (event.keyCode !== 13) return;
    if(event.target.value.trim().length === 0) return;

    todoStore.addTodo(event.target.value);
    displayTodos();
    event.target.value = '';

});







}