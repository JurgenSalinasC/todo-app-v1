import todoStore, { Filters } from "../../store/todo.store";

let element;

/**
 * 
 * @param {string} elemnetId 
 */
export const renderPending = (elemnetId)=>{

    if(!element)
    element = document.querySelector(elemnetId);

    if(!element)
        throw new Error `element ${elemnetId} not found`;

    element.innerHTML = todoStore.getTodos(Filters.Pending).length;


}