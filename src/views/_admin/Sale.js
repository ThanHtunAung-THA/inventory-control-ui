import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import { CButton, CCard, CCardBody, CCardHeader, CRow, CCol } from '@coreui/react';
import { useHistory } from 'react-router';
import axios from 'axios';



const Sale = () => {

  const [sales, setSales] = useState([]);
  const [totalSales, setTotalSales] = useState(0);
  const [totalProfit, setTotalProfit] = useState(0);
  const history = useHistory();

  useEffect(() => {
      fetchSales();
  }, []);

  // Fetch sales data from API
  const fetchSales = async () => {
      try {
          const response = await axios.get('http://localhost:8000/api/sale/get'); // Adjust the API endpoint as necessary
          setSales(response.data.data);

          // Calculate total sales and total profit
          const salesTotal = response.data.data.reduce((acc, sale) => acc + sale.total, 0);
          const profitTotal = response.data.data.reduce((acc, sale) => acc + (sale.total - sale.paid), 0);

          setTotalSales(salesTotal);
          setTotalProfit(profitTotal);
      } catch (error) {
          console.error('Error fetching sales:', error);
      }
  };

  // Handle adding a new sale
  const handleAddSale = () => {
      history.push('/admin/new-sale'); // Adjust route as necessary
  };

  // Handle edit sale
  const handleEdit = (id) => {
      history.push(`/admin/edit-sale/${id}`); // Adjust route as necessary
  };

  // Handle delete sale
  const handleDelete = async (id) => {
      if (window.confirm('Are you sure you want to delete this sale?')) {
          try {
              await axios.delete(`/api/sale/${id}`);
              fetchSales(); // Refresh sales list
          } catch (error) {
              console.error('Error deleting sale:', error);
          }
      }
  };

  const columns = [
      { name: 'Date', selector: row => row.date, sortable: true },
      { name: 'Customer', selector: row => row.customer, sortable: true },
      { name: 'Location', selector: row => row.location },
      { name: 'Quantity', selector: row => row.quantity, sortable: true },
      { name: 'Total', selector: row => row.total, sortable: true },
      { name: 'Balance', selector: row => row.balance, sortable: true },
      {
          name: 'Actions',
          cell: row => (
              <>
                  <CButton color="info" size="sm" onClick={() => handleEdit(row.id)}>
                      Edit
                  </CButton>
                  <CButton color="danger" size="sm" onClick={() => handleDelete(row.id)} className="ml-2">
                      Delete
                  </CButton>
              </>
          )
      }
  ];

return (
<>
<CCard>
  <CCardHeader>
      <CRow>
          <CCol md="4">
              <h5>Total Sales: {totalSales}</h5>
          </CCol>
          <CCol md="4">
              <h5>Total Profit: {totalProfit}</h5>
          </CCol>
          <CCol md="4" className="text-right">
              <CButton color="success" onClick={handleAddSale}>
                  + Add New Sale
              </CButton>
          </CCol>
      </CRow>
  </CCardHeader>
  <CCardBody>
      <DataTable
          columns={columns}
          data={sales}
          pagination
          highlightOnHover
          striped
          responsive
      />
  </CCardBody>
</CCard>

</>
  )
}

export default Sale
