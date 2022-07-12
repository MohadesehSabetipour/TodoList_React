import React,{useState , useEffect} from 'react';
import HeaderImg from '../to-do-list.png';
import styles from './Header.module.css';

const Header = () => {
    const date = new Date();
    const [day,setday] = useState(date.getDate());
    const [month,setMonth] = useState(date.getMonth());
    const [Day,setDay] = useState(date.getDay());
    
    const weekDay = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ]
    const Month = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ]
    const ordinaryNumbers = [
        "st",
        "nd", 
        "rd",
        "th",
    ];
    useEffect(()=>{
        setDay(weekDay[Day]);
        setMonth(Month[month]);
        if(day==1){
            setday(day+ordinaryNumbers[0]);
        } 
        else if(day==2){
            setday(day+ordinaryNumbers[1]);
        }
        else if(day==3){
            setday(day+ordinaryNumbers[2]);
        }
        else{
            setday(day+ordinaryNumbers[3]);
        }
    },[]);
    return (
        <div>
            <div className={styles.container}>
                <img src={HeaderImg} />
                <div className={styles.dateContainer}>
                    <h3>{Day}, {day}</h3>
                    <h4>{month}</h4>
                </div>
            </div>
        </div>
    );
};

export default Header;