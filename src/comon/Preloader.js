import React from 'react';
import spinner from '../assets/images/Spinner.svg'

let Preloader = (props) => {
    return <img src = {spinner} style={{backgroundColor: 'deepskyblue'}}/>
}
export default Preloader;