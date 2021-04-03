import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Card from '../card/card-component.js';
import './categories-styles.css';

const Categories = (props) => {
    const [items, setItems] = useState([]);
    const handleClick = (data, history) => {
        history.push(`/categories/${data.toLowerCase()}`)
    }

    useEffect(() => {
        let url = 'https://run.mocky.io/v3/602ccde9-9cf9-4d5d-a05e-54c262286ccc'
        if (props.userType == 'admin') {
            url = 'https://run.mocky.io/v3/8934747c-34c5-4624-a36b-8c927b56a49e'
        }
        axios.get(url).then((response) => {
            setItems(response.data.categories)
        })
     }, [])

    return (
        <div className='categories-container' style={{color: 'white'}}>
        { items.map((item) => (<Card onClick = {() => handleClick(item, props.history)} pointer = 'pointer' data = {[{label: '', value: item}]} />))}
        </div>
    );
}

export default Categories;