import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import { CButton, CCard, CCardBody, CCardHeader, CRow, CCol } from '@coreui/react';
import { useHistory } from 'react-router';
import axios from 'axios';



const Delete_Sale = () => {

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
          const response = await axios.get('/api/sales'); // Adjust the API endpoint as necessary
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
      history.push('/admin/sale/new'); // Adjust route as necessary
  };

  // Handle edit sale
  const handleEdit = (id) => {
      history.push(`/edit-sale/${id}`); // Adjust route as necessary
  };

  // Handle delete sale
  const handleDelete = async (id) => {
      if (window.confirm('Are you sure you want to delete this sale?')) {
          try {
              await axios.delete(`/api/sales/${id}`);
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
    <h1>Delete Sale Form</h1>
</>
  )
}

export default Delete_Sale
