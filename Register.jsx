import React, { useState } from 'react';
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBCheckbox
}
    from 'mdb-react-ui-kit';
import { MDBRadio } from 'mdb-react-ui-kit';
import HeaderCompo from './commonCompo/header';
import { useNavigate } from 'react-router-dom';



function Register() {

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [gender, setGender] = useState('Male');

    const navigate = useNavigate()

    const validate = () => {
        let result = true

        if (username === "") {
            result = false
            alert("enter username")
        }
        if (email === "") {
            result = false
            alert("enter email")
        }
        if (password === "") {
            result = false
            alert("enter password")
        }

        return result

    };
    const hendllesubmit = (e) => {
        e.preventDefault();
        // console.log(username ,password, email);
        let data = { username, password, email,gender,  role: 2 }
        console.log(data);
        if (validate()) {
            fetch("http://localhost:5000/user", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data)
            }).then((res) => {
                console.log("done");
                navigate('/LoginuserPage');
            }).catch((err) => {
                console.log("error");
            })
        }
    }
    return (
        <>
            <HeaderCompo />
            <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' style={{ backgroundImage: 'url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)' }}>
                <div className='mask gradient-custom-3'></div>
                <MDBCard className='m-5' style={{ maxWidth: '600px' }}>
                    <MDBCardBody className='px-5'>
                        <h2 className="text-uppercase text-center mb-5">Create an account</h2>
                        <form onSubmit={hendllesubmit}>
                            <MDBInput wrapperClass='mb-4' value={username} onChange={(e) => setUsername(e.target.value)} label='Your Name' size='lg' id='form1' type='text' />
                            <MDBInput wrapperClass='mb-4' value={email} onChange={(e) => setEmail(e.target.value)} label='Your Email' size='lg' id='form2' type='email' />
                            <MDBInput wrapperClass='mb-4' value={password} label='Password' onChange={(e) => setPassword(e.target.value)} size='lg' id='form3' type='password' />
                            {/* <MDBInput wrapperClass='mb-4' label='Repeat your password' size='lg' id='form4' type='password' /> */}
                            {/* <div className='d-flex flex-row justify-content-center mb-4'>
                            <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I agree all statements in Terms of service' />
                        </div> */}
                            <div>
                                <MDBRadio name='flexRadioDefault'
                                checked={gender === 'Male'} value="Male" onClick={() => setGender('Male')}
                                id='flexRadioDefault1' label='male' />
                                <MDBRadio name='flexRadioDefault'
                                 checked={gender === 'Female'} value="Female" onClick={() => setGender('Female')}
                                id='flexRadioDefault2' label="female" defaultChecked />
                                <MDBRadio name='flexRadioDefault'
                                 checked={gender === 'other'} value="other" onClick={() => setGender('othher')}
                                id='flexRadioDefault2' label="other" defaultChecked />
                            </div>
                            <MDBBtn className='mb-4 w-100 gradient-custom-4' size='lg'>Register</MDBBtn>
                        </form>
                    </MDBCardBody>
                </MDBCard>
            </MDBContainer>
        </>
    );
}

export default Register;