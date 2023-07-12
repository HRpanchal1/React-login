// import React from 'react';
import React, { useState, useLayoutEffect, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Admin = () => {
    const navigate = useNavigate()

    useEffect(() => {
        let username = sessionStorage.getItem('username')
        let role = sessionStorage.getItem('role')
        if (username === "" || username === null || role != 1) {
            console.log("Called");
            navigate('/Loginpage2')
        }
    }, [])
    return ("test");
}

export default Admin;