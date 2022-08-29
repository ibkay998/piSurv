import React,{useState,useEffect,useRef} from 'react'
import ApiService from './ApiService'
import {useCookie, useCookies,useLocation} from 'react-cookie'
import {useNavigate, Navigate} from 'react-router-dom'
import useAuth from '../hooks/useAuth'

const Login = () => {
    const { auth, setAuth } = useAuth();
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
    

    useEffect(()=>{
        if (token["mytoken"]){
            history("/company/overview")
        }
    },[token])


    // useEffect(() => {
    //     userRef.current.focus();
    // }, [])

    useEffect(() => {
        setErrMsg('');
    }, [username, password])

    

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
            setAuth({username})
            console.log(response)
            setToken("mytoken",response.token)


        }


        
        // ApiService.LoginUser({username,password})
        // .then(resp => setToken("mytoken",resp.token)).then(resp=>console.log(resp)).then(resp => 
        //     {if(resp.isStaff === true){
        //         isStaff = true
        //     }}).then(console.log(isStaff))
        // .catch(err => console.log(err))
    }
  return (
    <div id="wrapper" class="flex flex-col justify-between bg-white">

    <div class="bg-white py-4 shadow dark:bg-gray-800">
        <div class="max-w-6xl mx-auto">


            <div class="flex items-center lg:justify-between justify-around">

                <a href="trending.html">
                   <p className="text-black font-medium ">PISURV</p>
                </a>

                <div class="capitalize flex font-semibold lg:block my-2 space-x-3 text-center text-sm">
                    
                    <a href="/register" class="bg-pink-500 pink-500 px-6 py-3 rounded-md shadow text-white">Register</a>
                </div>

            </div>
        </div>
    </div>

   
    <div>
        <div className="lg:p-12 max-w-md  lg:my-0 my-12 mx-auto p-6 text-black bg-fuchsia-900">
            <h1 className="lg:text-3xl text-xl font-semibold  mb-6 "> Log in</h1>
                <input type="text" name="username" placeholder="Username" value={username}  onChange={e => setUsername(e.target.value)} className="bg-gray-200 mb-2 shadow-none dark:bg-gray-800 border-2 border-solid" />
                <input type="password" name="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} className="bg-gray-200 mb-2 shadow-none dark:bg-gray-800 border-2 border-solid"/>
              <div className="flex justify-between my-4">
                    <div className="checkbox text-black">
                        <input type="checkbox" id="chekcbox1" checked/>
                        <label for="chekcbox1"><span class="checkbox-icon"></span>Remember Me</label>
                    </div>
                    <a href="/"> Forgot Your Password? </a>
                </div> 
                <button onClick={loginBtn} className="bg-gradient-to-br from-pink-500 py-3 rounded-md text-white text-xl to-red-400 w-full">Login 
                {auth.username ? <Navigate to="/company/overview"  replace /> : "" }
                
                </button>
                
                <div className="text-center mt-5 space-x-2">
                    <p className="text-base"> Not registered? <a href="/register"> Create a account </a></p>
                </div>



        </div>
    </div>
    
    

    <div class="lg:mb-5 py-3 uk-link-reset">
        <div class="flex flex-col items-center justify-between lg:flex-row max-w-6xl mx-auto lg:space-y-0 space-y-3">
            <div class="flex space-x-2 text-gray-700 uppercase">
                <a href="/"> About</a>
                <a href="/"> Help</a>
                <a href="/"> Terms</a>
                <a href="/"> Privacy</a>
            </div>
            <p class="capitalize"> © copyright 2022 by ibkay</p>
        </div>
    </div>

    </div>
    
  )
}

export default Login
