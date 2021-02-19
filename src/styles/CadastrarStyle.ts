import styled from "styled-components"

export const Body = styled.body`
    background-color:#635081;
    max-width: 100%
`
export const Header = styled.header`
    display: grid;
    align-items: center;
    justify-content: space-between;
    background-color:#6C41B2;
    grid-template-columns: repeat(3, 1fr);
    max-width: 100%;
    grid-gap: 120px;
    flex: 1 1 500px;
`
export const Nave = styled.nav`
    background-color:#2B1A45;
    display: flex;
    grid-template-columns: repeat(6, 1fr);
    max-width: 100%;
    justify-content: space-between;
    grid-gap: 70;
`
export const Naveul = styled.ul`
    margin: 10px;
    margin-right: 50px;
    background-color:#2B1A45;
    font-family: Spirax;
    font-size: 25px;
    text-decoration-line: underline;
`
export const Naveula = styled.a`
    color:#FFFFFF;
    margin-left: 30px;
    cursor: pointer;
`
export const Divbusca = styled.nav`
    margin:12px;
    align-items: center;
    background-color:#ffffff;
    border-radius:20px;
    width: 350px;
    height: 30px;
`
export const Txtbusca = styled.input`
    font-family: Spirax;
    float:left;
    background-color:transparent;
    padding-left:5px;
    font-style:normal;
    font-size:18px;
    border:none; 
`
export const Imgbusca = styled.img`
    float: right;
    width: 45px;
    height: 45px;
`
export const Entrar = styled.div`
    text-align: center;
    position: relative;
    width: 50%;
    height: 20%;
    left: 23%;
    top: 160px;
    font-family: Spirax;
    font-style: normal;
    font-weight: 700;
    font-size: 95%;
    display: grid;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #000000;
`
export const Form = styled.form`
    padding: 7px;
    text-align: center;
    position: relative;
    left: 450PX;
    width: 30%;;
    top: 100px;
    background: #eac4f8;
    border: 1px solid rgba(0, 0, 0, 0.58);
    box-sizing: border-box;
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
    font-family: Spirax;
    font-size: 18px;
    font-weight: bold;
`
export const Iv = styled.div`
    background-color:#635081;
    margin: 220px;
    color:#635081;
`
