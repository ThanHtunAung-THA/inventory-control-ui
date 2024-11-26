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

    // let { success, error } = props;
    const [success, setSuccess] = useState([]);
    const [error, setError] = useState([]);

    const [loading, setLoading] = useState(false); // For Loading

    const [purchases, setPurchases] = useState([]);
    const [filteredPurchases, setFilteredPurchases] = useState([]); // For filtered data
    const [searchTerm, setSearchTerm] = useState(''); // For search input
    const [totalPurchases, setTotalPurchases] = useState(0);
    const [totalProfit, setTotalProfit] = useState(0);
    const history = useHistory();


  useEffect(() => {
    let flag = localStorage.getItem(`LoginProcess`)
    if (flag == "true") {
      console.log("Login process success")
    } else {
      history.push(`/admin-login`);
    }

      fetchPurchases();
  }, []);

  // Fetch purchases data from API
  const fetchPurchases = async () => {

      try {
        setLoading(true);
        // setTimeout( () => {
        //     setLoading(false);
        // }, 5000); // 1000 milliseconds = 1 seconds

          const response = await axios.get('http://localhost:8000/api/purchase/get'); // Adjust the API endpoint as necessary
          setPurchases(response.data.data);
          setFilteredPurchases(response.data.data); // Initially, filtered data is the same as all data

          // Calculate total purchases and total profit
          const purchasesTotal = response.data.data.reduce((acc, purchase) => acc + purchase.total, 0);
          const profitTotal = response.data.data.reduce((acc, purchase) => acc + (purchase.total - purchase.paid), 0);

          setTotalPurchases(purchasesTotal);
          setTotalProfit(profitTotal);
      } catch (error) {
          console.error('Error fetching purchases:', error);
      }
    setTimeout( () => {
        setLoading(false);
    }, 1500); // 1000 milliseconds = 1 seconds

  };

//   Handle edit purchase
const handleEdit = (purchase) => {
    history.push({
        pathname: `/admin/purchase-edit/${purchase.id}`,
        state: { purchase } // Pass the entire purchase object or specific properties
    });
};

  // Handle delete purchase
  const handleDelete = async (purchase) => {
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
                        <td>${purchase.id}</td>
                        <td>${purchase.user_code}</td>
                        <td>${purchase.item_code}</td>
                        <td>${purchase.date}</td>
                        <td>${purchase.total}</td>
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
            await axios.delete(`/api/purchase/remove/${purchase.id}`);
            fetchPurchases();
            setTimeout( () => {
                setLoading(false);
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                    });
            }, 1000); // 1000 milliseconds = 1 seconds
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

        const filteredData = purchases.filter((purchase) =>
            purchase.date.toLowerCase().includes(value) ||
            purchase.user_code.toLowerCase().includes(value) ||
            purchase.item_code.toLowerCase().includes(value) ||
            purchase.supplier.toLowerCase().includes(value) ||
            purchase.location.toLowerCase().includes(value) ||
            purchase.total.toString().includes(value)
        );

        setFilteredPurchases(filteredData);
    };

  const columns = [
      { name: 'Date', selector: row => row.date, sortable: true },
      { name: 'User_Code', selector: row => row.user_code, sortable: true },
      { name: 'Item_Code', selector: row => row.item_code, sortable: true },
      { name: 'Supplier', selector: row => row.supplier, sortable: false },
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
                        {/* <CDropdownItem href={`/admin/purchase-edit/${row.id}`}>Edit</CDropdownItem> */}
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
                    <h5>Total Purchases: {totalPurchases}</h5>
                </CCol>
                <CCol md="4">
                    <h5>Total Profit: {totalProfit}</h5>
                </CCol>
                <CCol md="4" className="text-right">
                    <CLink href="/admin/purchase-new" className="btn link">
                        <FontAwesomeIcon icon={faCirclePlus} /> New Entry
                    </CLink>
                </CCol>
            </CRow>
            <CRow className="mt-3">
                <CCol md="12">
                    <CInput
                        type="text"
                        placeholder="Search by Date, User Code, Supplier, Location, or Total"
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                </CCol>
            </CRow>
        </CCardHeader>
        <CCardBody>
            <DataTable
                columns={columns}
                data={filteredPurchases}
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
