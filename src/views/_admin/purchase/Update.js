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
import { useLocation  } from 'react-router-dom';
import { checkNullOrBlank,checkPassword } from "../../common/CommonValidation";
import DatePicker from '../../common/datepicker/DatePicker';
import Loading from "../../common/Loading";
import SuccessError from "../../common/SuccessError";
import ConfirmationWithTable from '../../common/ConfirmationWithTable';
import { ApiRequest } from "../../common/ApiRequest";
import moment from "moment";

const Update = () => {
  useEffect(() => {
    let flag = localStorage.getItem(`LoginProcess`)
    if (flag == "true") {
      console.log("Login process success")
      console.log("purchase data :", purchase)
    } else {
      history.push(`/admin-login`);
    }
    setLoading(true);
    setTimeout( () => {
        setLoading(false);
    }, 500); // 1000 milliseconds = 1 seconds
  }, []);
  
  let err = [];
  const history = useHistory();
  const objBarier = useLocation();
  const { purchase } = objBarier.state || {}; // Get the purchase object from state
  const [id, setId] = useState(purchase ? purchase.id : '');
  const [userCode, setUserCode] = useState(purchase ? purchase.user_code : '');
  const [supplier, setSupplier] = useState(purchase ? purchase.supplier : '');
  const [itemCode, setItemCode] = useState(
    Array.from({ length: 50 }, (v, i) => ({
      id: (i + 1).toString(),
      name: `ITEM00${i + 1}`
    }))
  );
  const [selectedItemCode, setSelectedItemCode] = useState(purchase ? purchase.item_code : '');
  const [location, setLocation] = useState(purchase ? purchase.location : '');
  const [purchaseDate, setPurchaseDate] = useState(purchase ? purchase.date : '');
  const [paymentType, setPaymentType] = useState(purchase ? purchase.payment_type : '');
  const [currency, setCurrency] = useState(purchase ? purchase.currency : "Kyats");
  const [quantity, setQuantity] = useState(purchase ? purchase.quantity : 0);
  const [discount, setDiscount] = useState(purchase ? purchase.discount_and_foc : 0);
  const [paid, setPaid] = useState(purchase ? purchase.paid : 0);
  const [total, setTotal] = useState(purchase ? purchase.total : '');
  const [balance, setBalance] = useState(purchase ? purchase.balance : 0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState([]);
  const [success, setSuccess] = useState([]);


  const handleInputChange = (setter) => (e) => {
    setError([]); // Clear errors
    setSuccess([]); // Clear successes
    setter(e.target.value); // Update the state with the new value
  };
  
  const userCodeChange = handleInputChange(setUserCode);
  const supplierNameChange = handleInputChange(setSupplier);
  const itemCodeChange = handleInputChange(setSelectedItemCode);
  const locationChange = handleInputChange(setLocation);
  const paymentTypeChange = handleInputChange(setPaymentType);
  const currencyChange = handleInputChange(setCurrency);
  const quantityChange = handleInputChange(setQuantity);
  const discountChange = handleInputChange(setDiscount);
  const paidChange = handleInputChange(setPaid);
  const totalChange = handleInputChange(setTotal);
  const balanceChange = handleInputChange(setBalance);

  const purchaseDateChange = (e) => {
    let date = "";
    date = moment(e).format("YYYY-MM-DD");
    setPurchaseDate(date);
  }

  // === submit process ===
  const handleSubmit = async () => {
    if(!checkNullOrBlank(userCode)){
      err.push("Please fill user code");
    }
    if(!checkNullOrBlank(supplier)){
      err.push("Please fill supplier name");
    }
    if(!checkNullOrBlank(selectedItemCode)){
      err.push("Please fill item code");
    }
    if(!checkNullOrBlank(location)){
      err.push("Please fill location");
    }
    if(!checkNullOrBlank(purchaseDate)){
      err.push("Please fill date");
    }
    if(!checkNullOrBlank(paymentType)){
      err.push("Please Choose paymentType");
    }
    if(!checkNullOrBlank(currency)){
      err.push("Please fill currency");
    }
    
    if (err.length > 0) {
      setSuccess([]);
      setError(err);
    } else {

    const msgTitle = 'Edit Confirmation';
    const msgBody = [ 
        { label: 'User  Code', value: userCode }, 
        { label: 'Item Code', value: selectedItemCode }, 
        { label: 'Date', value: purchaseDate }, 
        { label: 'Total', value: total } 
    ];
    const msgBtn1 = 'Edit';
    const msgBtn2 = 'Cancel';
    
    const isConfirmed = await ConfirmationWithTable( msgTitle, msgBody, msgBtn1, msgBtn2 );

    if (isConfirmed) {
      setError([]);
      setLoading(true);
      let saveData = {
        method: "post",
        url: `purchase/edit/${id}`,
        params: {
          date: moment(purchaseDate).format("YYYY-MM-DD"),
          user_code: userCode,
          item_code: selectedItemCode,
          location: location,
          supplier: supplier,
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
        } else {
          setError([response.data.message]);
          setSuccess([]);
        }
      }
      setLoading(false);
    }
  }
};


return (
<>
  <CRow>
    <CCol xs="12">
      <SuccessError success={success} error={error} />
      <CCard>
        <CCardHeader>
          <h4 className='m-0'>Edit Entry for Purchase-list-ID #{id}</h4>
        </CCardHeader>
        <CCardBody>
          <CRow>
            <CCol lg="6">
              <CRow>
                <CCol lg="4"><p>User Code</p></CCol>
                <CCol lg="8"><CInput type="text" value={userCode} onChange={userCodeChange} /></CCol>
              </CRow>
              <CRow>
                <CCol lg="4"><p>Supplier</p></CCol>
                <CCol lg="8">
                  <CInput type="text" value={supplier} onChange={supplierNameChange} />
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
                  <CSelect value={location} onChange={locationChange} >
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
                  <DatePicker value={purchaseDate } change={purchaseDateChange} />
                </CCol>
              </CRow>
            </CCol>
            <CCol lg="6">
              <CRow>
                <CCol lg="4"><p>Payment Type</p></CCol>
                <CCol lg="8">
                  <CSelect value={paymentType} onChange={paymentTypeChange}>
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
                  <CSelect value={currency} onChange={currencyChange}>
                    <option value="Kyats">Kyats</option>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                  </CSelect>
                </CCol>
              </CRow>
              <CRow>
                <CCol lg="4"><p>Quantity</p></CCol>
                <CCol lg="8">
                  <CInput type="number" value={quantity} onChange={quantityChange} />
                </CCol>
              </CRow>
              <CRow>
                <CCol lg="4"><p>Discount</p></CCol>
                <CCol lg="8">
                  <CInput type="number" value={discount} onChange={discountChange} />
                </CCol>
              </CRow>
              <CRow>
                <CCol lg="4"><p>Paid</p></CCol>
                <CCol lg="8">
                  <CInput type="number" value={paid} onChange={paidChange} />
                </CCol>
              </CRow>
              <CRow>
                <CCol lg="4"><p>Total</p></CCol>
                <CCol lg="8">
                  <CInput type="number" value={total} onChange={totalChange} />
                </CCol>
              </CRow>
              <CRow>
                <CCol lg="4"><p>Balance</p></CCol>
                <CCol lg="8">
                  <CInput type="number" value={balance} onChange={balanceChange} />
                </CCol>
              </CRow>
            </CCol>
          </CRow>
          <CRow style={{ justifyContent: "center", marginTop: "30px" }}>
            <CButton className="form-btn" onClick={handleSubmit}>
              Update
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
