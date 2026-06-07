import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Toast from './Toast';

function Order({ name, price, quantity, image, color, size, id, showNotification }) {

  const [qtt, setQtt] = useState(quantity);

  function updateCart(updatedCart) {
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    window.dispatchEvent(new Event("cart-updated"));
  }

  function isSameItem(item) {
    return (
      item.theId === id &&
      (item.theColor || '') === (color || '') &&
      (item.theSize || '') === (size || '')
    );
  }

  function removeItem() {
    const currentCart = JSON.parse(localStorage.getItem("cart")) || [];
    const updatedCart = currentCart.filter(item => !isSameItem(item));
    updateCart(updatedCart);
    // showNotification && showNotification("تمت إزالة المنتج من السلة");
  }

  function incItem() {
    const currentCart = JSON.parse(localStorage.getItem("cart")) || [];
    const updatedCart = currentCart.map(item => {
      if (isSameItem(item) && item.theQuantity < 20) {
        item.theQuantity += 1;
        setQtt(item.theQuantity);
        // showNotification && showNotification("تمت زيادة الكمية");
      }
      return item;
    });
    updateCart(updatedCart);
  }

  function decItem() {
    const currentCart = JSON.parse(localStorage.getItem("cart")) || [];
    const updatedCart = currentCart.map(item => {
      if (isSameItem(item) && item.theQuantity > 1) {
        item.theQuantity -= 1;
        setQtt(item.theQuantity);
        // showNotification && showNotification("تم تقليل الكمية");
      }
      return item;
    });
    updateCart(updatedCart);
  }

  return (
    <div className='order-item'>
      <div className='right'>
        <Link to={`/${id}`} className='image'>
          <img src={image} alt="" loading='lazy' />
        </Link>
        <div className='info'>
          <div>{name}</div>
          <div className='quantity'>
            <i className="uil uil-plus" title='زيادة الكمية' onClick={incItem}></i>
            <span>{qtt}</span>
            <i className="uil uil-minus" title='تقليل الكمية' onClick={decItem}></i>
          </div>
        </div>
      </div>
      <div className='left'>
        <span>{price} دج</span>
        <i className="uil uil-trash-alt" title='إزالة' onClick={removeItem}></i>
        <div className="choice">
          {size ? <button className="size-btn selected">{size}</button> : null}
          {color ? <button className='color-btn selected' style={{ backgroundColor: color }}></button> : null}
        </div>
      </div>
    </div>
  );
}

export default Order;
