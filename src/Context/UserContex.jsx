import React, { createContext, useState } from 'react'
import products from '../Products';
export const dataContext = createContext();

function UserContex({children}) {
  let [input,setInput] = useState("");
  let [cate,setCate] = useState(products);
  let [active,setActive] = useState("all");
  let [show,setShow] = useState(false);

  let data = {
    input,
    setInput,
    cate,
    setCate,
    active,
    setActive,
    show,
    setShow
  }
  return (
    <div>
        <dataContext.Provider value={data}>
            {children}
        </dataContext.Provider>
    </div>
  )
}

export default UserContex