import React, { useState,useEffect } from 'react'
import '../Shop/Shop.css';
import { Link } from 'react-router-dom';
import products from '../../products.json'

function Shop() {
  
  const [prod,setProd] = useState(products);
  const [prodType,setProdType] = useState(products);

  const [empty,setEmpty] = useState(false);

  const [active,setActive] = useState("all");
  const [activeType,setActiveType] = useState("all");

  function itemsFilterType(event) {
    if (event === "all") {
      setActiveType("all");
      setProdType(products);
    } else {
      setProdType(products.filter((current)=> event === current.type));
      setActiveType(event);
    }
  }

  useEffect(() => {
    if (active === "all") {
      setProd(prodType);
    } else {
      setProd(prodType.filter((current) => active === current.category));
    }
  }, [prodType, active]);

  useEffect(() => {
    if (prod.length === 0) {
      setEmpty(true);
    } else {
      setEmpty(false);
    }
  }, [prod]);

  function itemsFilter(event) {
    setActive(event); // Only update active; prod will be updated via useEffect
  }

  const [searchValue,setSearchValue] = useState("");
  const filterdProduct = prod.filter((item)=> item.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));
  
  return (
    <div>
      <div className="shop-page">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-4">
              <div className="widget widget-search">
                <div className='search-wrapper mb-3'>
                  <input type="text" name='search' id='search' placeholder='إبحث عن منتج (بالإنجليزية) ' onChange={(e)=> setSearchValue(e.target.value)}/>
                </div>
                <div>
                  {
                    searchValue && filterdProduct.map((find,i) => (
                      <Link key={i} to={`/shop/${find.id}`}>
                        <div className="search-product d-flex gap-3 p-4">
                          <div className='pro-thumb h-25'>
                            <img src={find.img} alt="" width={80} className='flex-{grow-shrink}-0'/>
                          </div>
                          <div className="product-content">
                            <Link to={`/shop/${find.id}`}>
                              <p className={`search-info`}>{find.name}</p>
                              <h4 className={`search-info`}>{find.price} DA</h4>
                            </Link>
                          </div>
                        </div>
                      </Link>
                    ))
                  }
                </div>
              </div>
              <div className='width-header'>
                <div className='filter'>
                  <h4>النوع</h4>
                  <ul className="lab-ul">
                    <button className= {`m-2 p-2 ${activeType === "all" ? "bg-warning" : "" }`} onClick={()=>{itemsFilterType("all")}}>الكل</button>
                    <button className= {`m-2 p-2 ${activeType === "tshirt" ? "bg-warning" : ""}`} onClick={()=>itemsFilterType("tshirt")}>T-Shirt</button>
                    <button className= {`m-2 p-2 ${activeType === "baggy" ? "bg-warning" : "" }`} onClick={()=>itemsFilterType("baggy")}>Baggy Jogger</button>
                    <button className= {`m-2 p-2 ${activeType === "polo" ? "bg-warning" : ""}`} onClick={()=>itemsFilterType("polo")}>Polo</button>
                  </ul>
                </div>
                <div className='filter'>
                  <h4>التصنيف</h4>
                  <ul className="lab-ul">
                      <button className= {`m-2 p-2 ${active === "all" ? "bg-warning" : "" }`} onClick={()=>{itemsFilter("all")}}>الكل</button>
                      <button className= {`m-2 p-2 ${active === "anime" ? "bg-warning" : ""}`} onClick={()=>itemsFilter("anime")}>أنمي</button>
                      <button className= {`m-2 p-2 ${active === "cartoon" ? "bg-warning" : "" }`} onClick={()=>itemsFilter("cartoon")}>كرتون</button>
                      <button className= {`m-2 p-2 ${active === "write" ? "bg-warning" : ""}`} onClick={()=>itemsFilter("write")}>كتابة</button>
                      <button className= {`m-2 p-2 ${active === "brand" ? "bg-warning" : ""}`} onClick={()=>itemsFilter("brand")}>ماركات</button>
                      <button className= {`m-2 p-2 ${active === "design" ? "bg-warning" : ""}`} onClick={()=>itemsFilter("design")}>تصميم</button>
                    </ul>
                </div>
              </div>
            </div>
            {
              empty ? <div className='empty text-center mt-5'>
                <h3>لا يتوفر هذا المنتج ضمن هذا التصنيف حاليًا</h3>
              </div> :
              <div className="col-12 col-lg-8">
              <div className="mb-2 mt-2 text-center">
                  <b>هذه هي منتجاتنا</b>
              </div>
              <div className="row justify-content-center">
                {prod.map((product,i)=>(
                  <div key={i} className='col-lg-4 col-6'>
                      <Link to={`/shop/${product.id}`} className="product-item">
                        <div className="product-thumb" title='انقر للمزيد من التفاصيل'>
                            <div className="pro-thumb">
                                <img src={product.img} loading='lazy' alt="" />
                            </div>
                            <div className={`product-content`}>
                                <h5>{product.name}</h5>
                                {
                                  product.type === "tshirt" ? 
                                  <div className='mt-3 text-center'>
                                    <h6 className='mt-2'>Regular <span>{product.price} DA</span></h6>
                                    <h6 className='mt-2'>OverSize <span>{product.price + 350} DA</span></h6>
                                  </div>
                                  :
                                  <h6 className='mt-3'>{product.price} DA</h6>
                                }
                            </div>
                        </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shop