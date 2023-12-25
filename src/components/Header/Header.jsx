import { useState } from 'react';
import styles from './Header.module.css'
import { MdOutlineShoppingBag } from "react-icons/md"
import { HiOutlineSearch, HiOutlineMenu } from "react-icons/hi";
import { Link } from 'react-router-dom';
import Cart from '../Cart/Cart';

const Header = ({ cartItems, changeQuantity, deleteProduct }) => {
  const [menuToggle, setMenuToggle] = useState(false)
  const [cartView, setCartView] = useState(false)

  const handleClose = (e) => {
    if (e.currentTarget === e.target) {
      setMenuToggle(false)
    }
  }

  const handleCloseCart = () => {
    setCartView(false)
  }

  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>SIMPLE <span className={styles[`text-stroke`]}>SHOP</span></h1>
      <div className={`${styles['search-bar']} ${styles['sm-hidden']}`}>
        <HiOutlineSearch className={styles['search-icon']}/>
        <input type='text' name='search' placeholder='Search'/>
      </div>
      <nav className={styles.nav}>
        <ul>
          <li className={styles['sm-hidden']}>
            <Link to='/'>Home</Link>
          </li>
          <li className={styles['sm-hidden']}>
            <Link to='shop'>Shop</Link>
          </li>
          <li className={styles['bag-container']}>
            {cartItems.length > 0 && <div>{cartItems.length}</div>}
            <MdOutlineShoppingBag size={24} onClick={() => setCartView(true)} />
          </li>
          <li className={`${styles['sm-show']} ${styles['lg-hidden']}`} onClick={() => setMenuToggle(true)}><HiOutlineMenu size={24} /></li>
        </ul>
      </nav>

      {menuToggle && <MobileNav handleClose={handleClose} />}

      {cartView && <Cart handleClose={handleCloseCart} cartItems={cartItems} changeQuantity={changeQuantity} deleteProduct={deleteProduct} />}
    </header>
  )
}

const MobileNav = ({ handleClose }) => {
  return (
    <div
    className={`${styles['mobile-nav-container']} ${styles['lg-hidden']}`}
    onClick={(e) => handleClose(e)}>
      <div className={styles['mobile-nav']}>
        <div className={styles['search-bar']}>
          <input type='text' name='search' placeholder='Search'/>
          <HiOutlineSearch className={styles['search-icon']}/>
        </div>
        <ul>
          <li><Link to='/' onClick={(e) => handleClose(e)}>Home</Link></li>
          <li><Link to='shop' onClick={(e) => handleClose(e)}>Shop</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Header