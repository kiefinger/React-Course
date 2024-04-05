import Todo from '../model/Todo';
import TodoItem from './TodoItem';
import classes from './Todos.module.css';


const Todos: React.FC<{
    items: Todo[];
    onRemoveTodo: ( id : string) => void
    }> = (props) => {

    return (
        <ul className={classes.todos}>
            {props.items.map(  item  => <TodoItem item={item} onRemoveTodo={props.onRemoveTodo.bind(null,item.id)}  /> ) }
        </ul>
    );
}

export default Todos;