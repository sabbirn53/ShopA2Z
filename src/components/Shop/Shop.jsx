import React, { useState } from 'react'
import PageHeader from '../../PageHeader/PageHeader'
import productData from '../../products.json'
import ProductCards from './ProductCards'
import Pagination from '../../PageHeader/Pagination'
import SelectedCategory from './SelectedCategory'

import Search from './Search'

const showresult="Showing 01-12 of 139 results"
const Shop = () => {
    const[gridList ,setGridList]=useState(true);
    const [products,setProducts] =useState(productData);

    const[currentPage, setCurrentPage]= useState(1);
    const productsPerPage=12;

    const indexOfLastProduct=currentPage * productsPerPage;
    const indexOfFirstProduct=indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct,indexOfLastProduct);

    //page number
    const paginate=(pageNumber)=>{
        setCurrentPage(pageNumber);
    }

    //category based search
    const [selectedCategory,setSelectedCategory]=useState("All");
    const menuItems = [...new Set(productData.map((val)=>val.category))]

    const filterItem=(curcat)=>{
        const newItem = productData.filter((newVal)=>{
            return newVal.category===curcat;
        })

        setSelectedCategory(curcat);
        setProducts(newItem);
    }
  return (
    <div>
        <PageHeader title="Our Shop Page" curPage="Shop" />
            {/* Shop content */}
            <div className="shop-page padding-tb">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-12">
                            <article>
                                <div className="shop-title d-flex flex-wrap justify-content-between">
                                    <p>{showresult}</p>

                                    <div className={`product-view-mode ${gridList ? 'gridActive' : 'listActive'}`}>
                                        <a className='grid' onClick={()=>setGridList(!gridList)}>
                                            <i className='icofont-ghost'></i>
                                        </a>
                                        <a className='list' onClick={()=>setGridList(!gridList)}>
                                            <i className='icofont-listine-dots'></i>
                                        </a>
                                    </div>
                                </div>

                                {/* product cards */}
                                <div>
                                    <ProductCards gridList={gridList} products={currentProducts}/>
                                </div>
                                <Pagination 
                                productsPerPage={productsPerPage}
                                totalProducts={products.length}
                                paginate={paginate}
                                activePage={currentPage}
                                />
                            </article>
                        </div>

                        <div className="col-lg-4 col-12">
                            <aside>
                                <Search products={products} gridList={gridList}/>

                                <SelectedCategory
                                    filterItem={filterItem}
                                    setItem={setProducts}
                                    Data={productData}
                                    menuItems={menuItems}
                                    setProducts={setProducts}
                                    selectedCategory={selectedCategory}
                                />
                            </aside>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Shop
