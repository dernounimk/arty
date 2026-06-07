import React from 'react'
import './About.css'
import size1Img from '../../../assets/size_1.png'
import size2Img from '../../../assets/size_2.png'

function About() {
  return (
    <div className='about container'>
        <div className="row">
        <div className="col-12 text-center">
            <h1>MK T-Shirts</h1>
            <h5 className='mb-3 mt-2'>هذا المتجر بوابتك الجديدة للتسوق إلكترونيا بشكل سهل وبسيط</h5>
            <p className='mb-4'>نوفر لك منتجات متععدة ذات جودة عالية لتختار منها الأفضل وبسعر تنافسي لن تجده في أي مكان آخر, التسوق معنا عملية ممتعة وآمنة, حيث نوفر لك كل ما تحتاجه من التسهيلات سواء في اختيار المنتج أو في عملية الدفع أو في عملية الشحن.</p>
        </div>
        <div className="col-12 col-lg-6 col-md-6">
            <img src={size1Img} alt="" />
        </div>
        <div className="col-12 col-lg-6 col-md-6">
            <img src={size2Img} alt="" />
        </div>
        </div>
    </div>
  )
}

export default About