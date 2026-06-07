import "./Card.css";
import React from 'react';
import { Link } from "react-router-dom";
import discount from '../../../public/discount.png'

function Card({ id, name,img, promo, price, showNotification, desc }) {
  
  return (
    <div>
      <Link to={`/${id}`} className="card">
        {promo && (
          <div className="discount">
            <img src={discount} alt="" />
            <p className="discount-num">%{Math.round(((promo - price) / promo) * 100)}</p>
          </div>
        )}

        <div>
          <img className="item" src={img[0]} alt="" loading="lazy"></img>
        </div>
        <div>
          <p className="name">{name}</p>
          <div className="pay mb-3">
            <h4>{price} دج</h4>
            {promo ? <h5 className="promo">{promo} دج</h5> : null}
          </div>
        </div>
        <div>
          <button className="btn">أطلب</button>
        </div>
      </Link>
    </div>
  );
}

export default Card;