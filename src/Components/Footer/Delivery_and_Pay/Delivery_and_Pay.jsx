import React from 'react'
import './Delivery_and_Pay.css'
import delivery from '../../../assets/delivery.png'

function Delivery_and_Pay() {
  return (
    <div className='delivery-and-pay container'>
        <div className="delivery-and-pay-item">
            <h2 className='mb-4'>الشحن وطريقة الدفع</h2>
            <h5 className='mb-3'>طريقة الشحن:</h5>
            <p>بعد تأكيد عملية الشراء، نقوم بشحن وإرسال المنتج عبر مسؤول الشحن الخاص بنا الذي يوصلها إلى العنوان الذي تم تحديده في مدة تتراوح بين يوم و3 أيام.</p>
        </div>
        <div className="delivery-and-pay-item">
            <h5 className='mb-3'>طريقة الدفع:</h5>
            <p>
الدفع عند الاستلام (Cash On Delivery) هي طريقة الدفع المتاحة على متجرنا، والدفع عند الاستلام يعني أن المتسوق يمكنه التسوق عبر متجرنا الإلكتروني وإختيار المنتج الذي يريده ومن ثم يقوم بإجراء الطلب وعملية الدفع تؤجل حتى إستلام العميل للمنتج الذي قام بطلبه إلكترونيًا.

وسنقوم بإرسال المنتج إلى المكان المتفق عليه (المدينة أو الحي أو المنزل أو مكان اخر)، وبعدها يتم الدفع.
</p>
        </div>
        <div className='image'>
            <img src={delivery} alt="" />
            <h2 className='mt-5'>التوصيل متوفر  في 58 ولاية</h2>
        </div>
    </div>
  )
}

export default Delivery_and_Pay