import React,{useState,useReducer} from 'react';
import styles from './Lists.module.css';
import { FaEdit } from "react-icons/fa";
import { v4 } from "uuid";
import List from './List';
import Footer from './Footer';

const Lists = () => {


    const [todos, setTodos] = useState([]);
    const [task,setTask]=useState("");

    const changeHandler=(event)=>{
        setTask(event.target.value);
    }

    const clickHandler=()=>{
        const newTask = {
            id: v4(),
            title:task,
            completed: false,
        };
        if(task==""){
            alert("Please add a task description.")
        }else{
            setTodos([...todos, newTask]);
            setTask("");
        }
        
    }

    const delTask = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const markComplete = (id) => {
        setTodos(todos.map((todo) =>todo.id === id ? { ...todo, completed: !todo.completed } : todo )
        );
    };
    const search = async (e) => {
        if(e.key === 'Enter') {
            const newTask = {
                id: v4(),
                title:task,
                completed: false,
            };
            if(task==""){
                alert("Please add a task description.")
            }else{
                setTodos([...todos, newTask]);
                setTask("");
            }
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.inputContainer}>
                <input className={styles.input} type="text" value={task} onKeyPress={search} onChange={changeHandler} placeholder="Add task..." />
                <div className={styles.inputImg} onClick={clickHandler}>
                    <FaEdit/>
                </div>
            </div>
            <div className={todos.length<7 ? styles.listsContainer : styles.showScrollBar }>
                {todos.length ? <ul>
                    {todos.map((todo)=><List
                    key={todo.id}
                    todo={todo}
                    markComplete={markComplete}
                    delTodo={delTask}
                    />)}
                </ul> : <p className={styles.listsText}>You're all caught up!</p>}

            </div>
            
            <Footer className={styles.footer} totalTasks={todos.length} doneTasks={todos.filter((todo) => todo.completed).length} />
        </div>

    );
};

export default Lists;