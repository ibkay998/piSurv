import React,{useState,useEffect,useRef,useContext} from 'react'
import ApiService from './ApiService'
import {useCookie, useCookies,useLocation} from 'react-cookie'
import {useNavigate, Navigate} from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import AuthContext from '../context/AuthProvider'
import {FiLock} from "react-icons/fi"

const Login = () => {
    const { auth, setAuth } = useContext(AuthContext);
    const navigate = useNavigate();
    // const location = useLocation();
    // const from = location.state?.from?.pathname || "/";
    const userRef = useRef();
    const errRef = useRef();
    const [username , setUsername] = useState("")
    const [password , setPassword] = useState("")
    const [token,setToken] = useCookies(["mytoken"])
    const [errMsg, setErrMsg] = useState('');
    let history = useNavigate()
    
   
    


    // useEffect(() => {
    //     userRef.current.focus();
    // }, [])



    

    let isStaff = false

    
    

    const loginBtn = async e => {
        e.preventDefault();
        let response = null
        try{
            response = await ApiService.LoginUser({username,password});
            
        }
        catch(err){
            

        }
        if (response !== null){
            isStaff = response.isStaff
            setAuth({username,token,isStaff})
            console.log(auth)
            console.log("i am here")
            
            setToken("mytoken",response.token)
            if (isStaff){
                navigate("/company/overview")
            }
            else{
                navigate("/user/overview")
            }
        }
        
        // ApiService.LoginUser({username,password})
        // .then(resp => setToken("mytoken",resp.token)).then(resp=>console.log(resp)).then(resp => 
        //     {if(resp.isStaff === true){
        //         isStaff = true
        //     }}).then(console.log(isStaff))
        // .catch(err => console.log(err))
    }
  return (
      

    

    <div id="wrapper" className="flex flex-col  h-screen text-black bg-gray-300 p-8 text-xs">
        <div className='flex justify-end items-center gap-2'>
            <div className='flex flex-col leading-4'>
                <a href='./login'>Dont have an account Register?</a>
                <a href="./forgot-password" className='text-fuchsia-500 hover:text-fuchsia-900'>I forgot my Password or Username</a>
            </div>
            <a href='./register' className='p-3 rounded-md text-white bg-fuchsia-500 font-thin flex gap-2 hover:bg-white transition duration-500 hover:text-black'><FiLock/>Register</a>  
        </div>

        <div className='container flex items-center flex-col'>
            <div className='title flex flex-col items-center mt-4'>
                <p className='text-3xl text-fuchsia-800 font-extrabold'>Pisurv</p>
            </div>
            <div className="form bg-white border-gray-400 border-2 drop-shadow-md w-2/3 sm:w-1/3 ">
                <form action="" className='ml-3 mr-3 flex flex-col'>
                    <div className='flex flex-col items-center justify-center'>
                        <p className='text-xl sm:text-3xl font-medium mt-6 text-black'>Sign In</p>
                    </div>
                    
                    <label>Username</label>
                    <input type="text" name="username" placeholder="Username" value={username}  onChange={e => setUsername(e.target.value)} className="bg-white border-2 focus:outline-fuchsia-500 mt-3 p-2"/>
                    <label>Password</label>
                    <input type="password" name="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} className="bg-white border-2 focus:outline-fuchsia-500 mt-3 p-2"/>
                    
                    
                    <button onClick={loginBtn} className="bg-gradient-to-br from-pink-500 py-3 rounded-md text-white text-xl to-red-400 w-full">Login </button>
                </form>
            </div>
        </div>
        </div>
    
  )
}

export default Login
