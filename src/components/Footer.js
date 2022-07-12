import React from 'react';
import styles from './Footer.module.css';

const Footer = (props) => {
    return (
        <div className={props.className}>
            <p>{props.totalTasks} {props.totalTasks === 1 ? "task" : "tasks"}</p>
            <p>{props.doneTasks} complete</p>
            <p>{props.totalTasks - props.doneTasks} open</p>  
        </div>
    );
};

export default Footer;