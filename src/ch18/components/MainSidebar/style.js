import { css } from "@emotion/react";

export const layout = (isShow) => css`
    position: absolute;
    top: 0;
    left: ${isShow ? 0 : -203}px;
    transition: all 0.3s ease-in-out;
    box-sizing: border-box;
    border-right: 2px solid #dbdbdb;
    width: 200px;
    height: 100%;
    background-color: #fafafa;
    box-shadow: 1px 0px 3px #000000;
`;