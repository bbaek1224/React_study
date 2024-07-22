import { useState } from "react";

function App() {
    const [ imgSrc, setImgSrc ] = useState("");

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
        <>
            <button onClick={handleLoadingClick}>이미지 불러오기</button>
            <div>
                <img src={imgSrc} alt="" />
            </div>
        </>
    );
}

export default App;