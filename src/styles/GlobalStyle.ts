import {createGlobalStyle} from "styled-components"

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
    }
    .conteiner{
        display: flex;
        width: 100%;
        max-width: 1350px;
        margin: 0 auto;

        @media (max-width: 992px){
            max-width: 960px;
        }
        @media (max-width: 768px){
            max-width: 720px;
        }
        @media (max-width: 576px){
            max-width: 100%;
        }
    }
`
