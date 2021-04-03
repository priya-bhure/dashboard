import React from 'react';
import './card-styles.css';

const Card = ({key, data, onClick, pointer = ''}) => {
    return (
        <div key = {key} onClick = {onClick} className={`card-container ${pointer}`}>
            {
                data.map(({label, value}) => (<div><span style={{color: '#4A4A4A',fontWeight:'bolder',letterSpacing:'2px'}}>{label !== '' ? label.toUpperCase() + ': ': ''}</span><span style={{color: 'white'}} >{value}</span></div>))
            }
        </div>
    );
}

export default Card;