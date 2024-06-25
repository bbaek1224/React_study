import { useState } from "react";
import "./App.css";
import Swal from "sweetalert2";

function App() {

    const [ imgCircle, setImgCircle ] = useState("");

    const handleClick = () => {
        Swal.fire({
            title: "프로필 이미지 변경",
            text: "프로필 이미지를 변경하시겠습니까?",
            showCancelButton: true,
            confirmButtonText: "예",
            cancelButtonText: "아니오"
        }).then(result => {
            if(result.isConfirmed) {
                const fileElement = document.createElement("input");
                fileElement.setAttribute("type", "file");
                fileElement.click();
        
                fileElement.onchange = (e) => {
                    const file = e.target.files[0];
        
                    const fileReader = new FileReader();
        
                    fileReader.onload = (e) => {
                        setImgCircle(e.target.result);
                    };   
                    
                    fileReader.readAsDataURL(file);
                }
            }
        })
    }

    return (
        <div className="container">
            <div className="imgBox" onClick={handleClick}>
                <img src={imgCircle} alt="" />
            </div>
        </div>
    );
}

export default App;