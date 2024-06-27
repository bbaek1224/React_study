import React from 'react';
import MainContainer from '../../components/MainContainer/MainContainer';
import { Link, Route, Routes, useLocation, useNavigate } from 'react-router-dom';

function RouteStudySubPage1(props) {
    const navigate = useNavigate();
    const location = useLocation();

    console.log(location.pathname);
    console.log(location.pathname.lastIndexOf("/"));
    const index = location.pathname.lastIndexOf("/");
    console.log(location.pathname.substring(index + 1));

    const handleAgeClick = () => {
        navigate("/routestudy/page1/age", {replace: true});
        // window.location.href = "https://naver.com" => replace: false
        // window.location.replace("https://naver.com") => replace: true
    }
    return (
        <MainContainer>
            <div>
                <ul>
                    <Link to={"/routestudy/page1/name"}><li>name</li></Link>
                    <Link to={"/routestudy/page1/age"}><li>age</li></Link>
                    <Link to={"/routestudy/page1/address"}><li>address</li></Link>
                </ul>
                <button onClick={handleAgeClick}>Age</button>
                <div>
                    <Routes>
                        <Route path="/name" element={<h1>김일남</h1>} />
                        <Route path="/age" element={<h1>25</h1>}/>
                        <Route path="/address" element={<h1>부산시 사상구</h1>}/>
                    </Routes>
                </div>
            </div>
        </MainContainer>
    );
}

export default RouteStudySubPage1;