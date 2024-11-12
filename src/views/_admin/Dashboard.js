import React, { lazy, useEffect, useState } from 'react'
import {
  CBadge,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CCallout
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { useHistory } from 'react-router';



const Dashboard = () => {

  const history = useHistory();

  useEffect(() => {
    let flag = localStorage.getItem(`LoginProcess`)
    if(flag != "true"){
      history.push(`/Login`);
    }
}, );

const delCLick =(name,g)=>{
  alert("You Delete " + name + " He is " + g);
}

return (
<>
  <p>This is dashboard</p>






</>
  )
}

export default Dashboard
