import React from 'react';
import styles from '.././main.module.css';

export default class NavButtons extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            button:5
        }
    }

     getButtonState = () => {
         return this.state;
     }
     
    
    render() {

        console.log(this.state);   

        return(
            <div>
                <button className={styles.buttonstyle}>HOME</button>
                <button className={styles.buttonstyle}>ABOUT ME</button>
                <button className={styles.buttonstyle}>RESUME</button>
                <button className={styles.buttonstyle}>GITHUB</button>
                <button className={styles.buttonstyle}>CONTACT</button>
            </div>
        )
    }
}