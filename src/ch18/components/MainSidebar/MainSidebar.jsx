/** @jsxImportSource @emotion/react */
import MainSidebarBody from './MainSidebarBody/MainSidebarBody';
import MainSidebarHeader from './MainSidebarHeader/MainSidebarHeader';
import * as s from './style';

function MainSidebar({ isMainSidebarShow, setIsMainSidebarShow }) {
    return (
        <div css={s.layout(isMainSidebarShow)}>
            <MainSidebarHeader setIsMainSidebarShow={setIsMainSidebarShow}/>
            <MainSidebarBody isMainSidebarShow={isMainSidebarShow} setIsMainSidebarShow={setIsMainSidebarShow}/>
        </div>
    );
}

export default MainSidebar;