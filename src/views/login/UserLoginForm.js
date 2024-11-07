import { 
  CButton, CCard, CCardBody, CCol, CImg, 
  CInput, CInputGroup, CInputGroupPrepend, CInputGroupText, 
  CLabel, CRow, 
  CDropdown, CDropdownToggle, CDropdownMenu, CDropdownItem,
  CLink } from '@coreui/react';
import React from 'react'
import SuccessError from '../common/SuccessError';
import { useHistory } from 'react-router-dom';


const UserLoginForm = (props) => {
    let {loginClick,passwordChange,password,userCodeChange,userCode,success,error
        } = props;
    const history = useHistory();

  return (
<>
<div className="min-vh-100  flex-row align-items-center login-bg">
{/* Dropdown button here */}
<div className="row justify-content-center mb-3 mr-1 float-right">
  <CDropdown>
    <CDropdownToggle color="dark">
      LogIn mode
    </CDropdownToggle>
    <CDropdownMenu>
      <CDropdownItem href="/admin-login" >Admin</CDropdownItem>
      <CDropdownItem href="#" header>User</CDropdownItem>
      <CDropdownItem href="/products">new account?</CDropdownItem>
    </CDropdownMenu>
  </CDropdown>
</div>

<div className="container">

  <div className="row justify-content-center">
    <div className="col-lg-6">
      <div className="card mt-5 login">
        <div className="card-body">
          <div className="row justify-content-center">
            <img src="./image/main-logo.png" width={150} height={150} alt="Logo"/>
          </div>
          <div className="row justify-content-center mb-3">
            <h3 className="login-title">User Login System</h3>
          </div>

          <SuccessError success={success} error={error} />

          <div className="row align-items-center mt-4">
            <div className="col-lg-4">
              <label className="form-label">User Code</label>
            </div>
            <div className="col-lg-8">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <img src="./image/user.png" width="20" height="20" alt="User Icon"/>
                  </span>
                </div>
                <input type="text" className="form-control login-input" placeholder="Enter User Code" autofocus value={userCode} onChange={userCodeChange}/>
              </div>
            </div>
          </div>

          <br/><br/>

          <div className="row align-items-center">
            <div className="col-lg-4">
              <label className="form-label">Password</label>
            </div>
            <div className="col-lg-8">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <img src="./image/password.png" width="20" height="20" alt="Password Icon"/>
                  </span>
                </div>
                <input type="password" className="form-control login-input" placeholder="Enter Password" value={password} onChange={passwordChange}/>
              </div>
            </div>
          </div>

          <br/><br/>

          <div className="row justify-content-center mb-4">
            <button id="login" className="btn btn-primary form-btn login-btn" onClick={loginClick}>Login</button>
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

export default UserLoginForm
