import React from 'react';
import styles from './List.module.css';
import { FaTrashAlt } from "react-icons/fa";

const List = (props) => {

    return (
        <div>
            <li className={styles.listContainer}>
                <div className={styles.taskContainer}>
                    <input type="checkbox" checked={props.todo.completed} onChange={() => props.markComplete(props.todo.id)} />
                    <span className={props.todo.completed ? styles.completedTask : styles.uncompletedTask}>{props.todo.title}</span>
                </div>
                <div className={styles.trash}>
                    <button onClick={() => props.delTodo(props.todo.id)}><FaTrashAlt/></button>
                </div>
                
                
            </li>
            
        </div>
    );
};

export default List;