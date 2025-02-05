import React from 'react'
import { Navigate } from 'react-router-dom'
import { useStore } from '../store/useStore'
import PostJob from "../post/PostJob"

const WantPostJob = () => {
    const item = useStore((state) => state.item)
    return item === "true" ? <PostJob /> : <Navigate to="/login" replace={true}/>
}

export default WantPostJob