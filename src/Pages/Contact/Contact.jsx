import React from 'react'
import './Contact.css'
import MyMap from './MyMap'

function Contact() {
  return (
    <div className="contact text-center container">
      <h2>تواصل معنا</h2>
      <p className="desc">
        يسعدنا تواصلكم معنا أترك رسالة وسنقوم بالرد على إستفساركم في أقرب وقت ممكن
      </p>

      <div className="contact-content mt-5 row">
        <div className="col-12 col-md-6 col-lg-5 text-center">
          <div className="contacts">

            <div className="info">
              <i className="uil uil-phone"></i>
              <div>
                <h4>0553512070</h4>
                <a href="tel:053512070">اتصل</a>
              </div>
            </div>

            <div className="info">
              <i className="uil uil-envelope"></i>
              <div>
                <h4>artystoredz@gmail.com</h4>
                <a href="mailto:artystoredz@gmail.com">أرسل</a>
              </div>
            </div>

            <div className="info">
              <div className="social">
                <a
                  href="https://www.instagram.com"
                  title='انستغرام'
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg"
                    alt="Instagram"
                  />
                </a>

                <a
                  href="https://www.facebook.com"
                  title='فيسبوك'
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                    alt="Facebook"
                  />
                </a>

                <a
                  href="https://www.tiktok.com"
                  title='تيكتوك'
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/3046/3046121.png"
                    alt="TikTok"
                  />
                </a>

                <a
                  href="https://t.me/your_channel"
                  title='تلغرام'
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg"
                    alt="Telegram"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6 col-lg-7">
          <MyMap />
          <div className="google-map">
              <a
                href="https://maps.app.goo.gl/pJntkXf6zLemwcFU8"
                title='استكشاف'
                target="_blank"
                rel="noopener noreferrer"
              >
              <p>Google Map</p>
              </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
