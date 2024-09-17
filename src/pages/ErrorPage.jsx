import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/ErrorPage.css'
const ErrorPage = ({error, errorReason, errorDetails}) => {
  return (
    <div className='center'>
        <h2>{error}</h2>
        <h1>{errorReason}</h1>
        <p>{errorDetails}</p>
        <Link className="button" to={"/"}>Go Back</Link>
    </div>
  )
}

export default ErrorPage