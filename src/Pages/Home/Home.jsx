import React, { useContext, useState, useEffect } from 'react'
import "./Home.css"
import Products from '../../Products'
import notFound from "../Home/image/notfound.png"
import all from "../Home/image/all.png"
import anime from "../Home/image/anime.png"
import cartoon from "../Home/image/cartoon.png"
import design from "../Home/image/design.png"
import write from "../Home/image/write.png"
import Card from '../../Components/Card/Card'
import { dataContext } from '../../Context/UserContex'
import Order from '../../Components/Card/Order'
import Toast from '../../Components/Card/Toast'
import { Link } from 'react-router-dom'

function Home() {
  const Categories = [
    { id: 1, type: "all", name: "الكل", img: all },
    { id: 2, type: "anime", name: "أنمي", img: anime },
    { id: 3, type: "cartoon", name: "كرتون", img: cartoon },
    { id: 4, type: "design", name: "تصميم", img: design },
    { id: 5, type: "write", name: "كتابة", img: write },
  ];

  const [toastMsg, setToastMsg] = useState('');
  const [showToast, setShowToast] = useState(false);

  function showNotification(msg) {
    setToastMsg(msg);
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 2600);
  }

  let { cate, setCate, input, setInput, active, setActive, show, setShow } = useContext(dataContext);

  const [cartItem, setCartItem] = useState([]);

  let [showDetail, setShowDetail] = useState(true);

  function handledetail(e) {
    setShowDetail(e.target.checked);
  }

  useEffect(() => {
    const cartContent = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItem(cartContent);
  }, []);

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

  function handleCate(type) {
    if (type !== "all") {
      let filtered = Products.filter((item) => item.type.toLocaleLowerCase() === type.toLocaleLowerCase());
      setActive(type);
      setCate(filtered);
    } else {
      setCate(Products);
      setActive("all");
    }
  }

  return (
    <div className='home'>
      <Toast message={toastMsg} show={showToast} />
      <div className="container">
        <div className='category'>
          {!input && Categories.map((category) => (
            <div key={category.id}
              className={`category-item ${category.type} ${active === category.type ? "active" : ""}`}
              onClick={() => handleCate(category.type)
              }>
              <img src={category.img} alt="" />
              <h5>{category.name}</h5>
            </div>
          ))}
        </div>

        <div className="store">
          {cate.length > 0 ? cate.map((product) => (
            <Card
              className="card"
              key={product.id}
              id={product.id}
              img={product.img}
              name={product.name}
              promo={product.promo}
              price={product.price}
              type={product.type}
              desc={product.desc}
              category={product.category}
              showNotification={showNotification}
            />
          )) : <div className='search-notfound'>
            <p>لم يتم العثور على نتائج</p>
            <img src={notFound} alt="" />
          </div>}
        </div>

        <div className={`oreder ${show ? "" : "not-show"}`}>
          <header>
            <h5>سلة الطلبيات</h5>
            <i className="uil uil-multiply" onClick={() => setShow(false)}></i>
          </header>
          <div>
            {cartItem.map((item, index) => (
              <Order
                key={index}
                id={item.theId}
                name={item.theName}
                price={item.thePrice}
                image={item.theImg}
                quantity={item.theQuantity}
                color={item.theColor}
                size={item.theSize}
                showNotification={showNotification}
              />
            ))}
          </div>
          <hr />
          <div className='confirm'>
            <div className="icon">
              <span>عرض التفاصيل</span>
              <label>
                <input className="toggle-checkbox" type="checkbox" defaultChecked onClick={(e) => handledetail(e)} />
                <div className="toggle-switch"></div>
              </label>
            </div>
            {showDetail && cartItem.map((item, i) => (
              <div className='detail' key={i}>
                <p>{item.theName} <i className="uil uil-multiply"></i> {item.theQuantity}</p>
                <p className='price'>{parseInt(item.thePrice * item.theQuantity)} دج</p>
              </div>
            ))}
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
              to={cartItem.length > 0 ? '/Confirm' : ''}
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
    </div>
  )
}

export default Home;
