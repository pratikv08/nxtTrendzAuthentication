// Write your JS code here
import './index.css'
import {Link} from 'react-router-dom'

const Header = () => (
  <nav className="nav-header">
    <div className="nav-content">
      <img
        className="logo"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
      />
      <img
        className="logout"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
        alt="nav logout"
      />
    </div>
    <ul className="nav-menu-for-small-width">
      <li>
        <Link to="/">
          <img
            className="nav-menu-img"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
            alt="nav home"
          />
        </Link>
      </li>
      <li>
        <Link to="/products">
          <img
            className="nav-menu-img"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
            alt="nav products"
          />
        </Link>
      </li>
      <li>
        <Link to="/cart">
          <img
            className="nav-menu-img"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
            alt="nav cart"
          />
        </Link>
      </li>
    </ul>
    <div className="large-bottom-container">
      <ul className="nav-menu-for-large-width">
        <li className="menu">
          <Link to="/" className="link">
            Home
          </Link>
        </li>

        <li className="menu">
          <Link to="/products" className="link">
            Products
          </Link>
        </li>

        <li className="menu">
          <Link to="/cart" className="link">
            Cart
          </Link>
        </li>
      </ul>
      <button type="button" className="logout-btn">
        Logout
      </button>
    </div>
  </nav>
)

export default Header
