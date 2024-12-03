import React, { useEffect, useState } from "react";
import { CCard, CCardBody, CCardHeader, CRow, CCol } from "@coreui/react";
import { useHistory } from "react-router";
import axios from "axios";
import SaleChart from '../chart/SaleChart'; // Import SaleChart component
import PurchaseChart from '../chart/PurchaseChart'; // Import PurchaseChart component
// import StockStatusChart from './StockStatusChart'; // Import StockStatusChart component

const Dashboard = () => {
  const history = useHistory();
  const [saleData, setSaleData] = useState([]);
  const [purchaseData, setPurchaseData] = useState([]);
  // const [stockData, setStockData] = useState([]); // State for stock data

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("LoginProcess");
    if (isLoggedIn !== "true") {
      history.push("/admin-login");
    } else {
      fetchData();
    }
  }, []);

  const fetchData = async () => {
    try {
      const saleResponse = await axios.get("http://localhost:8000/api/sale/get");
      setSaleData(saleResponse.data.data);

      const purchaseResponse = await axios.get("http://localhost:8000/api/purchase/get");
      setPurchaseData(purchaseResponse.data.data);

      // const stockResponse = await axios.get("http://localhost:8000/api/stock/get"); // Fetch stock data
      // setStockData(stockResponse.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
      <CRow>
        <CCol xs="12">
          <h2>Dashboard</h2>
        </CCol>
      </CRow>
      <CRow>
        <CCol md="6">
          <SaleChart saleData={saleData} />
        </CCol>
        <CCol md="6">
          <PurchaseChart purchaseData={purchaseData} />
        </CCol>
      </CRow>
      <CRow>
        <CCol md="12">
          {/* <StockStatusChart stockData={stockData} /> Render Stock Status Chart */}
        </CCol>
      </CRow>
      {/* Placeholder for other charts */}
      <CRow>
        {[...Array(7)].map((_, index) => (
          <CCol md="6" key={index}>
            <CCard>
              <CCardHeader>Chart {index + 1} (Under Construction)</CCardHeader>
              <CCardBody>
                <p>This chart is under construction.</p>
              </CCardBody>
            </CCard>
          </CCol>
        ))}
      </CRow>
    </>
  );
};

export default Dashboard;
