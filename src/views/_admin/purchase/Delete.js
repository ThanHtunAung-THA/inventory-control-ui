import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import { CButton, CCard, CCardBody, CCardHeader, CRow, CCol } from '@coreui/react';
import { useHistory } from 'react-router';
import axios from 'axios';



const Delete = () => {

  const [sales, setSales] = useState([]);
  const [totalSales, setTotalSales] = useState(0);
  const [totalProfit, setTotalProfit] = useState(0);
  const history = useHistory();

  useEffect(() => {

    }, []);


return (
<>
    <h1>Delete Sale Form</h1>
</>
  )
}

export default Delete
