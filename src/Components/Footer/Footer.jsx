import React from 'react'
import './Footer.css'
import logo from '../../../public/assets/logo.png'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer>
        <div className="footer container">
            <img src={logo} alt="ARTY" />
            <div className="row align-items-center">
                <div className="col-6 col-md-4 mt-4 mx-auto">
                    <h6>حول المتجر</h6>
                    <ul>
                        <li><Link to="/About">معلومات عنا</Link></li>
                        <li><Link to="/Delivery">الشحن وطريقة الدفع</Link></li>
                    </ul>
                </div>
                <div className="col-6 col-md-4 mt-4 mx-auto">
                    <h6>تواصل معنا</h6>
                    <ul>
                        <li><Link to="/Contact">طرق التواصل</Link></li>
                        <li><Link to="/faq">الأسئلة الشائعة</Link></li>
                    </ul>
                </div>
                <div className="col-6 col-md-4 mt-4 mx-auto">
                    <h6>الشروط والسياسات</h6>
                    <ul>
                        <li><Link to="/terms-and-conditions">شروط الإستخدام</Link></li>
                        <li><Link to="/confidentiality">سياسة الخصوصية</Link></li>
                    </ul>
                </div>
            </div>
            <p className='m-0 copy'><span>كل الحقوق محفوظة ARTY <span>&copy;</span></span></p>
        </div>
    </footer>
  )
}

export default Footer
