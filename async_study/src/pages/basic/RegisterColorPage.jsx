import axios from 'axios';
import React, { useState } from 'react';

function RegisterColorPage(props) {
    const [ color, setColor ] = useState({
        colorName: ""
    })

    const handleColorChange = (e) => {
        setColor({
            ...color,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmitClick = async () => {
        try {
            const response = await axios.post("http://localhost:8080/api/v1/color", color);   
            console.log(response.data);
        } catch (error) {
            console.log(error)
        }

        setColor({
            colorName: ""
        })
    }

    return (
        <div>
            <h1>색상 등록 페이지</h1>
            <p>
                <label htmlFor="">색상 이름</label>
                <input type="text" 
                    name='colorName'
                    onChange={handleColorChange} 
                    value={color.colorName} />
            </p>
            <p>
                <button onClick={handleSubmitClick}>등록</button>
            </p>
        </div>
    );
}

export default RegisterColorPage;