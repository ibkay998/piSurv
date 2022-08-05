import React,{useState,useEffect} from 'react'
import ApiService from './ApiService'
import {useCookie, useCookies} from 'react-cookie'
import {useNavigate} from 'react-router-dom'
import {FiLock} from "react-icons/fi"

function Register() {
    const [username , setUsername] = useState("")
    const [password , setPassword] = useState("")
    const [email,setEmail] = useState("")
    const [token,setToken] = useCookies(["mytoken"])
    let history = useNavigate()

    useEffect(()=>{
        if (token["mytoken"]){
            history("/company/overview")
        }
    },[token])

    const loginBtn = ()=>{
        ApiService.LoginUser({username,password})
        .then(resp => setToken("mytoken",resp.token)).then(resp=>console.log(resp))
        .catch(err => console.log(err))
    }

    const registerBtn = ()=>{
        ApiService.RegisterUser({username,password})
        .then(resp => loginBtn())
        .catch(err => console.log(err))
    }

  return (
    <div id="wrapper" className="flex flex-col  h-screen text-black bg-gray-300 p-8 text-xs">
        <div className='flex justify-end items-center gap-2'>
            <div className='flex flex-col leading-4'>
                <a href='./login'>Already have an account?</a>
                <a href="./forgot-password" className='text-fuchsia-500 hover:text-fuchsia-900'>I forgot my Password or Username</a>
            </div>
            <a href='./login' className='p-3 rounded-md text-white bg-fuchsia-500 font-thin flex gap-2 hover:bg-white transition duration-500 hover:text-black'><FiLock/>SignIn</a>  
        </div>

        <div className='container flex items-center flex-col '>
            <div className='title flex flex-col items-center mt-4'>
                <p className='text-3xl text-fuchsia-800 font-extrabold'>Pisurv</p>
            </div>
            <div className="form bg-white border-gray-400 border-2 drop-shadow-md w-2/3 sm:w-1/3 ">
                <form action="" className='ml-3 mr-3 flex flex-col'>
                    <div className='flex flex-col items-center justify-center'>
                        <p className='text-xl sm:text-3xl font-medium mt-6 text-black'>Create An Account</p>
                    </div>
                    <label>Email</label>
                    <input type="email" name="email" placeholder="Email" value={email}  onChange={e => setEmail(e.target.value)} className="bg-white border-2 focus:outline-fuchsia-500 mt-3 p-2"/>
                    <label>Username</label>
                    <input type="text" name="username" placeholder="Username" value={username}  onChange={e => setUsername(e.target.value)} className="bg-white border-2 focus:outline-fuchsia-500 mt-3 p-2"/>
                    <label>Password</label>
                    <input type="password" name="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} className="bg-white border-2 focus:outline-fuchsia-500 mt-3 p-2"/>
                    <label>Confirm Password</label>
                    <input type="password" name="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} className="bg-white border-2 focus:outline-fuchsia-500 mt-3 p-2"/>
                    
                    <button className='bg-fuchsia-700 p-2 mt-3 mb-3 hover:bg-fuchsia-400 hover:text-black'>Create Account</button>
                </form>
            </div>
        </div>

        {/* <input type="text" name="username" placeholder="Username" value={username}  onChange={e => setUsername(e.target.value)} class="bg-gray-200 mb-2 shadow-none dark:bg-gray-800" className="border "/>
                <input type="password" name="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} class="bg-gray-200 mb-2 shadow-none dark:bg-gray-800" className="border "/>
                    
                    <div class="flex justify-start my-4 space-x-1">
                        <div class="checkbox">
                            <input type="checkbox" id="chekcbox1" checked/>
                            <label for="chekcbox1"><span class="checkbox-icon"></span> I Agree</label>
                        </div>
                        <a href="/"> Terms and Conditions</a>
                    </div> 
                    <button onClick={registerBtn} className="bg-gradient-to-br from-pink-500 py-3 rounded-md text-white text-xl to-red-400 w-full">Sign Up</button>
                    <div class="text-center mt-5 space-x-2">
                        <p class="text-base"> Do you have an account? <a href="/login"> Login </a></p>
                    </div> */}
    </div>
      
        

      

                   
                   
                



  )
}

export default Register
