import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./custom.css"
import {
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBBtn,
    MDBIcon,
    MDBInput,
    MDBCheckbox
}
    from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
import HeaderCompo from './commonCompo/header';

function Loginpage() {
    // useEffect(()=>{
    //     sessionStorage.clear()
    //  },[])
    const navigate = useNavigate();
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const Prosedlogin = (e) => {
        e.preventDefault()
        if (validate()) {
            console.log("prosed");
            fetch("http://localhost:5000/user?username=" + username).then((res) => {
                return res.json();
                // console.log(res);
            }).then((resp) => {
                console.log(resp[0]);
                if (resp[0].role == 1) {
                    navigate("/admin")
                } else {
                    navigate("/")
                }
            }).catch((err) => {
                console.log("login fail" + err);
            });
        }
    }


    const validate = () => {
        let result = true
        if (username === "") {
            result = false
            alert("enter a usernamee")
        }
        if (password === "") {
            result = false
            alert("enter a pasword")
        }
        return result
    }
    return (
        <>
            <HeaderCompo />
            <MDBContainer fluid className="p-3 my-5">

                <MDBRow>

                    <MDBCol col='10' md='6'>
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" class="img-fluid" alt="Phone image" />
                    </MDBCol>

                    <MDBCol col='4' md='6'>

                        <form onSubmit={Prosedlogin}>
                            <MDBInput wrapperClass='mb-4' label='Username'
                                value={username}
                                onChange={e => setUsername(e.target.value)}
                                id='formControlLg' type='text' size="lg" />
                            <MDBInput wrapperClass='mb-4' label='Password'
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                id='formControlLg' type='password' size="lg" />


                            <div className="d-flex justify-content-between mx-4 mb-4">
                                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
                                <a href="!#">Forgot password?</a>
                            </div>
                           

                            <MDBBtn className="mb-4 w-100" size="lg">Sign in</MDBBtn>
                        </form>
                        <MDBBtn className="mb-4 w-100 " size="lg">
                                <Link to="/Register" className='color'>NEW-USER</Link>
                            </MDBBtn>

                    </MDBCol>

                </MDBRow>

            </MDBContainer>
        </>
    );
}

export default Loginpage;