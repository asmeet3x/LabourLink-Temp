import React from "react";
import { useState } from "react";
import Navbar from "../components/Navbar";
import "../style/FindWorkIndivisual.css";
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


export default function Indivisual() {

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
   
    const indianStates = ["State1", "State2", "State3"]; // Replace with actual state names
    const indianCities = {
      State1: ["City1", "City2", "City3"], // Replace with actual cities for each state
      State2: ["City4", "City5", "City6"],
      State3: ["City7", "City8", "City9"],
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
          <div className="column11">
            <div className="inputframe">
              <div className="inputlabels">Full Name</div>
              <input required type="text" className="input-field" name="name" placeholder='Enter Name' />
            </div>
            <div className="inputframe">
              <div className="inputlabels">Email ID</div>
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
          <div className="column22">
            <div className="inputframe">
            <div className="inputlabels">Phone no.</div>
            <input required type="tel" className="input-field" name="phone" placeholder='Enter phone no.' />
            </div>
            <div className="inputframe">
              <div className="inputlabels">Aadhaar Card Number</div>
              <input required type="tel" className="input-field" name="aadhaar" placeholder='Aadhaar' />
            </div>            
            <div className="inputframe">
                <div className="inputlabels">State</div>
                <select
                  required
                  className="input-field"
                  name="state"
                  onChange={({ target }) => {
                    handleUserInput(target.name, target.value);
                  }}
                >
                  <option value="">Select State</option>
                  {indianStates.map((state) => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))}
                </select>
                <p className="error-message">{formError.state}</p>
              </div>
              <div className="inputframe">
                <div className="inputlabels">City</div>
                <select
                  required
                  className="input-field"
                  name="city"
                  onChange={({ target }) => {
                    handleUserInput(target.name, target.value);
                  }}
                >
                  <option value="">Select City</option>
                  {formInput.state &&
                    indianCities[formInput.state].map((city) => (
                      <option key={city} value={city}>
                        {city}
                      </option>
                    ))}
                </select>
                <p className="error-message">{formError.city}</p>
              </div>
            
            <div className="inputframe">
              <div className="button--container">
                <div className="button--child"></div>
                  
                    <Button type="submit" style={{ fontFamily: "Montserrat" }}>
                      Register
                    </Button>
                  
              </div>
            </div>
          </div>
        </div>
        </form>
      </div>
      <div className="bottom">
      
      </div>
      <Footer/>
    </>
  );
}
