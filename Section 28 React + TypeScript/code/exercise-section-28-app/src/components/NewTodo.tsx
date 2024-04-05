import {useRef } from 'react';
import classes from './NewTodo.module.css';

const NewTodo: React.FC<{onAddTodo: (text: string) => void }> = (props) => {

    const text = useRef<HTMLInputElement>(null);


    function submit (event : React.FormEvent) {
        event.preventDefault();
        const t = text.current!.value;
        if ( t.trim().length===0) {
            return;
        }
        props.onAddTodo(t);
    }
    return (
    <form className={classes.form} onSubmit={submit}>
        <label htmlFor='text'>Text</label>
        <input id="text" type='text' ref={text}/>
        <button >AddTodo</button>
    </form>
    )
}

export default NewTodo;
