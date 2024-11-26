import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import { 
    CInput, CButton, CLink, CCard, CCardBody, CCardHeader, CRow, CCol,
    CDropdown, CDropdownToggle, CDropdownMenu, CDropdownItem
} from '@coreui/react';
import { useHistory } from 'react-router';
import Swal from "sweetalert2";

import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus,faCirclePlus,faPlusCircle } from '@fortawesome/free-solid-svg-icons'; // Import the plus icon
import SuccessError from '../../common/SuccessError';
import Loading from "../../common/Loading";

const List = () => {
    const history = useHistory();
    useEffect(() => {
        let flag = localStorage.getItem(`LoginProcess`)
        if (flag == "true") {
          console.log("Login process success")
        } else {
          history.push(`/admin-login`);
        }
    
          fetchSales();
      }, []);
    
    const [loading, setLoading] = useState(false); // For Loading
    const [sales, setSales] = useState([]);
    const [filteredSales, setFilteredSales] = useState([]); // For filtered data
    const [searchTerm, setSearchTerm] = useState(''); // For search input
    const [totalSales, setTotalSales] = useState(0);
    const [totalProfit, setTotalProfit] = useState(0);
    const [success, setSuccess] = useState([]);
    const [error, setError] = useState([]);

  // Fetch sales data from API
  const fetchSales = async () => {
        try {
            setLoading(true);
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
        setTimeout( () => {
        setLoading(false);
    }, 1500); // 1000 milliseconds = 1 seconds
  };

//   Handle edit sale
const handleEdit = (sale) => {
    history.push({
        pathname: `/admin/sale-edit/${sale.id}`,
        state: { sale } // Pass the entire sale object or specific properties
    });
};

  // Handle delete sale
  const handleDelete = async (sale) => {

    const message = `
        <div class="container" style="font-family: Arial, sans-serif; line-height: 1.5;">
            <table class="table table-bordered mt-3">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>User Code</th>
                        <th>Item Code</th>
                        <th>Date</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>${sale.id}</td>
                        <td>${sale.user_code}</td>
                        <td>${sale.item_code}</td>
                        <td>${sale.date}</td>
                        <td>${sale.total}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    `;

    // Show SweetAlert confirmation dialog
    const result = await Swal.fire({
        title: 'Delete-Confirmation',
        // text: message,
        html: message,

        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!',
        width: 600,
        
    });

    if (result.isConfirmed) {
        try {
            setLoading(true);

            setTimeout( () => {
                setLoading(false);
        
            }, 1000); // 1000 milliseconds = 1 seconds
        
        
            await axios.delete(`/api/sale/remove/${sale.id}`);
            
            fetchSales();

            Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
                    
        } catch (error) {
            Swal.fire({
            title: "Error!",
            text: "Your file has not been deleted.",
            icon: "warning"
            });
        }
    }
    
};

    // Handle search input change
    const handleSearchChange = (e) => {
        const value = e.target.value.toLowerCase();
        setSearchTerm(value);

        const filteredData = sales.filter((sale) =>
            sale.date.toLowerCase().includes(value) ||
            sale.user_code.toLowerCase().includes(value) ||
            sale.item_code.toLowerCase().includes(value) ||
            sale.customer.toLowerCase().includes(value) ||
            sale.location.toLowerCase().includes(value) ||
            sale.total.toString().includes(value)
        );

        setFilteredSales(filteredData);
    };

  const columns = [
      { name: 'Date', selector: row => row.date, sortable: true },
      { name: 'User_Code', selector: row => row.user_code, sortable: true },
      { name: 'Item_Code', selector: row => row.item_code, sortable: true },
      { name: 'Customer', selector: row => row.customer, sortable: false },
      { name: 'Location', selector: row => row.location },
      { name: 'Quantity', selector: row => row.quantity, sortable: true },
      { name: 'Total', selector: row => row.total, sortable: true },
      { name: 'Balance', selector: row => row.balance, sortable: false },
      {
          name: 'Actions',
          cell: row => (
              <>
                <CDropdown>
                    <CDropdownToggle color="" size="" className="cdd-custom">
                        Actions
                    </CDropdownToggle>
                    <CDropdownMenu>
                        <CDropdownItem onClick={ () => handleEdit(row)}>Edit</CDropdownItem>
                        <CDropdownItem onClick={ () => handleDelete(row)}>Delete</CDropdownItem>
                    </CDropdownMenu>
                </CDropdown>


             </>
          )
      }
  ];

return (
<>
<SuccessError success={success} error={error} />
{loading && <Loading start={true} />}

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
            <CLink href="/admin/sale-new" className="btn link">
                <FontAwesomeIcon icon={faCirclePlus} /> New Entry
            </CLink>
          </CCol>
      </CRow>

      <CRow className="mt-3">
        <CCol md="12">
            <CInput
                type="text"
                placeholder="Search by Date, User Code, Customer, Location, or Total"
                value={searchTerm}
                onChange={handleSearchChange}
            />
        </CCol>
    </CRow>

  </CCardHeader>

  <CCardBody>
      <DataTable
          columns={columns}
          data={filteredSales}
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

export default List
