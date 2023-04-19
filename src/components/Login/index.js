import { selectUnstyledClasses } from '@mui/base';
import {useRef, useState, useEffect} from 'react'
import {
    LoginSection,
    LoginForm,
    LoginInput,
    LoginButton,
    LoginLabel,
    LoginP
} from './LoginStyle.jsx'
import { createAPIEndpoint, ENDPOINTS } from '../../api';
import {useAuth} from './auth.js'
import { useNavigate } from 'react-router-dom';

const Login =()=>{

    const userRef= useRef();
    const errRef= useRef();
    const auth = useAuth()
    const navigate = useNavigate()

    const [email, setEmail]= useState('');
    const [pwd, setPwd]= useState('');
    const [errMsg, setErrMsg]= useState('');

    useEffect(()=>{
        userRef.current.focus()
    },[])

    useEffect(()=>{
        setErrMsg('')
    },[email,pwd])

    const handleSubmit = async (e)=>{
        e.preventDefault();
       
        try {
            if (!email || !pwd) {
              setErrMsg("Fill Out Your Credentials")
            }
            const { data } = await createAPIEndpoint(ENDPOINTS.LOGIN).auth(email, pwd);

           if(data){
            setEmail('')
            setPwd('')
            auth.login(data)
            navigate('/product', {replace:true})
           }
          } catch (error) {
            console.log('ERROR ', error);
            
          }
    }

    return(
        <>
            <LoginSection>
                <LoginP ref={errRef} className={errMsg?"errmsg":"offscreen"} aria-live="assertive">{errMsg}</LoginP>
                <h1>Sign In</h1>
                <LoginForm onSubmit={handleSubmit}> 
                    <LoginLabel htmlFor="email">Email</LoginLabel>
                        <LoginInput
                            type="email"
                            id="email"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e)=> setEmail(e.target.value)}
                            value={email}
                            required
                            />
                    <LoginLabel htmlFor="password">Password</LoginLabel>
                    <LoginInput
                            type="password"
                            id="password"
                            onChange={(e)=> setPwd(e.target.value)}
                            value={pwd}
                            required
                            />
                        <LoginButton>Sign In</LoginButton>
                </LoginForm>

            </LoginSection>
        </>
    )
}

export default Login