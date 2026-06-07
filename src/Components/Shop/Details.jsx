import React, { useState } from 'react'
import { useEffect } from 'react';

function Details({resu}) {

    const [quantity,setQuantity] = useState(1);
    function handleQuantity(e) {
        if (e.target.value.length<3 && !isNaN(e.target.value) && e.target.value <= 20) {
            setQuantity(e.target.value);
        }
    }
    function decFunc() {
        if (quantity>1) {
            setQuantity(Number(quantity)-1);
        }
    }
    function incFunc() {
        if (quantity<20) {
            setQuantity(Number(quantity)+1);
        }
    }

    const [thisType, setThisType] = useState("regular");

    const [price,setPrice] = useState(resu.price)
    const [homePrice, setHomePrice] = useState(1350);
    const [officePrice, setOfficePrice] = useState(900);
    const [place,setPlace] = useState("office");
    const [total,setTotal] = useState(price);

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

    const [color,setColor] = useState(resu.color);
    const [activeColor,setActiveColor] = useState(resu.color);

    const [size,setSize] = useState("M");
    const [activeSize,setActiveSize] = useState("M");

    const [result, setResult] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
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
                        if(event.target.Quantity.value === "") {
                            setResult("من فضلك حدد الكمية التي تريدها");
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
    
    function handleAddCart(e) {
        e.preventDefault();
        const addToCart = {
            id : resu.id,
            name: resu.name,
            theType : resu.type,
            price: price,
            theCategory: thisType,
            img: resu.img,
            theSize: size,
            theColor: color,
            theQuantity: quantity
        }
        const existCard = JSON.parse(localStorage.getItem("cart"))|| [];
        const existProduct = existCard.find((found)=> found.id === resu.id && found.theSize === addToCart.theSize && found.theColor === addToCart.theColor);
        
    
        if (existProduct) {
            if (existProduct.theQuantity + Number(quantity) > 20) {
                setResult("لا يمكنك طلب أكثر من 20 قطعة من نفس المنتج إذا كنت حقا تريد هذا سجله في خانة ملاحظات الزبون");
                return;
            } else {
                existProduct.theQuantity += Number(quantity);
                setResult("المنتج موجود بالفعل في السلة لقد تم زيادة الكمية");
                localStorage.setItem("cart",JSON.stringify(existCard));
                setQuantity(1);
                setColor(resu.color);
                setSize("S");
            }
        } else {
            existCard.push(addToCart);
            setResult("تمت إضافة المنتج إلى السلة");
            localStorage.setItem("cart",JSON.stringify(existCard));
            setQuantity(1);
            setColor(resu.color);
            setSize("S");
            setTimeout(() => {
                window.location.reload();
            }, 2000);
        }
    }
    
    useEffect(()=>{
        if (thisType === "regular") {
            setColor("black");
            setActiveColor("black");
            setSize("M");
            setActiveSize("M");
            setPrice(resu.price);
        } else {
            if (thisType === "overSize") {
                setColor("black");
                setActiveColor("black");
                setSize("M");
                setActiveSize("M");
                setPrice(price + 350);
            }
        }
    }, [thisType])

    useEffect(()=>{
        if (place === "home") {
            setTotal(price * quantity + homePrice);
        } else {
            if (place === "office") {
                setTotal(price * quantity + officePrice);
            }
        }
    }, [place, quantity, homePrice, officePrice, price])

  return (
    <div>
        <div>
            <form onSubmit={handleSubmit}>
                <input type="hidden" name='subject' value="لديك طلبية جديدة على موقع MK Tshirts" />
                <input type="hidden" name='الطلبية' value={`${resu.name} id:${resu.id}`} />
                <input type="hidden" name='النوع' value={`${resu.type}`} />
                <input type="text" title='أدخل الإسم و اللقب' name='Name' placeholder='الإسم و اللقب'/>
                <input type="text" title='أدخل رقم الهاتف' name='Phone' placeholder='رقم الهاتف'/>
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
                <input title='أدخل إسم البلدية أو الدائرة التي تقيم قيها' type="text" placeholder='الدائرة أو البلدية' name='Baladia'/>
                <div className="cart-plus-minus" title='حدد العدد الذي تريده من هذا المنتج'>
                    <div className="dec qtybutton" onClick={decFunc}><i className="uil uil-minus"></i></div>
                    <input className="cart-plus-minus-box" onChange={handleQuantity} type="text" name='Quantity' value={quantity} />
                    <div className="inc qtybutton" onClick={incFunc}><i className="uil uil-plus"></i></div>
                </div>
                <div className="place" title='حدد المكان الذي تريد أن تصلك فيه الطلبية'>
                    <div className='item'>
                        <input onChange={()=>setThisType("regular")} id='regular' type="radio" name='category' value={`regular`} defaultChecked/>
                        <label htmlFor="regular">Regular</label>
                    </div>
                    <div className='item'>
                        <input onChange={()=>setThisType('overSize')} type="radio" id='overSize' name='category' value={`overSize`}/>
                        <label htmlFor="overSize">OverSize</label>
                    </div>
                </div>
                <div className="color">
                    <input type="hidden" name='Color اللون' value={color}/>
                    {resu.type === "tshirt" ?
                    <div className="colors">
                        <p onClick={()=>{setColor("white"),setActiveColor("white")}} className={`white ${activeColor === "white" ? "active" : ""}`}></p>
                        <p onClick={()=>{setColor("black"),setActiveColor("black")}} className={`black ${activeColor === "black" ? "active" : ""}`}></p>
                        <p onClick={()=>{setColor("overbrown"),setActiveColor("overbrown")}} className={`overbrown ${thisType === "overSize" ? "" : "d-none"} ${activeColor === "overbrown" ? "active" : ""}`}></p>
                        <p onClick={()=>{setColor("red"),setActiveColor("red")}} className={`red ${thisType === "regular" ? "" : "d-none"} ${activeColor === "red" ? "active" : ""}`}></p>
                        <p onClick={()=>{setColor("blue-dark"),setActiveColor("blue-dark")}} className={`blue-dark ${thisType === "regular" ? "" : "d-none"} ${activeColor === "blue-dark" ? "active" : ""}`}></p>
                        <p  onClick={()=>{setColor("orange"),setActiveColor("orange")}} className={`orange ${thisType === "regular" ? "" : "d-none"} ${activeColor === "orange" ? "active" : ""}`}></p>
                        <p onClick={()=>{setColor("pink"),setActiveColor("pink")}} className={`pink ${thisType === "regular" ? "" : "d-none"} ${activeColor === "pink" ? "active" : ""}`}></p>
                        <p onClick={()=>{setColor("gray"),setActiveColor("gray")}} className={`gray ${thisType === "regular" ? "" : "d-none"} ${activeColor === "gray" ? "active" : ""}`}></p>
                    </div> : <></>}
                    {resu.type === "polo" ?
                    <div className="colors">
                        <p onClick={()=>{setColor("white"),setActiveColor("white")}} className={`white ${activeColor === "white" ? "active" : ""}`}></p>
                        <p onClick={()=>{setColor("black"),setActiveColor("black")}} className={`black ${activeColor === "black" ? "active" : ""}`}></p>
                        <p onClick={()=>{setColor("red"),setActiveColor("red")}} className={`red ${activeColor === "red" ? "active" : ""}`}></p>
                        <p onClick={()=>{setColor("gray"),setActiveColor("gray")}} className={`gray ${activeColor === "gray" ? "active" : ""}`}></p>
                        <p onClick={()=>{setColor("green-light"),setActiveColor("green-light")}} className={`green-light ${activeColor === "green-light" ? "active" : ""}`}></p>
                        <p onClick={()=>{setColor("brown"),setActiveColor("brown")}} className={`brown ${activeColor === "brown" ? "active" : ""}`}></p>
                        <p onClick={()=>{setColor("blue-light"),setActiveColor("blue-light")}} className={`blue-light ${activeColor === "blue-light" ? "active" : ""}`}></p>
                        <p onClick={()=>{setColor("yellow"),setActiveColor("yellow")}} className={`yellow ${activeColor === "yellow" ? "active" : ""}`}></p>
                        <p onClick={()=>{setColor("green-dark"),setActiveColor("green-dark")}} className={`green-dark ${activeColor === "green-dark" ? "active" : ""}`}></p>
                        <p onClick={()=>{setColor("orange-dark"),setActiveColor("orange-dark")}} className={`orange-dark ${activeColor === "orange-dark" ? "active" : ""}`}></p>
                    </div> : <></>}
                    {resu.type === "baggy" ?
                    <div className="colors">
                        <p onClick={()=>{setColor("black"),setActiveColor("black")}} className={`black ${activeColor === "black" ? "active" : ""}`}></p>
                        <p onClick={()=>{setColor("baggy-pink"),setActiveColor("baggy-pink")}} className={`baggy-pink ${activeColor === "baggy-pink" ? "active" : ""}`}></p>
                        <p onClick={()=>{setColor("real-pink"),setActiveColor("real-pink")}} className={`real-pink ${activeColor === "real-pink" ? "active" : ""}`}></p>
                        <p onClick={()=>{setColor("light-gray"),setActiveColor("light-gray")}} className={`light-gray ${activeColor === "light-gray" ? "active" : ""}`}></p>
                    </div> : <></>
                    }
                </div>
                <div className="size">
                    <input type="hidden" name="Size المقاس" value={size}/>
                    {
                        resu.type === "tshirt" ?
                        <div className="sizes">
                        <p title='S' onClick={()=>{setSize("S"),setActiveSize("S")}} className={`${thisType === "regular" ? "" : "d-none"} ${activeSize === "S" ? "bg-warning" : ""}`}>S</p>
                        <p title='M' onClick={()=>{setSize("M"),setActiveSize("M")}} className={`${activeSize === "M" ? "bg-warning" : ""}`}>M</p>
                        <p title='L' onClick={()=>{setSize("L"),setActiveSize("L")}} className={`${activeSize === "L" ? "bg-warning" : ""}`}>L</p>
                        <p title='XL' onClick={()=>{setSize("XL"),setActiveSize("XL")}} className={`${activeSize === "XL" ? "bg-warning" : ""}`}>XL</p>
                        <p title='XXL' onClick={()=>{setSize("XXL"),setActiveSize("XXL")}} className={`${thisType === "regular" ? "" : "d-none"} ${activeSize === "XXL" ? "bg-warning" : ""}`}>XXL</p>
                    </div> : <></> 
                    }
                    {
                    resu.type === "polo" ?
                    <div className="sizes">
                        <p title='S' onClick={()=>{setSize("S"),setActiveSize("S")}} className={`${activeSize === "S" ? "bg-warning" : ""}`}>S</p>
                        <p title='M' onClick={()=>{setSize("M"),setActiveSize("M")}} className={`${activeSize === "M" ? "bg-warning" : ""}`}>M</p>
                        <p title='L' onClick={()=>{setSize("L"),setActiveSize("L")}} className={`${activeSize === "L" ? "bg-warning" : ""}`}>L</p>
                        <p title='XL' onClick={()=>{setSize("XL"),setActiveSize("XL")}} className={`${activeSize === "XL" ? "bg-warning" : ""}`}>XL</p>
                    </div> : <></>
                    }
                    {
                    resu.type === "baggy" ?
                    <div className="sizes">
                        <p title='M' onClick={()=>{setSize("M"),setActiveSize("M")}} className={`${activeSize === "M" ? "bg-warning" : ""}`}>M</p>
                        <p title='L' onClick={()=>{setSize("L"),setActiveSize("L")}} className={`${activeSize === "L" ? "bg-warning" : ""}`}>L</p>
                        <p title='XL' onClick={()=>{setSize("XL"),setActiveSize("XL")}} className={`${activeSize === "XL" ? "bg-warning" : ""}`}>XL</p>
                    </div> : <></>
                    }
                </div>
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
                <input type="hidden" name='Price السعر' value={`${price} DA`}/>
                <input type="hidden" name='Price Total السعر الاجمالي' value={`${total} DA`}/>
                <div className='note'>
                    <div className="count">
                        <div>
                            <span>سعر المنتج: </span><b>{quantity} <i className="uil uil-multiply"></i> {price} DA</b>
                        </div>
                        <div>
                            <span>سعر التوصيل: </span><b>{place === "home" ? homePrice : officePrice} DA</b>
                        </div>
                        <div>
                            <span>المجموع: </span><b>{total} DA</b>
                        </div>
                    </div>
                    <textarea title='إذا كانت لديك أي ملاحظات أكتبها هنا' name="Note ملاحظة الزبون" placeholder='ملاحظات الزبون'></textarea>
                </div>
                <button title='أطلب' className='order-btn me-2 mb-2' type='submit'>أطلب الآن</button>
                <button title='أضف' className='order-btn me-2' onClick={handleAddCart}>أضافة إلى سلة المشتريات</button>
                <div className='mt-3 result'>{result}</div>
            </form>
        </div>
    </div>
  )
}

export default Details