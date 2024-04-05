import Todo from '../model/Todo';
import classes from './TodoItem.module.css';

const TodoItem: React.FC<{
    item: Todo,
    onRemoveTodo: () => void
    }> = (props) => {

    function onClickHandler ( event: React.MouseEvent) {
    }

    return (
        <li className={classes.item} key={props.item.id} onClick={props.onRemoveTodo}>{props.item.title}</li>
    );
}

export default TodoItem;