import React from 'react';
import './custom-button-styles.css'

const CustomButton = ({value = '', onClick}) => {
    return (
        <div className="button-container">
            <button onClick = {onClick}>{value.toUpperCase()}</button>
        </div>
    )
}


export default CustomButton;