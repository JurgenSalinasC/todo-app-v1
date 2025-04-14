import { Todo } from "../todos/models/todo.model"

const Filters = {
    All:'all',
    Completed:'Completed',
    Pending:'pending'
}

const state = {

    todos: [
        new Todo (['piedra del alma']),
        new Todo (['piedra del infinito']),
        new Todo (['piedra del tiempo']),
        new Todo (['piedra del tiempo']),
        new Todo (['piedra del realidad']),

    ],

    filter: Filters.All

}

const initStore = () => {

    console.log(state);
    

    console.log('initStore');
    
}

const loadStore = () =>{

    throw new Error ('not implemented');
}

const getTodos= (filter = Filters.All) =>{

       switch (filter){
        case Filters.All:
            return [...state.todos];
        case Filters.Completed:
            return state.todos.filter( todo => todo.done);
        case Filters.Pending:
            return state.todos.filter( todo =>!todo.done);
        
        default :
        throw new Error (` option ${filter} is not valid`);

       }
}


/**
 * 
 * @param {string} description 
 */
const addTodo = (description) =>{

    if (!description) throw new Error ('description is requied');

    state.todos.push( new Todo(description));


}

/**
 * 
 * @param {string} todoId 
 */

const toggleTodo = (todoId) =>{

    state.todos = state.todos.map(todo =>{
        if ( todo.id === todoId ){
            todo.done = !todo.done;
        }
    return todo;

    });
}

const deteleTodo = (todoId) =>{

    state.todos = state.todos.filter( todo => todo.id !== todoId ) ;
}

const deleteCompleted = () =>{

    state.todos = state.todos.filter( todo => todo.done) ;
}

/**
 * 
 * @param {Filters} newFilter 
 */

const setFilter = (newFilter = Filters.All) =>{

    state.filter = newFilter;
}

const getCurrentFilter = () =>{

    return state.filter;
}


export default {
    initStore,
    loadStore,
    addTodo,
    toggleTodo,
    deteleTodo,
    deleteCompleted,
    setFilter,
    getCurrentFilter,
    getTodos,

}