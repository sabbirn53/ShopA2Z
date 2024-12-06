import React from 'react'
import { Link, Links } from 'react-router-dom'
import Ratting from '../Rating/Ratting'

const ProductCards = ({gridList,products}) => {
  return (
    <div className={`shop-product-wrap row justify-content-center ${gridList ? 'grid' : 'list'}`}>
       {
        products.map((product,i)=>(
            <div key={i} className='col-lg-4 col-md-6 col-12'>
                <div className="product-item">
                    {/* Product images */}
                    <div className="product-thumb">
                        <div className="pro-thum">
                            <img src={product.img} alt="" />
                        </div>
                            {/* Product-icon */}
                        <div className="product-action-link">
                            <Link to={`/shop/${product.id}`}><i className='icofont-eye'></i></Link>
                            <a href="#">
                                <i className='icofont-heart'></i>
                            </a>
                            <Link to="/cart-page"><i className='icofont-cart-alt'></i></Link>
                        </div>
                    </div>

                    {/* product content */}
                    <div className="product-content">
                        <h5>
                            <Link className={`/shop/${product.id}`}>{product.name}</Link>
                        </h5>
                        <p className='productRating'>
                            <Ratting/>
                        </p>
                        <h6>
                            ${product.price}
                        </h6>
                    </div>
                </div>
                <div className="product-list-item">
                    {/* Product images */}
                    <div className="product-thumb">
                        <div className="pro-thum">
                            <img src={product.img} alt="" />
                        </div>
                            {/* Product-icon */}
                        <div className="product-action-link">
                            <Link to={`/shop/${product.id}`}><i className='icofont-eye'></i></Link>
                            <a href="#">
                                <i className='icofont-heart'></i>
                            </a>
                            <Link to="/cart-page"><i className='icofont-cart-alt'></i></Link>
                        </div>
                    </div>

                    {/* product content */}
                    <div className="product-content">
                        <h5>
                            <Link className={`/shop/${product.id}`}>{product.name}</Link>
                        </h5>
                        <p className='productRating'>
                            <Ratting/>
                        </p>
                        <h6>
                            ${product.price}
                        </h6>
                    </div>
                </div>
            </div>
        ))
       }
    </div>
  )
}

export default ProductCards
