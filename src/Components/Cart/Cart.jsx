import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import deleteImg from '../../assets/del.png'
import './Cart.css'
import size1Img from '../../assets/size_1.png';
import size2Img from '../../assets/size_2.png';

function Cart() {

  const [result, setResult] = useState("");

  const [cartItem,setCartItem] = useState([]);

  const [homePrice, setHomePrice] = useState(1350);
  const [officePrice, setOfficePrice] = useState(900);
  const [place,setPlace] = useState("office");

  const [homeTotal, setHomeTotal] = useState(1350);
  const [officeTotal, setOfficeTotal] = useState(900);

  useEffect(()=>{
    const cartContent = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItem(cartContent);
  },[])
  
  const order = cartItem.map(item => `[Name : ${item.name} - Type: ${item.theType} - Category: ${item.theCategory} - Price: ${item.price} - size: ${item.theSize} - color: ${item.theColor} - quantity: ${item.theQuantity} - id: ${item.id} ] \n`).join(", ");

  function totalPrice(item) {
    return item.price * item.theQuantity;
  }

  function incItem(item) {
    if (item.theQuantity < 20) {
      item.theQuantity += 1;
      setCartItem([...cartItem])
      localStorage.setItem("cart",JSON.stringify(cartItem));
    }
  }

  function decItem(item) {
    if (item.theQuantity > 1) {
      item.theQuantity -= 1;
      setCartItem([...cartItem])
      localStorage.setItem("cart",JSON.stringify(cartItem));
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    if(cartItem.length === 0) {
        setResult("السلة فارغة من فضلك قم بإضافة منتجات");
    } else {
    if(event.target.Name.value === "" || event.target.Phone.value === "" || event.target.Baladia.value === "") {
        setResult("من فضلك قم بإدخال جميع معلوماتك");
    } else {
        if(event.target.Name.value.length < 4) {
            setResult("من فضلك أدخل إسم و لقب صحيح");
        } else {
            if(event.target.Phone.value.length !== 10 || isNaN(Number(event.target.Phone.value))) {
                setResult("من فضلك أدخل رقم هاتف صالح");
            } else {
                if(event.target.Baladia.value.length < 2) {
                    setResult("من فضلك أدخل إسم بلدية أو ولاية صحيح");
                } else {
                        setResult("جاري الطلب...");
                        const formData = new FormData(event.target);
                    
                        formData.append("access_key", import.meta.env.VITE_KEY);
                        const response = await fetch("https://api.web3forms.com/submit", {
                        method: "POST",
                        body: formData
                        });
                    
                        const data = await response.json();
                    
                        if (data.success) {
                        setResult("تمت عملية الطلب بنجاح");
                        event.target.reset();
                        } else {
                        setResult("فشلت عملية الطلب يمكنك المحاولة مرة أخرى أو قم بالتواصل معنا");
                        }
                      }
                  }    
              }
          }
        }
      };
      
function handlePrice(event) {
  if (event.target.value === "Adrar") {
      setHomePrice(1350);
      setOfficePrice(900);
  } else {
      if (event.target.value === "Chlef") {
          setHomePrice(700);
          setOfficePrice(400)
      } else {
          if (event.target.value === "Laghouat") {
              setHomePrice(850);
              setOfficePrice(550);
          } else {
              if (event.target.value === "Oum_El_Bouaghi") {
                  setHomePrice(700);
                  setOfficePrice(400)
              } else {
                  if (event.target.value === "Batna") {
                      setHomePrice(700);
                      setOfficePrice(400);
                  } else {
                      if (event.target.value === "Bejaia") {
                          setHomePrice(700);
                          setOfficePrice(400);
                      } else {
                          if (event.target.value === "Biskra") {
                              setHomePrice(850);
                              setOfficePrice(550);
                          } else {
                              if (event.target.value === "Bechar") {
                                  setHomePrice(1350);
                                  setOfficePrice(900);
                              } else {
                                  if (event.target.value === "Blida") {
                                      setHomePrice(600);
                                      setOfficePrice(400);
                                  } else {
                                      if (event.target.value === "Bouira") {
                                          setHomePrice(700);
                                          setOfficePrice(400);
                                      } else {
                                          if (event.target.value === "Tamanrasset") {
                                              setHomePrice(1550);
                                              setOfficePrice(1300);
                                          } else {
                                              if (event.target.value === "Tebessa") {
                                                  setHomePrice(850);
                                                  setOfficePrice(550);
                                              } else {
                                                  if (event.target.value === "Tlemcen") {
                                                      setHomePrice(700);
                                                      setOfficePrice(400);
                                                  } else {
                                                      if (event.target.value === "Tiaret") {
                                                          setHomePrice(700);
                                                          setOfficePrice(400);
                                                      } else {
                                                          if (event.target.value === "Tizi_Ouzou") {
                                                              setHomePrice(700);
                                                              setOfficePrice(400);
                                                          }  else {
                                                              if (event.target.value === "Algiers") {
                                                                  setHomePrice(400);
                                                                  setOfficePrice(400);
                                                              } else {
                                                                  if (event.target.value === "Djelfa") {
                                                                  setHomePrice(850);
                                                                  setOfficePrice(550);
                                                                  } else {
                                                                      if (event.target.value === "Jijel") {
                                                                          setHomePrice(700);
                                                                          setOfficePrice(400);
                                                                      } else {
                                                                          if (event.target.value === "Setif") {
                                                                              setHomePrice(700);
                                                                              setOfficePrice(400);
                                                                          } else {
                                                                              if (event.target.value === "Saida") {
                                                                                  setHomePrice(700);
                                                                                  setOfficePrice(400);
                                                                              } else {
                                                                                  if (event.target.value === "Skikda") {
                                                                                      setHomePrice(700);
                                                                                      setOfficePrice(400);
                                                                                  } else {
                                                                                      if (event.target.value === "Sidi_Bel_Abbes") {
                                                                                          setHomePrice(700);
                                                                                          setOfficePrice(400);
                                                                                      } else {
                                                                                          if (event.target.value === "Annaba") {
                                                                                              setHomePrice(700);
                                                                                              setOfficePrice(400);
                                                                                          } else {
                                                                                              if (event.target.value === "Guelma") {
                                                                                                  setHomePrice(700);
                                                                                                  setOfficePrice(400);
                                                                                              } else {
                                                                                                  if (event.target.value === "Constantine") {
                                                                                                      setHomePrice(700);
                                                                                                      setOfficePrice(400);
                                                                                                  } else {
                                                                                                      if (event.target.value === "Medea") {
                                                                                                          setHomePrice(700);
                                                                                                          setOfficePrice(400);
                                                                                                      } else {
                                                                                                          if (event.target.value === "Mostaganem") {
                                                                                                              setHomePrice(700);
                                                                                                              setOfficePrice(400);
                                                                                                          } else {
                                                                                                              if (event.target.value === "M'Sila") {
                                                                                                                  setHomePrice(700);
                                                                                                                  setOfficePrice(400);
                                                                                                              } else {
                                                                                                                  if (event.target.value === "Mascara") {
                                                                                                                      setHomePrice(700);
                                                                                                                      setOfficePrice(400);
                                                                                                                  } else {
                                                                                                                      if (event.target.value === "Ouargla") {
                                                                                                                          setHomePrice(850);
                                                                                                                          setOfficePrice(550);
                                                                                                                      } else {
                                                                                                                          if (event.target.value === "Oran") {
                                                                                                                              setHomePrice(700);
                                                                                                                              setOfficePrice(400);
                                                                                                                          } else {
                                                                                                                              if (event.target.value === "El_Bayadh") {
                                                                                                                                  setHomePrice(1350);
                                                                                                                                  setOfficePrice(900);
                                                                                                                              } else {
                                                                                                                                  if (event.target.value === "Illizi") {
                                                                                                                                      setHomePrice(1550);
                                                                                                                                      setOfficePrice(1300);
                                                                                                                                  } else {
                                                                                                                                      if (event.target.value === "Bordj_Bou_Arreridj") {
                                                                                                                                          setHomePrice(700);
                                                                                                                                          setOfficePrice(400);
                                                                                                                                      } else {
                                                                                                                                          if (event.target.value === "Boumerdes") {
                                                                                                                                              setHomePrice(600);
                                                                                                                                              setOfficePrice(400);
                                                                                                                                          } else {
                                                                                                                                              if (event.target.value === "El_Tarf") {
                                                                                                                                                  setHomePrice(700);
                                                                                                                                                  setOfficePrice(400);
                                                                                                                                              } else {
                                                                                                                                                  if (event.target.value === "Tindouf") {
                                                                                                                                                      setHomePrice(1550);
                                                                                                                                                      setOfficePrice(1300);
                                                                                                                                                  } else {
                                                                                                                                                      if (event.target.value === "Tissemsilt") {
                                                                                                                                                          setHomePrice(700);
                                                                                                                                                          setOfficePrice(400);
                                                                                                                                                      } else {
                                                                                                                                                          if (event.target.value === "El_Oued") {
                                                                                                                                                              setHomePrice(850);
                                                                                                                                                              setOfficePrice(550);
                                                                                                                                                          } else {
                                                                                                                                                              if (event.target.value === "Khenchela") {
                                                                                                                                                                  setHomePrice(700);
                                                                                                                                                                  setOfficePrice(400);
                                                                                                                                                              } else {
                                                                                                                                                                  if (event.target.value === "Souk_Ahras") {
                                                                                                                                                                      setHomePrice(700);
                                                                                                                                                                      setOfficePrice(400);
                                                                                                                                                                  } else {
                                                                                                                                                                      if (event.target.value === "Tipaza") {
                                                                                                                                                                          setHomePrice(600);
                                                                                                                                                                          setOfficePrice(400);
                                                                                                                                                                      } else {
                                                                                                                                                                          if (event.target.value === "Mila") {
                                                                                                                                                                              setHomePrice(700);
                                                                                                                                                                              setOfficePrice(400);
                                                                                                                                                                          } else {
                                                                                                                                                                              if (event.target.value === "Ain_Defla") {
                                                                                                                                                                                  setHomePrice(700);
                                                                                                                                                                                  setOfficePrice(400);
                                                                                                                                                                              } else {
                                                                                                                                                                                  if (event.target.value === "Naama") {
                                                                                                                                                                                      setHomePrice(1350);
                                                                                                                                                                                      setOfficePrice(900);
                                                                                                                                                                                  } else {
                                                                                                                                                                                      if (event.target.value === "Ain_Temouchent") {
                                                                                                                                                                                          setHomePrice(700);
                                                                                                                                                                                          setOfficePrice(400);
                                                                                                                                                                                      } else {
                                                                                                                                                                                          if (event.target.value === "Ghardaia") {
                                                                                                                                                                                              setHomePrice(850);
                                                                                                                                                                                              setOfficePrice(550);
                                                                                                                                                                                          } else {
                                                                                                                                                                                              if (event.target.value === "Relizane") {
                                                                                                                                                                                                  setHomePrice(700);
                                                                                                                                                                                                  setOfficePrice(400);
                                                                                                                                                                                              } else {
                                                                                                                                                                                                  if (event.target.value === "Timimoun") {
                                                                                                                                                                                                      setHomePrice(1300);
                                                                                                                                                                                                      setOfficePrice(850);
                                                                                                                                                                                                  } else {
                                                                                                                                                                                                      if (event.target.value === "Bordj_Badji_Mokhtar") {
                                                                                                                                                                                                          setHomePrice(1300);
                                                                                                                                                                                                          setOfficePrice(850);
                                                                                                                                                                                                      } else {
                                                                                                                                                                                                          if (event.target.value === "Ouled_Djellal") {
                                                                                                                                                                                                              setHomePrice(900);
                                                                                                                                                                                                              setOfficePrice(500);
                                                                                                                                                                                                          } else {
                                                                                                                                                                                                              if (event.target.value === "Beni_Abbes") {
                                                                                                                                                                                                                  setHomePrice(1300);
                                                                                                                                                                                                                  setOfficePrice(850);
                                                                                                                                                                                                              } else {
                                                                                                                                                                                                                  if (event.target.value === "In_Salah") {
                                                                                                                                                                                                                      setHomePrice(1500);
                                                                                                                                                                                                                      setOfficePrice(1250);
                                                                                                                                                                                                                  } else {
                                                                                                                                                                                                                      if (event.target.value === "In_Guezzam") {
                                                                                                                                                                                                                          setHomePrice(1500);
                                                                                                                                                                                                                          setOfficePrice(1250);
                                                                                                                                                                                                                      } else {
                                                                                                                                                                                                                          if (event.target.value === "Touggourt") {
                                                                                                                                                                                                                              setHomePrice(900);
                                                                                                                                                                                                                              setOfficePrice(500);
                                                                                                                                                                                                                          } else {
                                                                                                                                                                                                                              if (event.target.value === "Djanet") {
                                                                                                                                                                                                                                  setHomePrice(1500);
                                                                                                                                                                                                                                  setOfficePrice(1250);
                                                                                                                                                                                                                              } else {
                                                                                                                                                                                                                                  if (event.target.value === "El_MGhair") {
                                                                                                                                                                                                                                      setHomePrice(900);
                                                                                                                                                                                                                                      setOfficePrice(500);
                                                                                                                                                                                                                                  } else {
                                                                                                                                                                                                                                      if (event.target.value === "El_Menia") {
                                                                                                                                                                                                                                          setHomePrice(900);
                                                                                                                                                                                                                                          setOfficePrice(500);
                                                                                                                                                                                                                                      }
                                                                                                                                                                                                                                  }
                                                                                                                                                                                                                              }
                                                                                                                                                                                                                          }
                                                                                                                                                                                                                      }
                                                                                                                                                                                                                  }
                                                                                                                                                                                                              }
                                                                                                                                                                                                          }
                                                                                                                                                                                                      }
                                                                                                                                                                                                  }
                                                                                                                                                                                              }
                                                                                                                                                                                          }
                                                                                                                                                                                      }
                                                                                                                                                                                  }
                                                                                                                                                                              }
                                                                                                                                                                          }
                                                                                                                                                                      }
                                                                                                                                                                  }
                                                                                                                                                              }
                                                                                                                                                          }
                                                                                                                                                      }
                                                                                                                                                  }
                                                                                                                                              }
                                                                                                                                          }
                                                                                                                                      }
                                                                                                                                  }
                                                                                                                              }
                                                                                                                          }
                                                                                                                      }
                                                                                                                  }
                                                                                                              }
                                                                                                          }
                                                                                                      }
                                                                                                  }
                                                                                              }
                                                                                          }
                                                                                      }
                                                                                  }
                                                                              }
                                                                          }
                                                                      }
                                                                  }
                                                              }
                                                          }
                                                      }
                                                  }
                                              }
                                          }
                                      }
                                  }
                              }
                          } 
                      }
                  }
              } 
          }
      }
  }
}

  function removeItem(index) {
    const filtredCart = cartItem.filter((_, i) => i !== index);

    setCartItem(filtredCart);
    localStorage.setItem("cart",JSON.stringify(filtredCart));
  }

  const addShopify = cartItem.reduce((curr,item) => {
    return curr + totalPrice(item);
  },0)

  const total = addShopify;

  useEffect(()=>{
      if (place === "home") {
          setHomeTotal(total + homePrice);
      } else {
          if (place === "office") {
              setOfficeTotal(total + officePrice);
          }
      }
  })

  return (
    <div>
      <div className="shop-cart">
        <div className="container">
          <div className="cart-top responsive-table">
            <table>
              <thead>
                <tr>
                  <th className='cat-product'>المنتج</th>
                  <th className='cat-price'>السعر</th>
                  <th className='cat-size'>المقاس</th>
                  <th className='cat-color'>اللون</th>
                  <th className='cat-quantity'>الكمية</th>
                  <th className='cat-toprice'>المجموع</th>
                  <th className='cat-edit'>إزالة</th>
                </tr>
              </thead>
              <tbody>
                {
                  cartItem.map((item,i)=>(
                    <tr key={i}>
                      <td className="product-item cat-product">
                        <div className="p-thumb">
                          <Link to={`/shop/${item.id}`}><img src={item.img} alt="" width={70} /></Link>
                        </div>
                        <div className="p-content">
                          <Link to={`/shop/${item.id}`}>{item.name}</Link>
                        </div>
                      </td>
                      <td className="cat-price">{item.price} DA</td>
                      <td className='cat-size'>{item.theSize}</td>
                      <td className='cat-color colors'><p className={`cart-color ${item.theColor}`}></p></td>
                      <td className="cat-quantity">
                          <div className="cart-plus-minus">
                              <div className="dec qtybutton" onClick={()=>decItem(item)}><i className="uil uil-minus"></i></div>
                              <input className="cart-plus-minus-box" type="text" readOnly name='quantity' value={item.theQuantity}/>
                              <div className="inc qtybutton" onClick={()=>incItem(item)}><i className="uil uil-plus"></i></div>
                          </div>
                      </td>
                      <td className='cat-toprice'>{totalPrice(item)} DA</td>
                      <td className='cat-edit'>
                        <a href="" onClick={()=>removeItem(i)}><img src={deleteImg} alt="" /></a>
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
          <div className="cart-bottom">
            <div className="shiping-box row">
                <div className="col-12 col-md-6 col-lg-7">
                  <div className="delivery">
                  <h2 className='mb-3'>أطلب منتجات السلة</h2>
                    <form onSubmit={handleSubmit}>
                        <input type="hidden" name='subject' value="لديك طلبية جديدة على موقع MK Tshirts" />
                        <input type="hidden" name='عدد المنتجات' value={cartItem.length} />
                        <input type="hidden" name='الطلبيات' value={order} />
                        <input type="text" title='أدخل الإسم و اللقب' name='Name' placeholder='الإسم و اللقب'/>
                        <br />
                        <input type="text" title='أدخل رقم الهاتف' name='Phone' placeholder='رقم الهاتف'/>
                        <br />
                        <div className="wilaya">
                            <p>الولاية</p>
                            <select onChange={handlePrice} title='إختر ولايتك' required name="الولاية">
                                <option value="Adrar">01 Adrar أدرار</option>
                                <option value="Chlef">02 Chlef الشلف</option>
                                <option value="Laghouat">03 Laghouat الأغواط</option>
                                <option value="Oum_El_Bouaghi">04 Oum El Bouaghi أم البواقي</option>
                                <option value="Batna">05 Batna باتنة</option>
                                <option value="Bejaia">06 Bejaia بجاية</option>
                                <option value="Biskra">07 Biskra بسكرة</option>
                                <option value="Bechar">08 Bechar بشار</option>
                                <option value="Blida">09 Blida البليدة</option>
                                <option value="Bouira">10 Bouira البويرة</option>
                                <option value="Tamanrasset">11 Tamanrasset تمنراست</option>
                                <option value="Tebessa">12 Tebessa تبسة</option>
                                <option value="Tlemcen">13 Tlemcen تلمسان</option>
                                <option value="Tiaret">14 Tiaret تيارت</option>
                                <option value="Tizi_Ouzou">15 Tizi Ouzou تيزي وزو</option>
                                <option value="Algiers">16 Algiers الجزائر العاصمة</option>
                                <option value="Djelfa">17 Djelfa الجلفة</option>
                                <option value="Jijel">18 Jijel جيجل</option>
                                <option value="Setif">19 Setif سطيف</option>
                                <option value="Saida">20 Saida سعيدة</option>
                                <option value="Skikda">21 Skikda سكيكدة</option>
                                <option value="Sidi_Bel_Abbes">22 Sidi Bel Abbes سيدي بلعباس</option>
                                <option value="Annaba">23 Annaba عنابة</option>
                                <option value="Guelma">24 Guelma قالمة</option>
                                <option value="Constantine">25 Constantine قسنطينة</option>
                                <option value="Medea">26 Medea المدية</option>
                                <option value="Mostaganem">27 Mostaganem مستغانم</option>
                                <option value="M'Sila">28 M'Sila المسيلة</option>
                                <option value="Mascara">29 Mascara معسكر</option>
                                <option value="Ouargla">30 Ouargla ورقلة</option>
                                <option value="Oran">31 Oran وهران</option>
                                <option value="El_Bayadh">32 El Bayadh البيض</option>
                                <option value="Illizi">33 Illizi إليزي</option>
                                <option value="Bordj_Bou_Arreridj">34 Bordj Bou Arreridj برج بوعريريج</option>
                                <option value="Boumerdes">35 Boumerdes بومرداس</option>
                                <option value="El_Tarf">36 El Tarf الطارف</option>
                                <option value="Tindouf">37 Tindouf تندوف</option>
                                <option value="Tissemsilt">38 Tissemsilt تيسمسيلت</option>
                                <option value="El_Oued">39 El Oued الوادي</option>
                                <option value="Khenchela">40 Khenchela خنشلة</option>
                                <option value="Souk_Ahras">41 Souk Ahras سوق أهراس</option>
                                <option value="Tipaza">42 Tipaza تيبازة</option>
                                <option value="Mila">43 Mila ميلة</option>
                                <option value="Ain_Defla">44 Ain Defla عين الدفلى</option>
                                <option value="Naama">45 Naama النعامة</option>
                                <option value="Ain_Temouchent">46 Ain Temouchent عين تموشنت</option>
                                <option value="Ghardaia">47 Ghardaia غرداية</option>
                                <option value="Relizane">48 Relizane غليزان</option>
                                <option value="Timimoun">49 Timimoun تيميمون</option>
                                <option value="Bordj_Badji_Mokhtar">50 Bordj Badji Mokhtar برج باجي مختار</option>
                                <option value="Ouled_Djellal">51 Ouled Djellal أولاد جلال</option>
                                <option value="Beni_Abbes">52 Beni Abbes بني عباس</option>
                                <option value="In_Salah">53 In Salah عين صالح</option>
                                <option value="In_Guezzam">54 In Guezzam عين قزام</option>
                                <option value="Touggourt">55 Touggourt تقرت</option>
                                <option value="Djanet">56 Djanet جانت</option>
                                <option value="El_MGhair">57 El M'Ghair المغير</option>
                                <option value="El_Menia">58 El Menia المنيعة</option>
                            </select>
                        </div>
                        <input title='أدخل إسم البلدية أو الدائرة التي تقيم فيها' type="text" placeholder='الدائرة أو البلدية' name='Baladia'/>
                        <div className="place" title='حدد المكان الذي تريد أن تصلك فيه الطلبية'>
                            <div className='item'>
                                <input onChange={()=>setPlace("office")} id='office' type="radio" name='place' value={`${officePrice} DA التوصيل إلى المكتب`} defaultChecked/>
                                <label htmlFor="office">التوصيل إلى المكتب</label>
                                <span>{officePrice} DA</span>
                            </div>
                            <div className='item'>
                                <input onChange={()=>setPlace('home')} type="radio" id='home' name='place' value={`${homePrice} DA التوصيل إلى باب المنزل`}/>
                                <label htmlFor="home">التوصيل إلى باب المنزل</label>
                                <span>{homePrice} DA</span>
                            </div>
                        </div>
                        <input type="hidden" name='Price TShirts سعر المنتجات' value={`${total} DA`}/>
                        <input type="hidden" name='Price Total السعر الاجمالي' value={`${place === "home" ? homeTotal : officeTotal} DA`}/>
                        <div className='note'>
                              <div className="count">
                                <div>
                                    <span>سعر المنتجات: </span><b>{total} DA</b>
                                </div>
                                <div>
                                    <span>سعر التوصيل: </span><b>{place === "home" ? homePrice : officePrice} DA</b>
                                </div>
                                <div>
                                    <span>المجموع: </span><b>{place === "home" ? homeTotal : officeTotal} DA</b>
                                </div>
                            </div>
                            <textarea title='إذا كانت لديك أي ملاحظات أكتبها هنا' name="Note ملاحظة الزبون" placeholder='ملاحظات الزبون'></textarea>
                        </div>
                        <button title='أطلب' className='order-btn me-2' type='submit'>أطلبها الآن</button>
                        <div className='mt-3 mb-2 result'>{result}</div>
                    </form>
                  </div>
                </div>
                <div className="text-center col-12 col-md-6 col-lg-5">
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart