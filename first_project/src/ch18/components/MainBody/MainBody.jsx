/** @jsxImportSource @emotion/react */
import { Route, Routes } from 'react-router-dom';
import * as s from './style';
import RouteStudyPage from '../../pages/RouteStudyPage/RouteStudyPage';
import HomePage from '../../pages/HomePage/HomePage';
import ParamsStudy from '../../pages/ParamsStudy/ParamsStudy';
import SearchParamsStudyPage from '../../pages/SearchParamsStudy/SearchParamsStudyPage';
import CustomHookPage from '../../pages/CustomHookPage/CustomHookPage';
import MemoizationPage from '../../pages/Memoization/MemoizationPage';

function MainBody(props) {
    return (
        <div css={s.layout}>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/routestudy/*' element={<RouteStudyPage />} />
                <Route path='/params/:name/*' element={<ParamsStudy />} />
                <Route path='/searchparamsstudy' element={<SearchParamsStudyPage />} />
                <Route path='/customhook/:id' element={<CustomHookPage />} />
                <Route path='/memoization' element={<MemoizationPage />} />
            </Routes>
        </div>
    );
}

export default MainBody;