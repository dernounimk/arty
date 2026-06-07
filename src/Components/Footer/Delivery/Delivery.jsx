import React from 'react'
import './Delivery.css'

function Delivery() {
  return (
    <div className='delivery-and-pay container'>
      <div className='delivery-and-pay-item'>
        <h2 className='mb-4'>الشحن وطريقة الدفع</h2>

        <h5 className='mb-3'>طريقة الشحن</h5>
        <p>
          بعد تأكيد طلبك، نقوم بشحن المنتج باستخدام أحد مسؤولي الشحن المعتمدين لدينا، ويتم التوصيل إلى العنوان المحدد خلال فترة تتراوح بين <strong>يوم إلى 3 أيام</strong> حسب المدينة.
        </p>
      </div>

      <div className='delivery-and-pay-item'>
        <h5 className='mb-3'>طريقة الدفع</h5>
        <p>
          نعتمد نظام <strong>الدفع عند الاستلام (Cash On Delivery)</strong>، حيث يمكنك إتمام الطلب عبر موقعنا، ثم تسديد المبلغ عند استلام المنتج في الموقع المتفق عليه (سواءً كان المنزل أو مكان آخر يتم تحديده مسبقًا).
        </p>
        <p>
          بهذه الطريقة، نتيح لك تجربة تسوّق آمنة وسلسة دون الحاجة إلى الدفع المسبق.
        </p>
      </div>
    </div>
  )
}

export default Delivery
