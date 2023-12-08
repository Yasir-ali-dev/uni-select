import { HowToRegOutlined, LoginOutlined } from '@mui/icons-material';
import { Alert, Box, Button, TextField, Typography } from '@mui/material'
import React, { useEffect, useState ,} from 'react';
import axios from "axios";
import {useNavigate} from  "react-router-dom"



const Auth = () => {
    const [isSignUp,setIsSignUp]=useState(false);
    const [inputs,setInputs]=useState({
        name:"",
        password:"",
        email:""
    });
    const [isCreated,setIsCreated]=useState({message: "" , status: false });
    const navigate = useNavigate();

    const handleChange=(e)=>{
        const {name,value}=e.target;
        setInputs((prevState)=>{
            return {
                ...prevState,
                [name]:value
            }
        })
    }
    const  handleSubmit=(e)=>{
        e.preventDefault();
        if(inputs.name && inputs.email && inputs.password){
            axios.post("http://localhost:4000/auth/signup",inputs).then((res)=>{
                console.log(res);
                setIsCreated((prev=>{
                    return {
                        ...prev,
                        message:`${inputs.name} is created successfully`,
                        status: true, 
                    }
                }));
            }).catch(err=>{
                console.log(err);
            })
        }else if (inputs.email && inputs.password){
            axios.post("http://localhost:4000/auth/login",
                {email: inputs.email,password: inputs.password})
                .then((res)=>{
                    console.log(res);
                    setIsCreated(prev =>{
                        return {
                            ...prev,
                            status:res.data.success,
                            message : `${inputs.email} is logged in succefully`
                        }
                    });
                    setTimeout(()=>{
                        navigate("/")
                    },1000)
                })
                .catch(err=>{
                    console.log(err);
                })
        }
        else{
            setIsCreated(prev =>{
                return {
                    ...prev,
                    status:true,
                    message : `Please Provide Credientials`
                }

            });
        }
        
    }
    useEffect(()=>{
        setTimeout(()=>{
           setIsCreated((prev)=>{
            return {
                status:false
            }
           }); 
        },5000)
    },[isCreated]);

    const handleReset=()=>{
        setIsSignUp(!isSignUp)
        setInputs({
            name:"",
            password:"",
            email:""
        });
    }

    return (
    <>
    {
        isCreated.status &&
        <Alert style={{textAlign:"center"}}>
                {isCreated.message}  
        </Alert>
    }
      <form onSubmit={handleSubmit}>
        <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            margin={"auto"}
            padding={3}
            maxWidth={400}
            marginTop={5}
            boxShadow={"7px 7px 13px #ccc "}
            sx={{
                ":hover":{
                    boxShadow:"15px 15px 27px grey "
                }
            }}
        >
            <Typography variant='h3' textAlign={"center"} padding={2} >
                {isSignUp ? "SIGN UP" : "LOG IN"}
            </Typography>   
            { isSignUp &&  

                <TextField 
                    name='name'
                    placeholder='Name'
                    variant='outlined'
                    type='text'
                    margin='dense'
                    value={inputs.name}
                    onChange={handleChange}
                />
            }
            <TextField 
                name='email'
                placeholder='Email'
                variant='outlined'
                type='email'
                margin='dense'
                value={inputs.email}
                onChange={handleChange}

            />
            <TextField 
                name='password'
                placeholder='Password'
                variant='outlined'
                type='password'
                margin='dense'
                value={inputs.password}
                onChange={handleChange}
            />
            <Button
                endIcon={isSignUp ? <HowToRegOutlined/> : <LoginOutlined/> }
                variant='contained'
                color='warning'
                sx={{marginTop:2,padding: "0.6rem 2rem",
                    fontWeight: "800",
                    fontFamily: "cursive"
                }}
                type='submit'
            >{isSignUp ? "SIGN UP" : "LOG IN"}</Button>
            <Button
                endIcon={isSignUp ? <LoginOutlined/>:<HowToRegOutlined/> }
                sx={{marginTop:2}} 
                onClick={handleReset}
            >CHANGING TO {isSignUp ? "LOG IN" : "SIGN UP"}</Button>
        </Box>
      </form>
    </>
  )
}

export default Auth
