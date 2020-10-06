import React from 'react';
import styles from '.././main.module.css';
import buttons from './NavButtons.js';

export default class MainPage extends React.Component {

    render() {

        //Check button status
        let buttonStatus = () => {
            //buttons.getButtonState();
        }

        //console.log(buttonStatus);

        return(
            <div className={styles.main_page}>
                <h2>{buttonStatus}</h2>
            </div>
        )
    }
}