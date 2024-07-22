import { useState } from 'react';

function teacheruseInput(props) {
    const [ teacher, setTeacher ] = useState("");

    const onChange = (e) => {
        setTeacher(e.target.teacher);
    }

    return { teacher, setTeacher, onChange };
}

export default teacheruseInput;