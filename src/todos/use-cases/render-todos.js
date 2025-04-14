import { Todo } from "../models/todo.model";
import { createTodoHTML } from "./create-todo-html";


let element;
/**
 * 
 * @param {string }etId 
 * @param {Todo} todos 
 */
export const renderTodos = (elemnetId, todos = []) => {

    //todos referencia
    if (!element)
     element = document.querySelector(elemnetId);
    if (!element) throw new Error (`Element ${ elemnetId} not found`);

    element.innerHTML = '';


    todos.forEach(todo => {

        element.append( createTodoHTML(todo))

    });

    
    



}