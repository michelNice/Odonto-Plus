import './Header.css'
const Header = () => (
    <div className="header-top">
      <div className="midwidth">
        <div className="header-top-row clear">
          <div className="header-top-text">
            <p>
              <span>
                <i className="fas fa-map-marker-alt"></i>
              </span>{" "}
              Av.Expedicionário Francisco Vitoriano, 119 COHAB, Recife-PE
            </p>
            <p>
              <span>
                <i className="fas fa-phone"></i>
              </span>{" "}
              (81) 98113-9793
            </p>
          </div>
          <div className="header-top-social">
            <ul>
              <li>
                <a href="#" >
                  <i className="fab fa-facebook"></i>
                </a>
              </li>
              
              <li>
                <a  href="https://www.instagram.com/odontoplus.pe/"target="_blank">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  export default Header
  