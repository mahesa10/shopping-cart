import { useState } from 'react'
import ProductList from '../ProductList/ProductList'
import styles from './Shop.module.css'

const Shop = ({ setProductID }) => {
  const [activeCategory, setActiveCategory] = useState(0)

  const categories = [
    {
      name: "All Products",
      fetchUrl: "https://fakestoreapi.com/products"
    },
    {
      name: "Men's Clothing",
      fetchUrl: "https://fakestoreapi.com/products/category/men's%20clothing"
    },
    {
      name: "Women's Clothing",
      fetchUrl: "https://fakestoreapi.com/products/category/women's%20clothing"
    },
    {
      name: "Electronics",
      fetchUrl: "https://fakestoreapi.com/products/category/electronics"
    },
    {
      name: "Jewelery",
      fetchUrl: "https://fakestoreapi.com/products/category/jewelery"
    }
  ]

  const handleCategory = (index) => {
    setActiveCategory(index)
  }

  return (
    <div className={styles.shop}>
      <h1>{categories[activeCategory].name}</h1>
      <div className={styles['category-container']}>
        <h2>Categories</h2>
        <ul>
          {categories.map((category, index) => (
            <li
            key={index}
            onClick={() => handleCategory(index)}
            className={activeCategory === index ? styles.active : ''}
            >
              {category.name}
            </li>
          ))}
        </ul>
      </div>
      <ProductList category={categories[activeCategory]} setProductID={setProductID} />
    </div>
  )
}

export default Shop