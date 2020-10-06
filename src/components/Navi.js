import React from 'react';
import NavImage from './NavImage';
import NavButtons from './NavButtons';
import styles from '.././main.module.css';

export default class Navi extends React.Component {
    render(){

        return(
            <div className={styles.navbarstyle}>
                <NavImage />
                <NavButtons />
            </div>
        )
    }
}