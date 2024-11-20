import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import { CButton, CCard, CCardBody, CCardHeader, CRow, CCol } from '@coreui/react';
import { useHistory } from 'react-router';
import { useParams } from 'react-router-dom';
import axios from 'axios';



const Update = () => {
  const { id } = useParams(); // Extract the id from the URL

  const [sales, setSales] = useState([]);
  const [totalSales, setTotalSales] = useState(0);
  const [totalProfit, setTotalProfit] = useState(0);
  const history = useHistory();

  useEffect(() => {

}, []);



  // Handle adding a new sale


return (
<>
  <div>
      <h1>Edit Sale</h1>
      <p>Editing sale with ID: {id}</p>
      {/* Your edit form or logic goes here */}
  </div>
</>
  )
}

export default Update
