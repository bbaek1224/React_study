/** @jsxImportSource @emotion/react */
import MainContainer from '../MainContainer/MainContainer';
import * as s from './style';
import { FaBars, FaUser } from "react-icons/fa";

function MainHeader({ setIsMainSidebarShow }) {
    const handleMainMenuToggleClick = () => {
        setIsMainSidebarShow(isShow => true);
    }

    return (
        <div css={s.layout}>
            <MainContainer>
                <div css={s.headerBody}>
                    <button css={s.menuToggleButton} onClick={handleMainMenuToggleClick}><FaBars /></button>
                </div>
            </MainContainer>
        </div>
    );
}

export default MainHeader;