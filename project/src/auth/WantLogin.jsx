import React from 'react'
import { Navigate } from 'react-router-dom';
import { useStore } from '../store/useStore'
import Login from '../login/Login';

const WantLogin = () => {
    const item = useStore((state) => state.item)
    return item === "true" ? <Navigate to="/" replace={true}/> : <Login />
}

export default WantLogin