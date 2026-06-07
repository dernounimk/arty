import { useParams, Link } from 'react-router-dom';
import React, { useContext, useEffect, useState } from 'react';
import products from '../../Products';
import Toast from '../../Components/Card/Toast';
import { dataContext } from '../../Context/UserContex';
import Order from '../../Components/Card/Order';
import NotFound from '../../Components/NotFound/NotFound';
import ProductSlider from '../../Components/Slider/ProductSlider';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';
import "./SingleProduct.css";
import Card from "../../Components/Card/Card.jsx"
import discount from '../../../public/discount.png'


function SingleProduct() {
  const { id } = useParams();
  const result = products.find(x => x.id == id);
  if (!result) return <NotFound />;

  const { show, setShow } = useContext(dataContext);
  const [toastMsg, setToastMsg] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [qtt, setQtt] = useState(1);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [cartItem, setCartItem] = useState([]);
  const [showDetail, setShowDetail] = useState(true);

  const relatedProducts = React.useMemo(() => {
    return products
      .filter(product =>
        product.type === result.type &&
        product.category === result.category &&
        product.id !== result.id
      )
      .sort(() => 0.5 - Math.random())
      .slice(0, 3);
  }, [result.type, result.category, result.id]);



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
    return () => window.removeEventListener("cart-updated", handleCartUpdate);
  }, []);

  function showNotification(msg) {
    setToastMsg(msg);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  }

  function incItem() {
    if (qtt < 20) setQtt(prev => prev + 1);
  }

  function decItem() {
    if (qtt > 1) setQtt(prev => prev - 1);
  }

  function handleAddToCart() {
    if (result.sizes && !selectedSize) {
      showNotification("يرجى اختيار المقاس قبل الإضافة إلى السلة");
      return;
    }
    if (result.colors && !selectedColor) {
      showNotification("يرجى اختيار اللون قبل الإضافة إلى السلة");
      return;
    }

    const added = {
      theId: id,
      theName: result.name,
      theImg: result.img[0],
      thePrice: result.price,
      theQuantity: qtt,
      theSize: selectedSize,
      theColor: selectedColor
    };

    const existCard = JSON.parse(localStorage.getItem("cart")) || [];
    const existProduct = existCard.find(
      item => item.theId === id &&
              item.theSize === selectedSize &&
              item.theColor === selectedColor
    );

    if (!existProduct) {
      existCard.push(added);
      showNotification(`تم إضافة ${result.name} إلى السلة`);
      setShow(true);
    } else {
      showNotification(`موجود بالفعل في السلة`);
    }

    localStorage.setItem("cart", JSON.stringify(existCard));
    window.dispatchEvent(new CustomEvent("cart-updated"));
  }

  function handledetail(e) {
    setShowDetail(e.target.checked);
  }
  
  return (
    <div className='container'>
      <div className={`oreder ${show ? "" : "not-show"}`}>
        <header>
          <h5>سلة الطلبيات</h5>
          <i className="uil uil-multiply" onClick={() => setShow(false)}></i>
        </header>
        <div>
          {cartItem.map((item,i) => (
            <Order
            key={i}
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
              <input
                className="toggle-checkbox"
                type="checkbox"
                defaultChecked
                onClick={handledetail}
              />
              <div className="toggle-switch"></div>
            </label>
          </div>
          {showDetail && cartItem.map((item, i) => (
            <div className='detail' key={i}>
              <p>{item.theName} <i className="uil uil-multiply"></i> {item.theQuantity}</p>
              <p className='price'>{item.thePrice * item.theQuantity} دج</p>
            </div>
          ))}
        </div>
        <hr />
        <div>
          <div className="detail total">
            <h5>السعر الإجمالي</h5>
            <p className='price'>
              {cartItem.reduce((total, item) => total + item.thePrice * item.theQuantity, 0)} دج
            </p>
          </div>
          <Link
            className='talab'
            to={cartItem.length > 0 ? '/Confirm' : ''}
            onClick={() => {
              if (cartItem.length === 0) showNotification("السلة فارغة");
            }}
            style={{ cursor: cartItem.length > 0 ? 'pointer' : 'not-allowed' }}
          >
            تأكيد الطلب
          </Link>
        </div>
      </div>

      <div className="place-order-modal">
        <Toast message={toastMsg} show={showToast} />
        <div className="place-order-content">
          <ProductSlider images={result.img} />

          <div className="info">
            <h2>{result.name}</h2>
            <p className="desc">{result.desc}</p>
            <div className="money">
              <div className="price">
                <h4>{result.price} دج</h4>
                <h4 className="promo">{result.promo ? `${result.promo} دج` : ""}</h4>
              </div>
              {result.promo && (
                <div className="discount">
                  <img src={discount} alt="" />
                  <p className="discount-num">%{Math.round(((result.promo - result.price) / result.promo) * 100)}</p>
                </div>
            )}
            </div>

            {result.sizes && (
              <div>
                <h5>Size</h5>
                <div className="size mb-3">
                  {result.sizes.map(size => (
                    <button
                      key={size}
                      className={`size-btn ${selectedSize === size ? "selected" : ""}`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {result.colors && (
              <div>
                <h5>Color</h5>
                <div className="color">
                  {result.colors.map(color => (
                    <button
                      key={color}
                      className={`color-btn ${selectedColor === color ? "selected" : ""}`}
                      style={{ backgroundColor: color.toLowerCase() }}
                      onClick={() => setSelectedColor(color)}
                    />
                  ))}
                </div>
              </div>
            )}

            <div className='quantity'>
              <i className="uil uil-plus" title='زيادة الكمية' onClick={incItem}></i>
              <span>{qtt}</span>
              <i className="uil uil-minus" title='تقليل الكمية' onClick={decItem}></i>
            </div>

            <div className="last-line">
              <button className="btn added" onClick={handleAddToCart}>إضافة إلى السلة</button>
              <div className="total">
                <h4>Total</h4>
                <h5><span>{result.price * qtt} دج</span></h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      {relatedProducts.length > 2 && (
  <div className="related-products mt-5">
    <h4 className="text-center mb-4">منتجات مقترحة</h4>
    <Swiper
  modules={[Navigation, Autoplay]}
  navigation
  autoplay={{ delay: 2500 }}
  loop={true}
  spaceBetween={20}
  breakpoints={{
    320: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 }
  }}
  className="related-swiper"
>
  {relatedProducts.map((product, i) => (
    <SwiperSlide key={i}>
      <Card
        name={product.name}
        img={product.img}
        price={product.price}
        promo={product.promo}
        id={product.id}
      />
    </SwiperSlide>
  ))}
</Swiper>

  </div>
)}

    </div>
  );
}

export default SingleProduct;
