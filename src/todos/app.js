import todoStore from '../store/todo.store';
import html from './app.html?raw';
import { renderTodos } from './use-cases';


const ElementIDs = {

    TodoList: '.todo-list'


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







}