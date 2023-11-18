import React from 'react'
import Navbar from '../components/Navbar'
import '../style/FindWork.css'
import styled from "styled-components";
import Footer from './Footer'

const theme = {
    yellow: {
        default: "#ffc815",
        hover: "#eab60c"
    },
};

const Button = styled.button`
  background-color: ${(props) => theme[props.theme].default};
  color: black;
  padding: 5px 10px;
  width:16rem;
  height: 3.7rem;
  border: none;
 border-radius: 0.8rem;;
 font-weight: bold;
  outline: 0;
  text-transform: uppercase;
  margin: 10px 0px;
  cursor: pointer;
  box-shadow: 0px 2px 2px lightgray;
  transition: ease background-color 250ms;
  &:hover {
    background-color: ${(props) => theme[props.theme].hover};
  }
  &:disabled {
    cursor: default;
    opacity: 0.7;
  }
`;

Button.defaultProps = {
    theme: "yellow"
};


const ButtonToggle = styled(Button)`
  opacity: 0.7;
  ${({ active }) =>
        active &&
        `
    opacity: 1; 
  `}
`;

export default function FindWork() {

    return (
        <>
            <Navbar />


            <div className="options">
                <div className="indivisual">
                    <div className="image"><img height="195rem" width="260rem" src='./assets/indivisual.png'></img></div>
                    <div className="box"></div>
                    <div className="apply-as-an">apply as an</div>
                    <div className="button-container">
                        <div className="button-child"></div>
                        <div className="pos1">
                            <a href="/indivisual"><Button style={{fontFamily: 'Montserrat' }}>Indivisual</Button></a>
                        </div>
                    </div>
                </div>
                <b className="or">or</b>
                <div className="agency">
                    <div className="image"><img height="195rem" width="260rem" src='./assets/agency.png'></img></div>
                    <div className="box"></div>
                    <div className="apply-as-an">apply as an</div>
                    <div className="container">
                        <div className="containerchild"></div>
                        <div className="pos2">
                            <a href="/agency"><Button style={{ fontFamily: 'Montserrat' }}>Agency</Button></a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}