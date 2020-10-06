import React from 'react';
import logo from '../logo512.png';
import styles from '.././main.module.css';

export default class NavImage extends React.Component {
    render() {

        return(
            <div className={styles.navimagediv}>
                <h2 className={styles.navimagetext}>Simo Töytäri</h2>
                <img src={logo} alt="logo" width="200px"/>
            </div>  
        )
    }
}