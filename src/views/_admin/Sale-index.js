import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import { 
    CInput, CButton, CLink, CCard, CCardBody, CCardHeader, CRow, CCol,
    CDropdown, CDropdownToggle, CDropdownMenu, CDropdownItem
} from '@coreui/react';
import { useHistory } from 'react-router';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus,faCirclePlus,faPlusCircle } from '@fortawesome/free-solid-svg-icons'; // Import the plus icon





const Sale_list = () => {

    const [sales, setSales] = useState([]);
    const [filteredSales, setFilteredSales] = useState([]); // For filtered data
    const [searchTerm, setSearchTerm] = useState(''); // For search input
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
          setFilteredSales(response.data.data); // Initially, filtered data is the same as all data


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
      history.push('/admin/sale-new'); // Adjust route as necessary
  };

//   Handle edit sale
  const handleEdit = (id) => {
      history.push(`/admin/sale-edit/${id}`); // Adjust route as necessary       //to work fully , i must create update page with id accepter
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
      { name: 'User_Code', selector: row => row.user_code, sortable: true },
      { name: 'Customer', selector: row => row.customer, sortable: true },
      { name: 'Location', selector: row => row.location },
      { name: 'Quantity', selector: row => row.quantity, sortable: true },
      { name: 'Total', selector: row => row.total, sortable: true },
      { name: 'Balance', selector: row => row.balance, sortable: true },
      {
          name: 'Actions',
          cell: row => (
              <>
                <CDropdown>
                    <CDropdownToggle color="" size="" className="cdd-sale">
                        Actions
                    </CDropdownToggle>
                    <CDropdownMenu>
                        <CDropdownItem href={`/admin/sale-edit/${row.id}`}>Edit</CDropdownItem>
                        <CDropdownItem onClick={() => handleDelete(row.id)}>Delete</CDropdownItem>
                    </CDropdownMenu>
                </CDropdown>


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
            <CLink href="/admin/sale-new" className="btn link-sale">
                <FontAwesomeIcon icon={faCirclePlus} /> Add New Sale
            </CLink>
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

export default Sale_list