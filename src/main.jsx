import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import NotFound from './Components/NotFound/NotFound.jsx';
import UserContex from './Context/UserContex.jsx';
import Confirm from './Components/Confirm/Confirm.jsx'
import Home from './Pages/Home/Home.jsx';
import SingleProduct from './Pages/SingleProduct/SingleProduct.jsx';
import About from './Pages/About/About.jsx';
import Confidentiality from './Components/Footer/Confidentiality/Confidentiality.jsx';
import Terms from './Components/Footer/Terms/Terms.jsx';
import Faq from './Components/Footer/Faq/Faq.jsx';
import Delivery from './Components/Footer/Delivery/Delivery.jsx';
import Contact from './Pages/Contact/Contact.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [{path: "/" ,element: <Home/>},{path: "/:id", element: <SingleProduct/>},{path: "/Contact" ,element: <Contact/>},{path: "/About",element: <About/>},{path: "/Confirm" ,element: <Confirm/>},{path: "/confidentiality", element: <Confidentiality/>},{path: "/terms-and-conditions", element: <Terms/>},{path: "/Delivery", element: <Delivery/>},{path: "/faq", element: <Faq/>},{path: "*", element: <NotFound/>}]
  }
]);

createRoot(document.getElementById('root')).render(
  <UserContex>
      <RouterProvider router={router} />
  </UserContex>
)
