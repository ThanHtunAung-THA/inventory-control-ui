import React, { useEffect, useState } from "react";
import { CCard, CCardBody, CCardHeader, CRow, CCol } from "@coreui/react";
import { useHistory } from "react-router";
import axios from "axios";
import SaleChart from '../../chart/SaleChart';
import PurchaseChart from '../../chart/PurchaseChart';
import AdjustChart from '../../chart/AdjustChart';
import ConvertChart from '../../chart/ConvertChart';
import StockStatusChart from '../../chart/StockStatusChart';
import OutstandingChart from '../../chart/OutstandingChart';
import CashChart from '../../chart/CashChart';
import BankChart from '../../chart/BankChart';
import GledgerChart from '../../chart/GledgerChart';

const Dashboard = () => {
  const history = useHistory();
  const [saleData, setSaleData] = useState([]);
  const [purchaseData, setPurchaseData] = useState([]);
  const [adjustData, setAdjustData] = useState([]);
  const [convertData, setConvertData] = useState([]);
  const [stockData, setStockData] = useState([]);
  const [priceData, setPriceData] = useState([]);
  const [discountData, setDiscountData] = useState([]);
  const [outstandingData, setOutstandingData] = useState([]);
  const [cashData, setCashData] = useState([]);
  const [bankData, setBankData] = useState([]);
  const [gledgerData, setGledgerData] = useState([]);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("LoginProcess");
    if (isLoggedIn !== "true") {
      history.push("/user-login");
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
        <CCol md="6">
          <SaleChart saleData={saleData} />
        </CCol>
        <CCol md="6">
          <PurchaseChart purchaseData={purchaseData} />
        </CCol>
      </CRow>
      <CRow>
        <CCol md="6">
          <AdjustChart adjustData={adjustData} />
        </CCol>
        <CCol md="6">
          <ConvertChart convertData={convertData} />
        </CCol>
      </CRow>
      <CRow>
        <CCol md="6">
          <StockStatusChart stockData={stockData} />
        </CCol>
        <CCol md="6">
          <OutstandingChart outstandingData={outstandingData} />
        </CCol>
      </CRow>
      {/* <CRow>
        <CCol md="6">
          <PriceChart PriceData={priceData} />
        </CCol>
        <CCol md="6">
          <OutstandingChart DiscountData={discountData} />
        </CCol>
      </CRow> */}
      <CRow>
        <CCol md="6">
          <CashChart cashData={cashData} />
        </CCol>
        <CCol md="6">
          <BankChart bankData={bankData} />
        </CCol>
      </CRow>
      <CRow>
        <CCol md="12">
          <GledgerChart gledgerData={gledgerData} />
        </CCol>
      </CRow>

    </>
  );
};

export default Dashboard;
