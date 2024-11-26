import React, { useEffect, useState } from 'react';
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CInput,
  CRow,
  CSelect
} from '@coreui/react';
import { useHistory } from 'react-router';
import { useParams, useLocation  } from 'react-router-dom';
import DatePicker from '../../common/datepicker/DatePicker';
import Loading from "../../common/Loading";
import SuccessError from "../../common/SuccessError"; 
import { ApiRequest } from "../../common/ApiRequest";
import moment from "moment";

const Update = () => {
  useEffect(() => {
    let flag = localStorage.getItem(`LoginProcess`)
    if (flag == "true") {
      console.log("Login process success")
      console.log("sale data :", sale)
    } else {
      history.push(`/admin-login`);
    }
    setLoading(true);
    setTimeout( () => {
        setLoading(false);
    }, 1000); // 1000 milliseconds = 1 seconds
  }, []);
  const history = useHistory();

  const objBarier = useLocation();
  const { sale } = objBarier.state || {}; // Get the sale object from state
  const [id, setId] = useState(sale ? sale.id : '');
  const [userCode, setUserCode] = useState(sale ? sale.user_code : '');
  const [customer, setCustomer] = useState(sale ? sale.customer : '');
  const [itemCode, setItemCode] = useState(
    Array.from({ length: 50 }, (v, i) => ({
      id: (i + 1).toString(),
      name: `ITEM00${i + 1}`
    }))
  );
  const [selectedItemCode, setSelectedItemCode] = useState(sale ? sale.item_code : '');
  const [location, setLocation] = useState(sale ? sale.location : '');
  const [saleDate, setSaleDate] = useState(sale ? sale.date : '');
  const [paymentType, setPaymentType] = useState(sale ? sale.payment_type : '');
  const [currency, setCurrency] = useState(sale ? sale.currency : "Kyats");
  const [quantity, setQuantity] = useState(sale ? sale.quantity : 0);
  const [discount, setDiscount] = useState(sale ? sale.discount_and_foc : 0);
  const [paid, setPaid] = useState(sale ? sale.paid : 0);
  const [total, setTotal] = useState(sale ? sale.total : '');
  const [balance, setBalance] = useState(sale ? sale.total : 0);
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState([]);
  const [success, setSuccess] = useState([]);


  const userCodeChange = (e) => { setUserCode(e.target.value); }
  const customerNameChange = (e) => { setCustomer(e.target.value); }
  const itemCodeChange = (e) => { setSelectedItemCode(e.target.value); }
  const saleDateChange = (e) => {
    let date = "";
    date = moment(e).format("YYYY-MM-DD");
    setSaleDate(date);
  }

  const handleSubmit = async () => {
    setLoading(true);
    let saveData = {
      method: "post",
      url: `sale/edit/${id}`,
      params: {
        date: moment(saleDate).format("YYYY-MM-DD"),
        user_code: userCode,
        item_code: selectedItemCode,
        location: location,
        customer: customer,
        payment_type: paymentType,
        currency: currency,
        quantity: quantity,
        discount_and_foc: discount,
        paid: paid,
        total: total,
        balance: balance,
      },
    };
    let response = await ApiRequest(saveData);
    if (response.flag === false) {
      setError(response.message);
      setSuccess([]);
    } else {
      if (response.data.status === "OK") {
        setSuccess([response.data.message]);
        setError([]);
        // resetForm();
        
      } else {
        setError([response.data.message]);
        setSuccess([]);
      }
    }
    setLoading(false);
  };

  const resetForm = () => {
    setUserCode("");
    setSaleDate(null);
    setLocation("");
    setSelectedItemCode("");
    setCustomer("");
    setPaymentType("");
    setCurrency("");
    setQuantity(0);
    setDiscount(0);
    setPaid(0);
    setTotal(0);
    setBalance(0);
  };

return (
<>
  <CRow>
    <CCol xs="12">
      <SuccessError success={success} error={error} />
      <CCard>
        <CCardHeader>
          <h4 className='m-0'>Edit Sale Entry for Sale-list-ID #{id}</h4>
        </CCardHeader>
        <CCardBody>
          <CRow>
            <CCol lg="6">
              <CRow>
                <CCol lg="4"><p>User Code</p></CCol>
                <CCol lg="8"><CInput type="text" value={userCode} onChange={userCodeChange} /></CCol>
              </CRow>

              <CRow>
                <CCol lg="4"><p>Customer</p></CCol>
                <CCol lg="8">
                  <CInput type="text" value={customer} onChange={customerNameChange} />
                </CCol>
              </CRow>

              <CRow>
                <CCol lg="4"><p>Item ID</p></CCol>
                <CCol lg="8">
                  <CSelect value={selectedItemCode} onChange={itemCodeChange}>
                    <option value="">-- Select --</option>
                    {itemCode.map((data, index) => {
                      return (
                        <option key={index} value={data.name}>
                          {data.name}
                        </option>
                      );
                    })}
                  </CSelect>
                </CCol>
              </CRow>

              <CRow>
                <CCol lg="4"><p>Location</p></CCol>
                <CCol lg="8">
                  <CSelect value={location} onChange={(e) => setLocation(e.target.value)}>
                    <option value="">-- Select --</option>
                    <option value="Yangon">Yangon</option>
                    <option value="Mandalay">Mandalay</option>
                    <option value="Taungyi">Taungyi</option>
                    <option value="Loikaw">Loikaw</option>
                    <option value="Myitkyinar">Myitkyinar</option>
                  </CSelect>
                </CCol>
              </CRow>

              <CRow>
                <CCol lg="4"><p>Date</p></CCol>
                <CCol lg="8">
                  <DatePicker value={saleDate } change={saleDateChange} />

                </CCol>
              </CRow>

              {/* <CRow>
                <CCol lg="4"><p>Item ID</p></CCol>
                <CCol lg="8">
                  <CInput type="text" value={itemId} onChange={(e) => setItemId(e.target.value)} />
                </CCol>
              </CRow> */}

            </CCol>

            <CCol lg="6">
              <CRow>
                <CCol lg="4"><p>Payment Type</p></CCol>
                <CCol lg="8">
                  <CSelect value={paymentType} onChange={(e) => setPaymentType(e.target.value)}>
                    <option value="">-- Select --</option>
                    <option value="Cash">Cash</option>
                    <option value="Credit Card">Credit Card</option>
                    <option value="Mobile Payment">Mobile Payment</option>
                  </CSelect>
                </CCol>
              </CRow>
              <CRow>
                <CCol lg="4"><p>Currency</p></CCol>
                <CCol lg="8">
                  <CSelect value={currency} onChange={(e) => setCurrency(e.target.value)}>
                    <option value="Kyats">Kyats</option>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                  </CSelect>
                </CCol>
              </CRow>
              <CRow>
                <CCol lg="4"><p>Quantity</p></CCol>
                <CCol lg="8">
                  <CInput type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
                </CCol>
              </CRow>
              <CRow>
                <CCol lg="4"><p>Discount</p></CCol>
                <CCol lg="8">
                  <CInput type="number" value={discount} onChange={(e) => setDiscount(e.target.value)} />
                </CCol>
              </CRow>
              <CRow>
                <CCol lg="4"><p>Paid</p></CCol>
                <CCol lg="8">
                  <CInput type="number" value={paid} onChange={(e) => setPaid(e.target.value)} />
                </CCol>
              </CRow>
              <CRow>
                <CCol lg="4"><p>Total</p></CCol>
                <CCol lg="8">
                  <CInput type="number" value={total} onChange={(e) => setTotal(e.target.value)} />
                </CCol>
              </CRow>
              <CRow>
                <CCol lg="4"><p>Balance</p></CCol>
                <CCol lg="8">
                  <CInput type="number" value={balance} onChange={(e) => setBalance(e.target.value)} />
                </CCol>
              </CRow>
            </CCol>
          </CRow>
          <CRow style={{ justifyContent: "center", marginTop: "30px" }}>
            <CButton className="form-btn" onClick={handleSubmit}>
              Save
            </CButton>
          </CRow>
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
  <Loading start={loading} />

</>
  )
}

export default Update
