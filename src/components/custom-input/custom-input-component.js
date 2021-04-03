
import React, {useRef, useState} from 'react';
import './custom-input-styles.css';



const CustomInput = ({type = '', placeholder = '', autoSelect = false, saveInput, setAuthErr}) => {
    const [input, setInput] = useState('');
    const ref = useRef(null);

    
    const handleChange = (e) => {
        setAuthErr({exists: false, error: ''})
        setInput(e.target.value)
        if(e.target.value === ''){
            saveInput('');
        }
    }

    return (
        <div className="input-container">
            <div className="label-container">
                <span ref = {ref} className="input-placeholder">{placeholder}</span>
                <input 
                    onChange = { (e) => handleChange(e)}
                    className="input-field"
                    type={type}
                    autoFocus={autoSelect}
                    />
            </div>
        </div>
    );
}

export default CustomInput;