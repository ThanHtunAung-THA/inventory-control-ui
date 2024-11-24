import React, { useEffect, useState } from 'react'
import { 
  CDropdown, CDropdownToggle, CDropdownMenu, CDropdownItem,
  CTooltip,
 } from '@coreui/react';
import { useHistory } from 'react-router'
import Loading from "../common/Loading";
import SuccessError from "../common/SuccessError"; 
import axios from 'axios';
import { checkNullOrBlank,checkPassword } from "../common/CommonValidation";

// import axios from 'axios';


const AdminRegister = () => {

  useEffect( () => {

    // loading time
    setLoading(true);
    setTimeout( () => {
        setLoading(false);
    }, 1000); // 1000 milliseconds = 1 seconds
}, []);

  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState([]);
  const [success, setSuccess] = useState([]);
  const [emailError, setEmailError] = useState("");
  const [isEmailTaken, setIsEmailTaken] = useState(false);
  const [tooltipContent, setTooltipContent] = useState(""); // Tooltip message
  const [tooltipVisible, setTooltipVisible] = useState(false); // Tooltip visibility
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const userNameChange = (e) => {
    setSuccess([]);
    setError([]);
    setUserName(e.target.value);
  };

  const userEmailChange = (e) => {
    setSuccess([]);
    setError([]);
    setUserEmail(e.target.value);
  };

  const passwordChange = (e) => {
    setSuccess([]);
    setError([]);
    setPassword(e.target.value);
  };

  /* const validateEmail = (email) => {
    // Real-time validation checks
    if (!email.includes('@')) {
      return 'Email must include "@"';
    }
    if (!email.includes('.')) {
      return 'Email must include "."';
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return 'Invalid email format';
    }
    return ''; // No error
  }; */

  /* const checkEmailAvailability = async (email) => {
    try {
      const response = await axios.get(`/api/admin/check-email?email=${email}`);
      return response.data.available; // Assuming API returns { available: true/false }
    } catch (error) {
      console.error("Error checking email availability:", error);
      return false; // Assume email is taken if there's an error
    }
  }; */

  /* const userEmailChange = async (e) => {
    const newEmail = e.target.value;
    setUserEmail(newEmail); // Update email state

    const validationMessage = validateEmail(newEmail);
    setEmailError(validationMessage);

    // setTooltipVisible(true); // Show tooltip while typing
    setTooltipVisible(validationMessage !== '');

    // Check email format step-by-step
    if (!newEmail.includes("@")) {
      setTooltipContent("Email must contain '@'.");
      setEmailError("Invalid email format.");
      setIsEmailTaken(false);
      return;
    } else if (!newEmail.endsWith(".com")) {
      setTooltipContent("Email must end with '.com'.");
      setEmailError("Invalid email format.");
      setIsEmailTaken(false);
      return;
    } else if (!validateEmail(newEmail)) {
      setTooltipContent("Invalid email format.");
      setEmailError("Invalid email format.");
      setIsEmailTaken(false);
      return;
    } else {
      setTooltipContent(""); // Clear tooltip message if format is valid
      setEmailError("");
    }

    // Check email availability
    const available = await checkEmailAvailability(newEmail);
    if (available) {
      setTooltipContent("Email is available.");
      setIsEmailTaken(false);
    } else {
      setTooltipContent("Email is already taken.");
      setIsEmailTaken(true);
    }


  }; */

  const saveClick = async (e) => {
    e.preventDefault();
    let err = []; // Initialize an error array

    if (!userName) err.push("User name is required");
    if (!userEmail) err.push("Email is required");
    if (!password) err.push("Password is required");
    if (isEmailTaken) err.push("Email is already used.");
    if (emailError) err.push("Invalid email cannot be used.");

    if (err.length > 0) {
      setSuccess([]);
      setError(err);
    } else {
      // setError([]);
      // let saveData = {
      //   method: "post",
      //   url: `admin/save`,
      //   params: {
      //     name: userName,
      //     email: userEmail,
      //     password: password,
      //   },
      // };

      setError([]);
      let saveData = {
          name: userName,
          email: userEmail,
          password: password,
      };
      
      setLoading(true);
      let response = await axios.post('http://localhost:8000/api/admin/save', saveData);
      if (response.flag === false) {
        setError(response.message);
        setSuccess([]);
      } else {
        if (response.data.status == "OK") {
          const [user_code, name, email, password] = response.data.info;
          let msg = ` 
            ${response.data.message}. Copy your account info: <br/><br/>
            <div class="container-fluid">
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th>User Code</th>
                            <th>User Name</th>
                            <th>User Email</th>
                            <th>User Password</th>
                          
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                          <td>${user_code} </td>
                          <td>${name} </td>
                          <td>${email}</td>
                          <td>${password} </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        `;
    
          // setSuccess([msg]);
          // setLoading(true);
          setTimeout( () => {     
            setLoading(false);       
            setSuccess([msg]);
            reset();
            setError([]);
        }, 2000); // 1000 milliseconds = 1 seconds

          history.push(`/admin-login`);
        } else {
          setError([response.data.message]);
          setSuccess([]);
        }
      }
      // setLoading(false);

    }
  };

  const reset = () => {
    setUserName("");
    setUserEmail("");
    setPassword("");
  };

  
  return (
<>
<div className="min-vh-100  flex-row align-items-center login-bg">

<div className="row justify-content-center mb-3 float-right" style={{marginTop:'1px', marginRight:'1px'}}>
  <CDropdown>
  <CDropdownToggle style={{borderRadius:'0', borderBottomLeftRadius:'15px'}}>
    LogIn mode
  </CDropdownToggle>
    <CDropdownMenu className="mt-1" style={{borderTopLeftRadius:'15px'}}>
      <CDropdownItem href="/admin-login">Admin</CDropdownItem>
      <CDropdownItem href="/user-login">User</CDropdownItem>
      <CDropdownItem href="#" header>new account?</CDropdownItem>
    </CDropdownMenu>
  </CDropdown>
</div>

<SuccessError success={success} error={error} />
{loading && <Loading start={true} />}

<div className="container">
  <div className="row justify-content-center">
    <div className="col-lg-6">
      <div className="card login mt-5">

          {/* topside div */}
        <div className="card-body rounded-bottom register">
          <div className="row justify-content-center mb-1">
            <h2 className="login-title ">Admin Account Registeration</h2>
          </div>
        </div>


        <div className='card-body bg-transparent'>
          {/* User Name Input*/}
          <div className="row align-items-center mt-1 justify-content-center">
            <div className="col-lg-10">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text login-input mr-3">
                    <img src="./image/user.png" width="20" height="20" alt="User Icon"/>
                  </span>
                </div>
                <input type="text" className="form-control login-input" placeholder="Enter User Name" autoFocus value={userName} onChange={userNameChange} required/>
              </div>
            </div>
          </div>

          {/* User Email Input */}
          <div className="row align-items-center mt-3 justify-content-center">
            <div className="col-lg-10">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text login-input mr-3">
                    <img
                      src="./image/email-alt-svgrepo-com.svg"
                      width="20"
                      height="20"
                      alt="Email Icon"
                    />
                  </span>
                </div>

                {/* Tooltip Wrapper */}
                {/* <CTooltip
                  content={tooltipContent}
                  placement="right"
                  trigger="focus"
                  visible={tooltipVisible}
                > */}
                  <input
                    type="email"
                    className="form-control login-input"
                    placeholder="Enter User Email"
                    value={userEmail}
                    onChange={userEmailChange}
                    // onFocus={() => setTooltipVisible(true)} // Show tooltip on focus
                    // onBlur={() => setTooltipVisible(false)} // Hide tooltip on blur
                    required
                  />
                {/* </CTooltip> */}
              </div>
            </div>
          </div>

          {/* User Password Input */}
          <div className="row align-items-center mt-3 justify-content-center">
            <div className="col-lg-10">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text login-input mr-3">
                    <img src="./image/password.png" width="20" height="20" alt="Password Icon"/>
                  </span>
                </div>
                <input type="password" className="form-control login-input" placeholder="Enter Password" value={password} onChange={passwordChange} required/>
              </div>
            </div>
          </div>

          <div className="row align-items-center justify-content-center my-4">
              <button id="login" className="btn btn-primary form-btn login-btn" onClick={saveClick}>Register</button> {/* Change col-9 to col-12 */}
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


</div>
</>
  )
}

export default AdminRegister
