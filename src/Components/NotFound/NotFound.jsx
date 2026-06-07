import React from 'react'
import './NotFound.css'
import notFImg from '../../../public/assets/404.png'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className='not-found'>
        <h1>لم يتم العثور على الصفحة</h1>
        <img src={notFImg} alt="" />
        <Link to='/' className='back'><span>العودة إلى المتجر</span> <i className="uil uil-arrow-left"></i></Link>
    </div>
  )
}

export default NotFound