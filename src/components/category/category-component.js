import React, {useEffect, useState} from 'react';
import Card from '../card/card-component.js';
import './category-styles.css';
import axios from 'axios';

const Category = (props) => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        const { id } = props.match.params;
        axios.get(`https://api.spacexdata.com/v3/${id}`).then((response) => {
            setItems(response.data)
        });
    }, []);

    return (
        <div className="category-container">
            {
               items.map((item, index) => (<Card key = {index} onClick = {() => {}} data = {
                Object.keys(item).map(key => typeof item[key] === 'string' ? ({label: key, value: item[key]}): {}).filter(item => !!item.label)
        } />))
            }
        </div>
    );
}

export default Category;