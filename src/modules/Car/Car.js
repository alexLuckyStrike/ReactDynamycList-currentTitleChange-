import React from 'react';
import {render} from 'react-dom';
import styles from './Car.module.css'

function Car(props){
    return (
        <div className={styles.wrapper}>
            <h1>{props.name}</h1>
            <p>{props.year}</p>
            <button onClick={props.onChangeTitle}>Click</button>
            <form onSubmit={props.onToggle} className={styles.container} action="#">
                <label><input className="text" type="text"/></label>
                <label><input type="submit"/></label>
            </form>
        </div>
    )
}
export default Car;


