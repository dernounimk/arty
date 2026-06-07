import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Details from './Details';


function SingleProduct() {
    const [data, setData] = useState([]);

    useEffect(()=>{
        fetch('/src/products.json').then(res => res.json()).then(data=>setData(data));
    },[])

    const {id} = useParams();
    
    const result = data.filter(x => x.id === id);
    

  return (
    <div>
        <div className='shop-single'>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <article>
                            <div className="product-details">
                                <div className="row align-items-center">
                                    <div className="col-md-5 col-12">
                                        <div className="single-thumb">
                                            <div className="single-container pro-single-top">
                                                <div>
                                                    {
                                                        result.map((resu,i)=>(
                                                            <div key={i}>
                                                                <div className="single-thumb">
                                                                    <img src={resu.img} alt="" />
                                                                </div>
                                                                <div className='mt-4'>
                                                                    <h2>{resu.name}</h2>
                                                                    {    
                                                                    resu.type === "tshirt" ? 
                                                                            <div className='mt-3 text-center'>
                                                                                <h6 className='mt-3'>Regular {resu.price} DA</h6>
                                                                                <h6 className='mt-3'>OverSize {resu.price + 350} DA</h6>
                                                                            </div>
                                                                            :
                                                                        <h3>{resu.price} DA</h3>
                                                                    }
                                                                </div>
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-7 col-12">
                                        <div className="post-content">
                                            {
                                                result.map((resu,i)=>(<Details key={i} resu={resu}/>))
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SingleProduct