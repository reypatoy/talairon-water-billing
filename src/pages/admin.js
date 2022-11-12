import { Link, Route, Routes, useNavigate } from "react-router-dom";
import Admins from '../Layout/Admin/Admins';
import { useEffect } from "react";
import Billing from '../Layout/Admin/Billing';
import Notification from '../Layout/Admin/Notifications';
import Profile from "../Layout/Admin/Profile";
// import Logo from '../images/navLogo.png';
import '../Admin.css';
import Approval from "../Layout/Admin/Approval";
import BillDetails from "../Layout/Admin/BillDetails";
import Manage from "../Layout/Admin/Manage";
import brgyLogo from '../brgyLogo.png'
import { logOut } from "../actions";
import { useSelector, useDispatch } from "react-redux";
import { UserAuth } from "../context/authContext";

function Admin() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {logoutUser}= UserAuth();
    const user = useSelector(state => state.user);


    const onLogOut = () => {
        logoutUser();
        dispatch(logOut());
        navigate('/');
    };
    useEffect( () => {
        if(!user.isLogin){
            navigate('/');
        }
      }, 
    []);

    return (
        <>
            <div className="header">
                <div className="headerTitle">
                    <h1>TALAIRON WATER BILLING SYSTEM</h1>
                    <Link to={'/admin/profile'}>
                        <div className="profileIcon">
                            <svg width="65" height="66" viewBox="0 0 65 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M44.4961 35.3176C47.6708 32.7941 49.988 29.3336 51.1254 25.4175C52.2628 21.5014 52.1638 17.3245 50.8422 13.4679C49.5206 9.61136 47.0421 6.26684 43.7516 3.8997C40.461 1.53255 36.522 0.260494 32.4825 0.260494C28.4431 0.260494 24.5041 1.53255 21.2135 3.8997C17.923 6.26684 15.4445 9.61136 14.1229 13.4679C12.8013 17.3245 12.7023 21.5014 13.8397 25.4175C14.9771 29.3336 17.2943 32.7941 20.469 35.3176C15.0291 37.5196 10.2827 41.1717 6.7356 45.8847C3.18854 50.5977 0.973854 56.1949 0.327638 62.0796C0.280861 62.5092 0.3183 62.944 0.437817 63.359C0.557334 63.774 0.756588 64.1612 1.0242 64.4984C1.56467 65.1794 2.35079 65.6156 3.2096 65.7111C4.06841 65.8065 4.92958 65.5534 5.60365 65.0073C6.27772 64.4613 6.70948 63.667 6.80395 62.7993C7.515 56.4039 10.5333 50.4974 15.2822 46.2082C20.031 41.919 26.1775 39.548 32.5473 39.548C38.9171 39.548 45.0636 41.919 49.8125 46.2082C54.5613 50.4974 57.5796 56.4039 58.2907 62.7993C58.3787 63.6032 58.7584 64.3457 59.3564 64.8834C59.9544 65.4211 60.7283 65.716 61.5288 65.7111H61.885C62.7339 65.6124 63.5097 65.1788 64.0434 64.5047C64.5772 63.8306 64.8256 62.9706 64.7346 62.1123C64.0853 56.2109 61.8587 50.5994 58.2934 45.8791C54.7281 41.1589 49.9586 37.5079 44.4961 35.3176ZM32.4825 32.9948C29.9208 32.9948 27.4165 32.2273 25.2865 30.7893C23.1564 29.3513 21.4962 27.3075 20.5159 24.9163C19.5355 22.525 19.279 19.8937 19.7788 17.3552C20.2786 14.8167 21.5122 12.4849 23.3237 10.6547C25.1351 8.82451 27.4431 7.57814 29.9556 7.07319C32.4682 6.56824 35.0725 6.8274 37.4393 7.81789C39.8061 8.80838 41.829 10.4857 43.2523 12.6378C44.6755 14.7898 45.4352 17.32 45.4352 19.9083C45.4352 23.379 44.0705 26.7076 41.6414 29.1618C39.2124 31.616 35.9178 32.9948 32.4825 32.9948Z" fill="black"/>
                            </svg>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="nav">
                <div className="navLogo">
                    <img src={ brgyLogo } title="logo"  width={ 100 } height={ 100 } alt=''/>
                </div>
                <ul>
                    <Link to='/admin'>
                    <li>
                        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.77778 27.7778H19.4444C20.1812 27.7778 20.8877 27.4851 21.4086 26.9642C21.9296 26.4432 22.2222 25.7367 22.2222 25V2.77778C22.2222 2.04107 21.9296 1.33453 21.4086 0.813592C20.8877 0.292658 20.1812 0 19.4444 0H2.77778C2.04107 0 1.33453 0.292658 0.813592 0.813592C0.292658 1.33453 0 2.04107 0 2.77778V25C0 25.7367 0.292658 26.4432 0.813592 26.9642C1.33453 27.4851 2.04107 27.7778 2.77778 27.7778ZM0 47.2222C0 47.9589 0.292658 48.6655 0.813592 49.1864C1.33453 49.7073 2.04107 50 2.77778 50H19.4444C20.1812 50 20.8877 49.7073 21.4086 49.1864C21.9296 48.6655 22.2222 47.9589 22.2222 47.2222V36.1111C22.2222 35.3744 21.9296 34.6679 21.4086 34.1469C20.8877 33.626 20.1812 33.3333 19.4444 33.3333H2.77778C2.04107 33.3333 1.33453 33.626 0.813592 34.1469C0.292658 34.6679 0 35.3744 0 36.1111V47.2222ZM27.7778 47.2222C27.7778 47.9589 28.0704 48.6655 28.5914 49.1864C29.1123 49.7073 29.8188 50 30.5556 50H47.2222C47.9589 50 48.6655 49.7073 49.1864 49.1864C49.7073 48.6655 50 47.9589 50 47.2222V27.7778C50 27.0411 49.7073 26.3345 49.1864 25.8136C48.6655 25.2927 47.9589 25 47.2222 25H30.5556C29.8188 25 29.1123 25.2927 28.5914 25.8136C28.0704 26.3345 27.7778 27.0411 27.7778 27.7778V47.2222ZM30.5556 19.4444H47.2222C47.9589 19.4444 48.6655 19.1518 49.1864 18.6309C49.7073 18.1099 50 17.4034 50 16.6667V2.77778C50 2.04107 49.7073 1.33453 49.1864 0.813592C48.6655 0.292658 47.9589 0 47.2222 0H30.5556C29.8188 0 29.1123 0.292658 28.5914 0.813592C28.0704 1.33453 27.7778 2.04107 27.7778 2.77778V16.6667C27.7778 17.4034 28.0704 18.1099 28.5914 18.6309C29.1123 19.1518 29.8188 19.4444 30.5556 19.4444Z" fill="black"/>
                        </svg>
                        <span>Dashboard</span>
                    </li>
                    </Link>
                    <Link to={'/admin/billing'}>
                    <li>
                        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_431_23)">
                        <path d="M19.6945 19.1667V22.2222H32.8195C32.8915 21.8141 32.9287 21.4006 32.9306 20.9861C32.924 20.3696 32.8305 19.7571 32.6528 19.1667H19.6945Z" fill="black"/>
                        <path d="M19.6945 27.3611H26.9028C27.8663 27.3482 28.8121 27.1012 29.659 26.6415C30.5058 26.1818 31.2282 25.5231 31.7639 24.7222H19.6945V27.3611Z" fill="black"/>
                        <path d="M26.9028 14.5972H19.6945V16.6667H31.3195C30.7756 16.0241 30.0995 15.5066 29.3372 15.1494C28.5749 14.7923 27.7446 14.6039 26.9028 14.5972Z" fill="black"/>
                        <path d="M24.5417 2.77778C20.1466 2.77778 15.8501 4.08109 12.1957 6.5229C8.54126 8.96471 5.69298 12.4353 4.01103 16.4959C2.32909 20.5565 1.88901 25.0247 2.74646 29.3353C3.60391 33.646 5.72037 37.6057 8.82821 40.7135C11.936 43.8213 15.8957 45.9378 20.2064 46.7952C24.517 47.6527 28.9852 47.2126 33.0458 45.5307C37.1063 43.8487 40.577 41.0004 43.0188 37.346C45.4606 33.6916 46.7639 29.3951 46.7639 25C46.7639 19.1063 44.4227 13.454 40.2552 9.28652C36.0877 5.11904 30.4354 2.77778 24.5417 2.77778ZM39.125 24.7222H35.6945C35.0084 26.5033 33.8038 28.0377 32.2366 29.1271C30.6693 30.2166 28.8114 30.8109 26.9028 30.8333H19.6945V39.9167C19.6945 40.3771 19.5116 40.8187 19.186 41.1443C18.8604 41.4699 18.4188 41.6528 17.9584 41.6528C17.4979 41.6528 17.0563 41.4699 16.7307 41.1443C16.4052 40.8187 16.2222 40.3771 16.2222 39.9167V24.7222H12.1667C11.8352 24.7222 11.5172 24.5905 11.2828 24.3561C11.0484 24.1217 10.9167 23.8037 10.9167 23.4722C10.9167 23.1407 11.0484 22.8228 11.2828 22.5883C11.5172 22.3539 11.8352 22.2222 12.1667 22.2222H16.2222V19.1667H12.1667C11.8352 19.1667 11.5172 19.035 11.2828 18.8006C11.0484 18.5661 10.9167 18.2482 10.9167 17.9167C10.9167 17.5851 11.0484 17.2672 11.2828 17.0328C11.5172 16.7984 11.8352 16.6667 12.1667 16.6667H16.2222V12.8611C16.2204 12.632 16.264 12.4047 16.3504 12.1925C16.4368 11.9802 16.5644 11.7872 16.7258 11.6245C16.8872 11.4618 17.0792 11.3327 17.2908 11.2446C17.5023 11.1565 17.7292 11.1111 17.9584 11.1111H26.9028C28.7072 11.1303 30.4688 11.663 31.9815 12.6468C33.4942 13.6307 34.6953 15.025 35.4445 16.6667H39.125C39.4565 16.6667 39.7745 16.7984 40.0089 17.0328C40.2433 17.2672 40.375 17.5851 40.375 17.9167C40.375 18.2482 40.2433 18.5661 40.0089 18.8006C39.7745 19.035 39.4565 19.1667 39.125 19.1667H36.2361C36.3485 19.7619 36.4044 20.3665 36.4028 20.9722C36.4027 21.3903 36.3749 21.8079 36.3195 22.2222H39.0972C39.4288 22.2222 39.7467 22.3539 39.9811 22.5883C40.2156 22.8228 40.3472 23.1407 40.3472 23.4722C40.3472 23.8037 40.2156 24.1217 39.9811 24.3561C39.7467 24.5905 39.4288 24.7222 39.0972 24.7222H39.125Z" fill="black"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_431_23">
                        <rect width="50" height="50" fill="white"/>
                        </clipPath>
                        </defs>
                        </svg>
                        <span>Billing</span>
                    </li>
                    </Link>
                    <Link to={'/admin/approval'}>
                        <li>
                            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M41.6668 16.6667L29.1668 4.16667H12.5002C11.3951 4.16667 10.3353 4.60566 9.55388 5.38706C8.77248 6.16846 8.3335 7.22827 8.3335 8.33334V41.6667C8.3335 42.7717 8.77248 43.8315 9.55388 44.6129C10.3353 45.3943 11.3951 45.8333 12.5002 45.8333H37.5002C38.6052 45.8333 39.665 45.3943 40.4464 44.6129C41.2278 43.8315 41.6668 42.7717 41.6668 41.6667V16.6667ZM18.7502 39.5833H14.5835V20.8333H18.7502V39.5833ZM27.0835 39.5833H22.9168V27.0833H27.0835V39.5833ZM35.4168 39.5833H31.2502V33.3333H35.4168V39.5833ZM29.1668 18.75H27.0835V8.33334L37.5002 18.75H29.1668Z" fill="black"/>
                            </svg>
                            <span>Approval</span>
                        </li>
                    </Link>
                    <Link to={'/admin/notifications'}>
                    <li>
                        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M25 40.625C27.2917 40.625 29.1667 38.75 29.1667 36.4583H20.8334C20.8334 37.5634 21.2724 38.6232 22.0538 39.4046C22.8352 40.186 23.895 40.625 25 40.625ZM37.5 28.125V17.7083C37.5 11.3125 34.0834 5.95833 28.125 4.54167V3.125C28.125 1.39583 26.7292 0 25 0C23.2709 0 21.875 1.39583 21.875 3.125V4.54167C15.8959 5.95833 12.5 11.2917 12.5 17.7083V28.125L8.33337 32.2917V34.375H41.6667V32.2917L37.5 28.125Z" fill="black"/>
                        </svg>   
                        <span>Notifications</span>                     
                    </li>
                    </Link>
                    
                </ul>
                <button onClick={onLogOut} className="logOut">Logout.</button>
            </div>
            <div className="mainContainer">
                <Routes>
                    <Route path='/' element={<Admins />}/>
                    <Route exact path='/billing' element={<Billing />}/>
                    <Route exact path='/notifications' element={<Notification />}/>
                    <Route exact path="/profile" element={<Profile />}/>
                    <Route exact path='/approval' element={<Approval/>}/>
                    <Route exact path='/bill-details' element={<BillDetails/>}/>
                    <Route exact path='/manage' element={<Manage />}/>
                </Routes>
            </div>
        </>
    )
}

export default Admin;