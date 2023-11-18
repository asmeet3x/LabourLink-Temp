import React from "react";
import { useState } from "react";
import Navbar from "../components/Navbar";
import "../style/FindWorkAgency.css";
import styled from "styled-components";
import Footer from './Footer'

const theme = {
  yellow: {
    default: "#ffc815",
    hover: "#eab60c",
  },
};

const Button = styled.button`
  background-color: ${(props) => theme[props.theme].default};
  color: black;
  padding: 5px 15px;
  width:16.3rem;
  height: 3.1rem;
  border: none;
  border-radius: 0.5rem;;
  outline: 0;
  font-weight: bold;
  font-size: 1rem;

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
  theme: "yellow",
};

const ButtonToggle = styled(Button)`
  opacity: 0.7;
  ${({ active }) =>
    active &&
    `
    opacity: 1; 
  `}
`;

const PasswordToggle = styled.button`
  background-color: ${(props) => theme[props.theme].default};
  color: black;
  padding: 5px 10px;
  height: 2rem;
  border: none;
  border-radius: 0.5rem;
  outline: 0;
  font-size: 0.8rem;
  text-transform: uppercase;
  margin: 10px 0px;
  cursor: pointer;
  transition: ease background-color 250ms;
  &:hover {
    background-color: ${(props) => theme[props.theme].hover};
  }
`;

PasswordToggle.defaultProps = {
  theme: "yellow",
};


export default function Agency() {

  const [showPassword, setShowPassword] = useState(false);

  const [formInput, setFormInput] = useState({
    agencyemail: "",
    password: "",
    confirmpassword: "",
  });

  const [formError, setFormError] = useState({
    agencyemail: "",
    password: "",
    confirmpassword: "",
  });

  const handleUserInput = (name, value) => {
    setFormInput({
      ...formInput,
      [name]: value,
    });
  };

  const validateFormInput = (event) => {
    event.preventDefault();
    let inputError = {
      email: "",
      password: "",
      confirmpassword: "",
    };

    if (!formInput.email && !formInput.password) {
      setFormError({
        ...inputError,
        email: "Enter valid email address",
        password: "Password should not be empty",
      });
      return
    }

    if (!formInput.email) {
      setFormError({
        ...inputError,
        email: "Enter valid email address",
      });
      return
    }

    if (formInput.confirmpassword !== formInput.password) {
      setFormError({
        ...inputError,
        confirmpassword: "Password and confirm password should be same",
      });
      return;
    }

    if (!formInput.password) {
      setFormError({
        ...inputError,
        password: "Password should not be empty",
      });
      return
    }

    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{6,}$/;
    if (!passwordRegex.test(formInput.password)) {
    setFormError({
      ...inputError,
      password:
        "Password should have a minimum of 6 characters, at least one capital letter, at least one digit, and at least one special character",
    });
    return;
    }

    setFormError(inputError);
    window.location.href = "/";
  };

  return (
    <>
      <Navbar />
      <div className="back">
        <b className="pageheading">
          Please fill out the following details for registration.
        </b>
        <form onSubmit={validateFormInput}>
        <div className="columns">
          
          <div className="column--1">
            <div className="inputframe">
              <div className="inputlabels">Agency Name</div>
              <input required type="text" className="input-field" name="agencyname" placeholder='Agency Name' />
            </div>
            <div className="inputframe">
              <div className="inputlabels">Agency Email</div>
              <input
              value={formInput.email}
              onChange={({ target }) => {
                handleUserInput(target.name, target.value);
              }}
              name="email"
              type="text"
              className="input-field"
              placeholder="Enter Email"
              />
             <p className="error-message">{formError.email}</p>
            </div>
            <div className="inputframe">
              <div className="inputlabels">Choose a username</div>
              <input required type="text" className="input-field" name="username" placeholder='Username' />
            </div>
            <div className="inputframe">
              <div className="inputlabels">Choose a password</div>
              <input
                value={formInput.password}
                onChange={({ target }) => {
                  handleUserInput(target.name, target.value);
                }}
                name="password"
                type={showPassword ? "text" : "password"}
                className="input-field"
                placeholder="Password"
              />
              <p className="error-message">{formError.password}</p>
            </div>
            <div className="inputframe">
              <div className="input-text-label">Confirm password</div>
              <input
              value={formInput.confirmpassword}
              onChange={({ target }) => {
                handleUserInput(target.name, target.value);
              }}
              name="confirmpassword"
              type="password"
              className="input-field"
              placeholder="Confirm Password"
              />
             <p className="error-message">{formError.confirmpassword}</p>
             <PasswordToggle
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                <img height={"25rem"} width={"25rem"}
                  src={showPassword ? "../assets/show.png" : "../assets/hide.png"}
                  alt={showPassword ? "Show Password" : "Hide Password"}
                />
              </PasswordToggle>
            </div>
          </div>
          <div className="column--2">
            <div className="inputframe">
              <div className="inputlabels">Agency Location</div>
              <input required type="text" className="input-field" name="agencylocation" placeholder='Location' />
            </div>
            <div className="inputframe">
              <div className="inputlabels">Tel. no.</div>
              <input required type="tel" className="input-field" name="telephone" placeholder='Telephone' />
            </div>
            <div className="inputframe">
              <div className="inputlabels">Agency GSTIN number</div>
              <input required type="tel" className="input-field" name="gstin" placeholder='GSTIN' />
            </div>

            <div className="inputframe">
              <div className="button---container">
                <div className="button---child"></div>
                  <a href="/">
                    <Button style={{ fontFamily: "Montserrat" }}>
                      Register
                    </Button>
                  </a>
              </div>
            </div>
          </div>
        </div>
        </form>
      </div>
      <Footer/>
    </>
  );
}
