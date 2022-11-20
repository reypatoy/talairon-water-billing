import { Link, Route, Routes } from "react-router-dom";
import Dashboard from "../Layout/User/Dashboard";
import Billing from "../Layout/User/Billing";
import Profile from "../Layout/User/Profile"
import Appointment from "../Layout/User/Appointment";
import About from "../Layout/About";
import '../user.css'
import brgyLogo from '../brgyLogo.png';
import Login from "../Layout/User/Login";
import Register from "../Layout/User/Register";

import { logOut } from "../actions";
import { useSelector, useDispatch } from "react-redux";

import { useNavigate } from 'react-router';
import { UserAuth } from "../context/authContext";


function User() {

    const user = useSelector(state => state.user);
    
    const { logoutUser }= UserAuth();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onLogOut = () => {
        logoutUser();
        dispatch(logOut());
        navigate('/');
    };
    

    return (
        <>
            <div className="header">
                <div className="headerTitle">
                    <h1>TALAIRON WATER BILLING SYSTEM</h1>
                    {user.isLogin && user.type === 'Customer' &&
                        <Link to={'/profile'}>
                            <div className="profileIcon">
                                <svg width="65" height="66" viewBox="0 0 65 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M44.4961 35.3176C47.6708 32.7941 49.988 29.3336 51.1254 25.4175C52.2628 21.5014 52.1638 17.3245 50.8422 13.4679C49.5206 9.61136 47.0421 6.26684 43.7516 3.8997C40.461 1.53255 36.522 0.260494 32.4825 0.260494C28.4431 0.260494 24.5041 1.53255 21.2135 3.8997C17.923 6.26684 15.4445 9.61136 14.1229 13.4679C12.8013 17.3245 12.7023 21.5014 13.8397 25.4175C14.9771 29.3336 17.2943 32.7941 20.469 35.3176C15.0291 37.5196 10.2827 41.1717 6.7356 45.8847C3.18854 50.5977 0.973854 56.1949 0.327638 62.0796C0.280861 62.5092 0.3183 62.944 0.437817 63.359C0.557334 63.774 0.756588 64.1612 1.0242 64.4984C1.56467 65.1794 2.35079 65.6156 3.2096 65.7111C4.06841 65.8065 4.92958 65.5534 5.60365 65.0073C6.27772 64.4613 6.70948 63.667 6.80395 62.7993C7.515 56.4039 10.5333 50.4974 15.2822 46.2082C20.031 41.919 26.1775 39.548 32.5473 39.548C38.9171 39.548 45.0636 41.919 49.8125 46.2082C54.5613 50.4974 57.5796 56.4039 58.2907 62.7993C58.3787 63.6032 58.7584 64.3457 59.3564 64.8834C59.9544 65.4211 60.7283 65.716 61.5288 65.7111H61.885C62.7339 65.6124 63.5097 65.1788 64.0434 64.5047C64.5772 63.8306 64.8256 62.9706 64.7346 62.1123C64.0853 56.2109 61.8587 50.5994 58.2934 45.8791C54.7281 41.1589 49.9586 37.5079 44.4961 35.3176ZM32.4825 32.9948C29.9208 32.9948 27.4165 32.2273 25.2865 30.7893C23.1564 29.3513 21.4962 27.3075 20.5159 24.9163C19.5355 22.525 19.279 19.8937 19.7788 17.3552C20.2786 14.8167 21.5122 12.4849 23.3237 10.6547C25.1351 8.82451 27.4431 7.57814 29.9556 7.07319C32.4682 6.56824 35.0725 6.8274 37.4393 7.81789C39.8061 8.80838 41.829 10.4857 43.2523 12.6378C44.6755 14.7898 45.4352 17.32 45.4352 19.9083C45.4352 23.379 44.0705 26.7076 41.6414 29.1618C39.2124 31.616 35.9178 32.9948 32.4825 32.9948Z" fill="black"/>
                                </svg>
                            </div>
                        </Link>
                    }
                </div>
            </div>
            <div className="nav">
                <div className="navLogo">
                    <img src={ brgyLogo } title="logo"  width={ 100 } height={ 100 } alt=''/>
                </div>
                <ul>
                    <Link to={'/'}>
                    <li>
                        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.77778 27.7778H19.4444C20.1812 27.7778 20.8877 27.4851 21.4086 26.9642C21.9296 26.4432 22.2222 25.7367 22.2222 25V2.77778C22.2222 2.04107 21.9296 1.33453 21.4086 0.813592C20.8877 0.292658 20.1812 0 19.4444 0H2.77778C2.04107 0 1.33453 0.292658 0.813592 0.813592C0.292658 1.33453 0 2.04107 0 2.77778V25C0 25.7367 0.292658 26.4432 0.813592 26.9642C1.33453 27.4851 2.04107 27.7778 2.77778 27.7778ZM0 47.2222C0 47.9589 0.292658 48.6655 0.813592 49.1864C1.33453 49.7073 2.04107 50 2.77778 50H19.4444C20.1812 50 20.8877 49.7073 21.4086 49.1864C21.9296 48.6655 22.2222 47.9589 22.2222 47.2222V36.1111C22.2222 35.3744 21.9296 34.6679 21.4086 34.1469C20.8877 33.626 20.1812 33.3333 19.4444 33.3333H2.77778C2.04107 33.3333 1.33453 33.626 0.813592 34.1469C0.292658 34.6679 0 35.3744 0 36.1111V47.2222ZM27.7778 47.2222C27.7778 47.9589 28.0704 48.6655 28.5914 49.1864C29.1123 49.7073 29.8188 50 30.5556 50H47.2222C47.9589 50 48.6655 49.7073 49.1864 49.1864C49.7073 48.6655 50 47.9589 50 47.2222V27.7778C50 27.0411 49.7073 26.3345 49.1864 25.8136C48.6655 25.2927 47.9589 25 47.2222 25H30.5556C29.8188 25 29.1123 25.2927 28.5914 25.8136C28.0704 26.3345 27.7778 27.0411 27.7778 27.7778V47.2222ZM30.5556 19.4444H47.2222C47.9589 19.4444 48.6655 19.1518 49.1864 18.6309C49.7073 18.1099 50 17.4034 50 16.6667V2.77778C50 2.04107 49.7073 1.33453 49.1864 0.813592C48.6655 0.292658 47.9589 0 47.2222 0H30.5556C29.8188 0 29.1123 0.292658 28.5914 0.813592C28.0704 1.33453 27.7778 2.04107 27.7778 2.77778V16.6667C27.7778 17.4034 28.0704 18.1099 28.5914 18.6309C29.1123 19.1518 29.8188 19.4444 30.5556 19.4444Z" fill="black"/>
                        </svg>
                        <span>Dashboard</span>
                    </li>
                    </Link>
                    {user.isLogin && user.type === 'Customer' &&
                        <Link to={'/billing'}>
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
                    }
                    {user.type !== 'Customer' &&
                        <Link to={'/login'}>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-log-in">
                                    <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4">
                                    </path><polyline points="10 17 15 12 10 7"></polyline>
                                    <line x1="15" y1="12" x2="3" y2="12"></line>
                                </svg>
                                <span>Login</span>
                            </li>
                        </Link>
                    }
                    <Link to={'/about'}>
                    <li>
                        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M25 0C20.0555 0 15.222 1.46622 11.1108 4.21326C6.99953 6.96029 3.79521 10.8648 1.90302 15.4329C0.0108321 20.0011 -0.484251 25.0277 0.480379 29.8772C1.44501 34.7268 3.82603 39.1813 7.32234 42.6777C10.8187 46.174 15.2732 48.555 20.1228 49.5196C24.9723 50.4842 29.9989 49.9892 34.5671 48.097C39.1352 46.2048 43.0397 43.0005 45.7867 38.8892C48.5338 34.778 50 29.9445 50 25C50 21.7169 49.3534 18.466 48.097 15.4329C46.8406 12.3998 44.9991 9.64379 42.6777 7.32233C40.3562 5.00086 37.6002 3.15938 34.5671 1.90301C31.534 0.646644 28.2831 0 25 0ZM25 40C24.5056 40 24.0222 39.8534 23.6111 39.5787C23.2 39.304 22.8795 38.9135 22.6903 38.4567C22.5011 37.9999 22.4516 37.4972 22.548 37.0123C22.6445 36.5273 22.8826 36.0819 23.2322 35.7322C23.5819 35.3826 24.0273 35.1445 24.5123 35.048C24.9972 34.9516 25.4999 35.0011 25.9567 35.1903C26.4135 35.3795 26.804 35.6999 27.0787 36.1111C27.3534 36.5222 27.5 37.0055 27.5 37.5C27.5 38.163 27.2366 38.7989 26.7678 39.2678C26.2989 39.7366 25.663 40 25 40ZM27.5 27.1V30C27.5 30.663 27.2366 31.2989 26.7678 31.7678C26.2989 32.2366 25.663 32.5 25 32.5C24.337 32.5 23.7011 32.2366 23.2322 31.7678C22.7634 31.2989 22.5 30.663 22.5 30V25C22.5 24.337 22.7634 23.7011 23.2322 23.2322C23.7011 22.7634 24.337 22.5 25 22.5C25.7417 22.5 26.4667 22.2801 27.0834 21.868C27.7001 21.4559 28.1807 20.8703 28.4646 20.1851C28.7484 19.4998 28.8226 18.7458 28.678 18.0184C28.5333 17.291 28.1761 16.6228 27.6517 16.0983C27.1272 15.5739 26.459 15.2167 25.7316 15.0721C25.0042 14.9274 24.2502 15.0016 23.5649 15.2854C22.8797 15.5693 22.2941 16.0499 21.882 16.6666C21.4699 17.2833 21.25 18.0083 21.25 18.75C21.25 19.413 20.9866 20.0489 20.5178 20.5178C20.0489 20.9866 19.413 21.25 18.75 21.25C18.087 21.25 17.4511 20.9866 16.9822 20.5178C16.5134 20.0489 16.25 19.413 16.25 18.75C16.2435 17.1257 16.6892 15.5317 17.5372 14.1464C18.3852 12.7611 19.6021 11.6392 21.0515 10.9063C22.501 10.1733 24.1259 9.85831 25.7443 9.99648C27.3627 10.1347 28.9106 10.7206 30.2149 11.6886C31.5192 12.6567 32.5282 13.9686 33.1291 15.4777C33.73 16.9867 33.899 18.6332 33.6172 20.2328C33.3355 21.8324 32.614 23.322 31.5336 24.5349C30.4532 25.7477 29.0566 26.6359 27.5 27.1Z" fill="black"/>
                        </svg>
                        <span>About us</span>
                    </li>
                    </Link>
                </ul>
                {user.isLogin && user.type === 'Customer' &&
                    <button onClick={onLogOut}  className="logOut">Logout.</button>
                }
            </div>
            <div className="mainContainer">
                    <Routes>
                        <Route path='/' element={<Dashboard/>}/>
                        <Route path='/login' element={<Login/>}/>
                        <Route path='/register' element={<Register/>}/>
                        <Route path='/billing' element={<Billing/>}/>
                        <Route path='/profile' element={<Profile/>}/>
                        <Route path='/about' element={<About/>}/>
                        <Route path='/appointment' element={<Appointment/>}/>                    
                    </Routes>
            </div>
        </>
    )
}

export default User;