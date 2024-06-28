import "./App.css"

function App() {
    
    
    return <>
        <div className="container">
            <div className="h1-box">
                <h1>회원정보 수정</h1>
            </div>
            <div className="input-box">
                <label for="name">이름:</label>
                <input type="text" id="name"/>
                <label for="email">이메일:</label>
                <input type="text" id="email"/>
                <label for="password">비밀번호:</label>
                <input type="text" id="password"/>
            </div>
            <div className="button-box">
            <button>저장</button>
            </div>
        </div>
    </>
}

export default App;