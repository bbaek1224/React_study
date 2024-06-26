import React from 'react';
import MainContainer from '../../components/MainContainer/MainContainer';
import { Link, Route, Routes } from 'react-router-dom';

function RouteStudySubPage1(props) {
    return (
        <MainContainer>
            <div>
                <ul>
                    <Link to={"/routestudy/page1/name"}><li>name</li></Link>
                    <Link to={"/routestudy/page1/age"}><li>age</li></Link>
                    <Link to={"/routestudy/page1/address"}><li>address</li></Link>
                </ul>
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