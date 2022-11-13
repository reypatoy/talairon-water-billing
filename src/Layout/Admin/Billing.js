import { db } from "../../firebase-config";
import { collection,getDocs, query, where, } from "firebase/firestore";
import { UserAuth } from "../../context/authContext";
import { useState, useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';

function Billing() {

    const [data, setData] = useState([]);
    const [filterData, setFilterData] = useState([]);
    const [searchName, setsSearchName] = useState('');
    const [billCustomerName, setBillCustomerName] = useState('');
    const [addCustomerBill, setAddCustomerBill] = useState(0);
    const [meterReading, setMeterReading] = useState(0);
    const [billCustomerID, setBillCustomerID] = useState('');
    const [selectedDate, setSelectedDate] = useState(null)
    const user = useSelector(state => state.user);
    const [isBillModal, setIsBillModal] = useState(false);
    const navigate = useNavigate();
    const { saveCustomerBill } = UserAuth();

    useEffect( () => {
        if(!user.isLogin){
            navigate('/admin/login/');
        }
        else if(user.type !== "Admin") {
                    navigate('/admin/login/');
        }
        if(user.isLogin && user.type === "Admin"){
            getCustomer();
        }
    },
    []);
    const getCustomer = () => {
         const q = query(collection(db, "customers"), where("approve", "==", true));
         const querySnapshot = getDocs(q);
         querySnapshot.then((snapshot) => {
             snapshot.forEach((doc) => {
                setData((data) => [...data, doc]);
                setFilterData((data) => [...data, doc]);
             });
         });
     }
    const handleChange = (e) => {
        if(e && e.trim() !== ""){
            setFilterData(() => {
                return data.filter((value) => value.data().fullname.toLowerCase().includes(e.toLowerCase()))
              })
        }
        else{
            setFilterData(data);
        }
    }

    const payBill = (customerId, i) => {
        console.log(customerId ,"  ", i);
    }
    const viewCustomer = (customerId, i) => {
        console.log(customerId ,"  ", i);
    }
    const saveAddBill = async () => {
        let date = moment(selectedDate).format("MM-DD-YYYY")
        if(addCustomerBill && selectedDate && addCustomerBill.trim() && meterReading && meterReading.trim()){
            saveCustomerBill(billCustomerID, addCustomerBill, date.toString(), meterReading);
            alert("Bill Added Successfully");
            setIsBillModal(false);
            setBillCustomerName("");
            setBillCustomerID("");
            setMeterReading("");
            setTimeout(() => {
            window.location.reload();
            }, 1000);
        }
        else{
            alert("Please fill all the fields");
        }
    }
    const addBill = (customerId, name, i) => {
        setIsBillModal(true);
        setBillCustomerName(name);
        setBillCustomerID(customerId);
    }
    const hideBill = () => {
        setIsBillModal(false);
    }
    return (
        <div className="billContainer">
            <div className="billSearchContainer">
                <span>Filter</span>
                <input className="billingSearch" type="name" onChange={(e) => handleChange(e.target.value)} placeholder="Enter Fullname To Filter" />
            </div>
            {isBillModal && 
               <div className="billModal">
                  <div className="setWidth">   
                        <span >{billCustomerName}</span>&nbsp;&nbsp;
                    </div>
                    <input type="text" onChange={e => setAddCustomerBill(e.target.value)} placeholder="Enter Bill Amount" />
                    <input type="text" onChange={e => setMeterReading(e.target.value)} placeholder="Enter Meter Reading" />
                    <DatePicker
                        selected={selectedDate}
                        onChange={date => setSelectedDate(date)}
                        placeholderText={'Enter Due Date'}
                        filterDate={date => date.getDay() !== 6 && date.getDay() !== 0} // weekends cancel
                        showYearDropdown // year show and scrolldown alos
                        scrollableYearDropdown
                    />
                   <div className="setGroupWidth">
                        <button onClick={hideBill}>
                            Cancel
                        </button>
                        <button onClick={saveAddBill}>
                            Save Changes
                        </button>
                    </div>
                </div>
            }
            <table>
                <thead>
                    <tr>
                        <th>NAME</th>
                        <th>PUROK</th>  
                        <th>Bill</th>
                        <th>DUE DATE</th>
                        <th>METER READING</th>
                        <th>ACTION</th>
                    </tr>
                </thead>
                <tbody>
                {filterData && filterData.map((item, i) => (
                    <tr key={i} >
                        <td>{item.data().fullname}</td>
                        <td>{item.data().address}</td>
                        {item.data().bill ?
                            <td>{item.data().bill}</td>
                            :
                            <td>0</td>
                        }
                        {item.data().dueDate ?
                            <td>{item.data().dueDate}</td>
                            :
                            <td>No Due Date Yet</td>
                        }
                        {item.data().meterReading ?
                            <td>{item.data().meterReading}</td>
                            :
                            <td>No Reading Yet</td>
                        }
                        
                        <td>
                            <button onClick={() => payBill(item.id, i)}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M0 112.5V422.3c0 18 10.1 35 27 41.3c87 32.5 174 10.3 261-11.9c79.8-20.3 159.6-40.7 239.3-18.9c23 6.3 48.7-9.5 48.7-33.4V89.7c0-18-10.1-35-27-41.3C462 15.9 375 38.1 288 60.3C208.2 80.6 128.4 100.9 48.7 79.1C25.6 72.8 0 88.6 0 112.5zM288 352c-44.2 0-80-43-80-96s35.8-96 80-96s80 43 80 96s-35.8 96-80 96zM64 352c35.3 0 64 28.7 64 64H64V352zm64-208c0 35.3-28.7 64-64 64V144h64zM512 304v64H448c0-35.3 28.7-64 64-64zM448 96h64v64c-35.3 0-64-28.7-64-64z"/></svg>
                                <span>Pay</span>
                            </button>
                            <button onClick={() => viewCustomer(item.id, i)}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M160 256C160 185.3 217.3 128 288 128C358.7 128 416 185.3 416 256C416 326.7 358.7 384 288 384C217.3 384 160 326.7 160 256zM288 336C332.2 336 368 300.2 368 256C368 211.8 332.2 176 288 176C287.3 176 286.7 176 285.1 176C287.3 181.1 288 186.5 288 192C288 227.3 259.3 256 224 256C218.5 256 213.1 255.3 208 253.1C208 254.7 208 255.3 208 255.1C208 300.2 243.8 336 288 336L288 336zM95.42 112.6C142.5 68.84 207.2 32 288 32C368.8 32 433.5 68.84 480.6 112.6C527.4 156 558.7 207.1 573.5 243.7C576.8 251.6 576.8 260.4 573.5 268.3C558.7 304 527.4 355.1 480.6 399.4C433.5 443.2 368.8 480 288 480C207.2 480 142.5 443.2 95.42 399.4C48.62 355.1 17.34 304 2.461 268.3C-.8205 260.4-.8205 251.6 2.461 243.7C17.34 207.1 48.62 156 95.42 112.6V112.6zM288 80C222.8 80 169.2 109.6 128.1 147.7C89.6 183.5 63.02 225.1 49.44 256C63.02 286 89.6 328.5 128.1 364.3C169.2 402.4 222.8 432 288 432C353.2 432 406.8 402.4 447.9 364.3C486.4 328.5 512.1 286 526.6 256C512.1 225.1 486.4 183.5 447.9 147.7C406.8 109.6 353.2 80 288 80V80z"/></svg>
                                <span>View</span>
                            </button>
                            <button onClick={() => addBill(item.id, item.data().fullname, i)}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M96 96C96 60.65 124.7 32 160 32H576C611.3 32 640 60.65 640 96V320C640 355.3 611.3 384 576 384H160C124.7 384 96 355.3 96 320V96zM160 320H224C224 284.7 195.3 256 160 256V320zM160 96V160C195.3 160 224 131.3 224 96H160zM576 256C540.7 256 512 284.7 512 320H576V256zM512 96C512 131.3 540.7 160 576 160V96H512zM368 128C323.8 128 288 163.8 288 208C288 252.2 323.8 288 368 288C412.2 288 448 252.2 448 208C448 163.8 412.2 128 368 128zM48 360C48 399.8 80.24 432 120 432H520C533.3 432 544 442.7 544 456C544 469.3 533.3 480 520 480H120C53.73 480 0 426.3 0 360V120C0 106.7 10.75 96 24 96C37.25 96 48 106.7 48 120V360z"/></svg>
                                <span>Bill</span>
                            </button>   
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}

export default Billing;