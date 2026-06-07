import { useState, useEffect, useContext, useRef } from 'react';
import './Nav.css';
import { dataContext } from '../../Context/UserContex';
import products from '../../Products';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../../public/assets/logo.png';
import instagram from '../../../public/instagram.png'

function Nav() {
  const [darkMode, setDarkMode] = useState(false);
  const [cartLen, setCartLen] = useState(0);
  const [menuShow, setMenuShow] = useState(false);
  const menuRef = useRef();
  const location = useLocation();
  const currentPage = location.pathname;

  const { input, setInput, cate, setCate, active, setActive, show, setShow } = useContext(dataContext);

  const isProductPage = /^\/\d+$/.test(currentPage);

  useEffect(() => {
    setMenuShow(false);
    setShow(false);
  }, [location]);

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    const isDark = theme === 'dark';
    setDarkMode(isDark);
    document.body.classList.toggle('dark', isDark);
    document.body.classList.toggle('light', !isDark);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.body.classList.toggle('dark', newMode);
    document.body.classList.toggle('light', !newMode);
    localStorage.setItem('theme', newMode ? 'dark' : 'light');
  };

  useEffect(() => {
    const search = products.filter((result) =>
      result.name.toLowerCase().includes(input.toLowerCase()) ||
      result.search.toLowerCase().includes(input.toLowerCase())
    );
    setCate(search);
    setActive('all');
  }, [input]);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartLen(cart.length);
  }, []);

  useEffect(() => {
    const handleCartUpdate = () => {
      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      setCartLen(cart.length);
    };
    window.addEventListener('cart-updated', handleCartUpdate);
    return () => window.removeEventListener('cart-updated', handleCartUpdate);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuShow(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav>
      {(currentPage === '/' || currentPage === '/About' || isProductPage) ? (
        <div className="cart" onClick={() => { setMenuShow(false); setShow(!show); }}>
          <i className="uil uil-shopping-cart"></i>
          <span className="len">{cartLen < 100 ? cartLen : '+99'}</span>
        </div>
      ) : (
        <Link to="/" className="mode">
          <i className="uil uil-home"></i>
        </Link>
      )}

      {currentPage === '/' && (
        <form onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="search"><i className="uil uil-search"></i></label>
          <input
            type="text"
            placeholder={window.innerWidth <= 768 ? 'إبحث' : 'إبحث عن منتج'}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </form>
      )}

      {currentPage !== '/' ? (
        <Link to="/" className="logo-container" onClick={() => { setMenuShow(false); setShow(false); }}>
          <img src={logo} alt="ARTY" className="logo" />
        </Link>
      ) : (
        <a href="#"><img src={logo} alt="ARTY" className="logo" /></a>
      )}

      <div className="menu" ref={menuRef}>
        <i
          className="uil uil-bars"
          onClick={() => {
            setShow(false);
            setMenuShow(prev => !prev);
          }}
        ></i>

        <div className={`menu-content ${menuShow ? '' : 'not-show'}`} key={currentPage}>
          <header>
            <i className="uil uil-multiply" onClick={() => setMenuShow(false)}></i>
            <div className="mode-container">
              <div onClick={toggleDarkMode} className="mode">
                <i className={`uil ${darkMode ? 'uil-sun' : 'uil-moon'}`}></i>
              </div>
            </div>
            <img src={logo} alt="ARTY" />
          </header>

          <div className="menu-elements">
            <Link to="/" className="ele" onClick={() => setMenuShow(false)}>
              <i className="uil uil-home"></i><span>الرئيسية</span>
            </Link>
            <hr />
            <Link to="/About" className="ele" onClick={() => setMenuShow(false)}>
              <i className="uil uil-info-circle"></i><span>معلومات عنا</span>
            </Link>
            <hr />
            <Link to="/Contact" className="ele" onClick={() => setMenuShow(false)}>
              <i className="uil uil-envelope"></i><span>تواصل معنا</span>
            </Link>
            <hr />
          </div>
          <div className='manu-insta-image'>
                <a
                  style={{textDecoration: "none", color: "#7b00ff"}}
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={instagram} alt="Instagram"/>
                </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
