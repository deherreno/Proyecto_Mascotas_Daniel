import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-cta pt-5 pb-5">
          <div className="row">
            <div className="col-xl-4 col-md-4 mb-30">
              <div className="single-cta">
                <i className="fas fa-map-marker-alt"></i>
                <div className="cta-text">
                  <h4>Encuentranos</h4>
                  <span>Cra 4  Apt. 691</span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-4 mb-30">
              <div className="single-cta">
                <i className="fas fa-phone"></i>
                <div className="cta-text">
                  <h4>Llamanos</h4>
                  <span>+57 3108840799</span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-4 mb-30">
              <div className="single-cta">
                <i className="far fa-envelope-open"></i>
                <div className="cta-text">
                  <h4>Correo</h4>
                  <span>omegapetshop@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-content pt-5 pb-5">
          <div className="row">
            <div className="col-xl-4 col-lg-4 mb-50">
              <div className="footer-widget">
                <div className="footer-logo">
                  <a href="index.html"><img src="https://omegapet.es/wp-content/uploads/2021/01/OMEGAPET_LOGO_RGB.png" className="img-fluid" alt="logo" /></a>
                </div>
                <div className="footer-text">
                  <p>En OmegaPetShop, cuidamos de tus mascotas con productos de calidad. ¡Confía en nosotros!</p>
                </div>
                <div className="footer-social-icon">
                  <span>Siguenos</span>
                  <a href="facebook.com"><i className="fab fa-facebook-f facebook-bg"></i></a>
                  <a href="twitter.com"><i className="fab fa-twitter twitter-bg"></i></a>
                  <a href="instagram.com"><i className="fab fa-instagram instagram-bg"></i></a>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
              <div className="footer-widget">
                <div className="footer-widget-heading">
                  <h3>Useful Links</h3>
                </div>
                <ul>
                  <li><a href="a">Home</a></li>
                  <li><a href="a">About</a></li>
                  <li><a href="a">Services</a></li>
                  <li><a href="a">Portfolio</a></li>
                  <li><a href="a">Contact</a></li>
                  <li><a href="a">About us</a></li>
                  <li><a href="a">Our Services</a></li>
                  <li><a href="a">Expert Team</a></li>
                  <li><a href="a">Contact us</a></li>
                  <li><a href="a">Latest News</a></li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
              <div className="footer-widget">
                <div className="footer-widget-heading">
                  <h3>¿te contactamos?</h3>
                </div>
                <div className="footer-text mb-25">
                  <p>si quieres que te contactemos directamente,deja tu correo aqui</p>
                </div>
                <div className="subscribe-form">
                  <form action="#">
                    <input type="text" placeholder="Email Address" />
                    <button><i className="fab fa-telegram-plane"></i></button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 text-center text-lg-left">
              <div className="copyright-text">
                <p>Copyright &copy; 2018, All Right Reserved <a href="https://codepen.io/anupkumar92/">Anup</a></p>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
              <div className="footer-menu">
                <ul>
                  <li><a href="a">Home</a></li>
                  <li><a href="a">Terms</a></li>
                  <li><a href="a">Privacy</a></li>
                  <li><a href="a">Policy</a></li>
                  <li><a href="a">Contact</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
