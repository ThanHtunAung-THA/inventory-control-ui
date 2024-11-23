import { 
  CButton, CCard, CCardBody, CCol, CImg, 
  CInput, CInputGroup, CInputGroupPrepend, CInputGroupText, 
  CLabel, CRow, 
  CDropdown, CDropdownToggle, CDropdownMenu, CDropdownItem,
  CLink } from '@coreui/react';
import React from 'react'
import SuccessError from '../common/SuccessError';


const AdminLoginForm = (props) => {
    let {loginClick,passwordChange,password,userCodeChange,userCode,success,error
        } = props;

  return (
<>

<div className="min-vh-100  flex-row align-items-center user-login-bg">
{/* Dropdown button here */}
<div className="row justify-content-center mb-3 float-right" style={{marginTop:'1px', marginRight:'1px'}}>
  <CDropdown>
  <CDropdownToggle style={{borderRadius:'0', borderBottomLeftRadius:'15px'}}>
    LogIn mode
  </CDropdownToggle>
  <CDropdownMenu className="mt-1" style={{borderTopLeftRadius:'15px'}}>
      <CDropdownItem href="#" header>Admin</CDropdownItem>
      <CDropdownItem href="/user-login">User</CDropdownItem>
      <CDropdownItem href="/products">new account?</CDropdownItem>
    </CDropdownMenu>
  </CDropdown>
</div>

<SuccessError success={success} error={error} />

<div className="container">
  <div className="row justify-content-center">
    <div className="col-lg-6">
      <div className="card login mt-5">

          {/* topside div */}
        <div className="card-body rounded-bottom admin">
          {/* <div className="row justify-content-center mb-3 "> */}
            {/* <h3 className='display-3' style={{color:'#3e405b'}}> */}
              {/* IVEN */}
              {/* <img src="./image/Inven.jpg" className='rounded-circle' width={150} height={150} alt="Logo"/> */}
            {/* </h3> */}
          {/* </div> */}
          <div className="row justify-content-center mb-1">
            <h2 className="login-title ">Admin Login System</h2>
          </div>
        </div>


        <div className='card-body bg-transparent'>
            {/* botside div */}
          <div className="row align-items-center mt-4 justify-content-center">
            
            <div className="col-lg-10">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text login-input mr-3">
                    <img src="./image/user.png" width="20" height="20" alt="User Icon"/>
                  </span>
                </div>
                <input type="text" className="form-control login-input" placeholder="Enter User Code" autoFocus value={userCode} onChange={userCodeChange}/>
              </div>
            </div>
          </div>

          <br/><br/>

          <div className="row align-items-center justify-content-center">
            
            <div className="col-lg-10">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text login-input mr-3">
                    <img src="./image/password.png" width="20" height="20" alt="Password Icon"/>
                  </span>
                </div>
                <input type="password" className="form-control login-input" placeholder="Enter Password" value={password} onChange={passwordChange}/>
              </div>
            </div>
          </div>

          <br/><br/>

          <div className="row align-items-center justify-content-center mb-4">
              <button id="login" className="btn btn-primary form-btn login-btn" onClick={loginClick}>Login</button> {/* Change col-9 to col-12 */}
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

export default AdminLoginForm
