import { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import { setUserState } from "../actions";
import { UserAuth } from "../context/authContext";

function Login() {

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { loginUser } = UserAuth(); 
    const user = useSelector(state => state.user);

    const onSubmit = async (e) => {
        e.preventDefault();

        if(!email.trim() || !password.trim()){
            alert('Please fill all fields')
            return
        }
        try {
            const newUser = await loginUser(email, password);
            dispatch(setUserState({newUser}));
            navigate('/admin');
        } catch (error) {
            alert(error.message);
        }

    }

    useEffect(() => {
        if(user.isLogin){
          navigate('/admin');
        }
    }, []);

    return (
        <div className='loginPanel'>
          <h1>Login</h1>
          <form>
            <div className="formItem">
            <label>Email</label>
            <input type="text" id='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className="formItem">
            <label>Password</label>
            <input type="password" id='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <button onClick={ onSubmit} type="submit">Login</button>
            <Link to={'/register'}> <button>Register</button> </Link>
          </form>

        </div>
    )
}

export default Login;