import { useEffect, useRef, useState } from "react";
import "./App.css"

function App() {

    const emptyUser = {
        id: "",
        email: ""
    };

    const userRef = {
        id: useRef(),
        email: useRef()
    }

    const [ imgSrc, setImgSrc ] = useState("");
    const [ inputData, setInputData ] = useState({ ...emptyUser });
    const [ userList, setUserList ] = useState([]);
    
    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(inputData));
        localStorage.setItem("img", JSON.stringify(imgSrc));
        }, [inputData, imgSrc])

    
    const handleChange = (e) => {
        setInputData(inputData => ({
           ...inputData,
           [e.target.name]: e.target.value 
        }))
    }

    const handleInputKeyDown = (e) => {
        if(e.keyCode === 13) {
            const { id, email } = userRef;
            switch(e.target.name) {
                case "id":
                    email.current.focus();
                    break;
                case "email":
                    id.current.focus();
                    setUserList(userList => [ ...userList, inputData ]);
                    setInputData({ ...emptyUser });
                    break;
                default:
            }
        }
    }

    const handleLoadingClick = () => {
        const fileElement = document.createElement("input");
        fileElement.setAttribute("type", "file");
        fileElement.setAttribute("multiple", true);
        fileElement.click();

        fileElement.onchange = (e) => {
            const file = e.target.files[0];

            const fileReader = new FileReader();

            fileReader.onload = (e) => {
                setImgSrc(e.target.result);
            };

            fileReader.readAsDataURL(file);
        }
    }

    return (
        <div className="container">
            <h1 className="title">프로필</h1>
            <div className="img-box" onClick={handleLoadingClick}>
                <img src={imgSrc} alt="" />
            </div>
            <div className="input-box">
                <div>
                    <h2>이름</h2>
                    <input 
                        name="id"
                        type="text" 
                        value={inputData.id}
                        onChange={handleChange}
                        onKeyDown={handleInputKeyDown}
                        ref={userRef.id}
                    />
                </div>
                <div>
                    <h2>이메일</h2>
                    <input 
                        name="email"
                        type="text" 
                        value={inputData.email}
                        onChange={handleChange}
                        onKeyDown={handleInputKeyDown}
                        ref={userRef.email}
                    />
                </div>
                <div>
                    <button>저장</button>
                </div>
            </div>
        </div>
    )
}

export default App;