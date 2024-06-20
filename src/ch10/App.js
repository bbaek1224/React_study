import { useRef, useState } from "react";

function App() {

    const userRef = {
        username: useRef(),
        password: useRef(),
        email: useRef()
    }

    const emptyUser = {
        username: "",
        password: "",
        email: "",
    }

    const [ inputValue, setInputValue ] = useState({ ...emptyUser });
    const [ userList, setUserList ] = useState([]);

    const handleInputChange = (e) => {
        setInputValue(inputValue => {
            return {
                ...inputValue,
                [e.target.name]: e.target.value
            }
        });
    }

    const handleInputKeyDown = (e) => {

        if(e.keyCode === 13) {
            if(e.target.name === "username") {
                userRef.password.current.focus();
            }
            if(e.target.name === "password") {
                userRef.email.current.focus();
            }
            if(e.target.name === "email") {
                userRef.username.current.focus();
                setUserList(userList => [ ...userList, inputValue ]);
                setInputValue({...emptyUser});
            }
        }
    }

    const borderStyle = {
        border: "1px solid #dbdbdb"
    }

    return <>
        {/*
            1. 입력후에 엔터를 입력하면 다음 input으로 포커스 이동
            2. name 필드에서 엔터를 입력하면 배열에 user객체 추가 그리고 input value 초기화
        */}
        <input name="username" placeholder="사용자명" 
                onKeyDown={handleInputKeyDown} onChange={handleInputChange}
                ref={userRef.username} value={inputValue.username}/>
        <input name="password" placeholder="비밀번호" 
                onKeyDown={handleInputKeyDown} onChange={handleInputChange}
                ref={userRef.password} value={inputValue.password}/>
        <input name="email" placeholder="이메일" 
                onKeyDown={handleInputKeyDown} onChange={handleInputChange} 
                ref={userRef.email} value={inputValue.email}/>

        {/*
            3. tbody -> tr묶음을 userList에서 map통해 렌더링
            4. table 디자인 -> border: 1px solid #dbdbdb;
        */}
        <table border={borderStyle}>
            <thead>
                <tr>
                    <th>index</th>
                    <th>username</th>
                    <th>password</th>
                    <th>email</th>
                </tr>
            </thead> 
            <tbody> {userList.map((name, index) => <tr key={index}>
                <td>{index + 1}</td>
                <td>{name.username}</td>
                <td>{name.password}</td>
                <td>{name.email}</td>
                </tr>)}
            
            </tbody>
        </table>
    </>
}

export default App;