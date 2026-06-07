import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Order from '../../Components/Card/Order';
import { dataContext } from '../../Context/UserContex';
import Toast from '../../Components/Card/Toast';

function About() {

        const [toastMsg, setToastMsg] = useState('');
        const [showToast, setShowToast] = useState(false);

        function showNotification(msg) {
            setToastMsg(msg);
            setShowToast(true);
            setTimeout(() => {
              setShowToast(false);
            }, 2600);
          }

        let {show, setShow } = useContext(dataContext);
        const [cartItem, setCartItem] = useState([]);
        let [showDetail, setShowDetail] = useState(true);
        
          function handledetail(e) {
            if (e.target.checked) {
              setShowDetail(true);
            } else {
              setShowDetail(false);
            }
          }
          
          // تحميل السلة أول مرة
          useEffect(() => {
            const cartContent = JSON.parse(localStorage.getItem("cart")) || [];
            setCartItem(cartContent);
          }, []);
        
          // التفاعل مع حدث "cart-updated"
          useEffect(() => {
            const handleCartUpdate = () => {
              const updatedCart = JSON.parse(localStorage.getItem("cart")) || [];
              setCartItem(updatedCart);
            };
        
            window.addEventListener("cart-updated", handleCartUpdate);
        
            return () => {
              window.removeEventListener("cart-updated", handleCartUpdate);
            };
          }, []);
    
  return (
    <div>
      <div className="about container">
        <div className='about-item'>
          <h1>مرحبًا بك في <span className="arty">ARTY</span></h1>
          <p>بوابتك الجديدة للتسوق الإلكتروني بشكل سهل وبسيط</p>
        </div>

        <div className='about-item'>
          <h2>من نحن؟</h2>
          <p>
            نحن أكثر من مجرد متجر نحن مساحة تعبير فني وذوق شخصي. في ARTY، نوفر لك منتجات متعددة
            ذات جودة عالية لتختار منها الأفضل وبسعر تنافسي لن تجده في أي مكان آخر.
          </p>
        </div>
        <div className='about-item'>
          <h2>لماذا ARTY؟</h2>
          <div>
            <p>تصاميم عصرية مستوحاة من الأنمي، الكرتون، التصميمات الجرافيكية، والعبارات المميزة.</p>
            <p>خيارات متعددة من المقاسات والألوان.</p>
            <p>سهولة في التصفح، الدفع، والتوصيل لجميع الولايات.</p>
            <p>فريق ملتزم بجعل كل تجربة شراء ممتعة وآمنة.</p>
          </div>
        </div>
        <div className='about-item'>
          <h2>رسالتنا</h2>
          <p>
            تقديم تجربة تسوق إلكتروني تجمع بين البساطة، الذوق، والجودة. كل قطعة في ARTY صمّمت لتكون انعكاسًا لأسلوبك الشخصي.
          </p>
        </div>
    </div>
        <Toast message={toastMsg} show={showToast}/>
        <div className={`oreder ${show ? "" : "not-show"}`}>
        <header>
            <h5>سلة الطلبيات</h5>
            <i className="uil uil-multiply" onClick={() => setShow(false)}></i>
        </header>
        <div>
        {cartItem.map((item) => (
            <Order
            key={item.theId}
            id={item.theId}
            name={item.theName}
            price={item.thePrice}
            image={item.theImg}
            quantity={item.theQuantity}
            color={item.theColor}
            size={item.theSize}
            />
        ))}
        </div>
        <hr />
        <div className='confirm'>
            <div className="icon">
            <span>عرض التفاصيل</span>
            <label>
                <input className="toggle-checkbox" type="checkbox" defaultChecked onClick={(e)=>handledetail(e)}  />
                <div className="toggle-switch"></div>
            </label>
            </div>
        {
            showDetail ? cartItem.map((item,i)=>(
            <div className='detail' key={i}>
                <p>{item.theName} <i className="uil uil-multiply"></i> {item.theQuantity}</p>
                <p className='price'>{parseInt(item.thePrice * item.theQuantity)} دج</p>
            </div>
            )) : <div></div>
        }
        </div>
        <hr />
        <div>
            <div className="detail total">
            <h5>السعر الإجمالي</h5>
            <p className='price'>
                {
                cartItem.reduce((total, item) => total + item.thePrice * item.theQuantity, 0) + " دج"
                }
            </p>
            </div>
            <Link 
            style={{ cursor: cartItem.length > 0 ? 'pointer' : 'not-allowed'}}
            to={cartItem.length > 0 ? '/Confirm': ''} 
            className='talab' 
            onClick={() => {
                if (cartItem.length === 0) {
                showNotification("السلة فارغة");
                }
            }}
            >
            تأكيد الطلب
            </Link>
        </div>
        </div>
    </div>
  )
}

export default About