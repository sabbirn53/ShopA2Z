import React from "react";
import { Link, Links } from "react-router-dom";

const subTitle = "Choose Any Products";
const title = "Buy Everything with Us";
const btnText = "Get Started Now";

const categoryList = [
  {
    imgUrl: "src/assets/images/category/Products/01.jpg",
    imgAlt: "category rajibraj91 rajibraj",
    iconName: "icofont-shopping-cart",
    title: "DSLR Camera",
  },
  {
    imgUrl: "src/assets/images/category/Products/02.jpg",
    imgAlt: "category rajibraj91 rajibraj",
    iconName: "icofont-shopping-cart",
    title: "Shoes",
  },
  {
    imgUrl: "src/assets/images/category/Products/03.jpg",
    imgAlt: "category rajibraj91 rajibraj",
    iconName: "icofont-shopping-cart",
    title: "Photography",
  },
  {
    imgUrl: "src/assets/images/category/Products/04.jpg",
    imgAlt: "category rajibraj91 rajibraj",
    iconName: "icofont-shopping-cart",
    title: "Formal Dress",
  },
  {
    imgUrl: "src/assets/images/category/Products/05.jpg",
    imgAlt: "category rajibraj91 rajibraj",
    iconName: "icofont-shopping-cart",
    title: "Colorful Bags",
  },
  {
    imgUrl: "src/assets/images/category/Products/06.jpg",
    imgAlt: "category rajibraj91 rajibraj",
    iconName: "icofont-shopping-cart",
    title: "Home Decor",
  },
];


const HomeCategory = () => {
    return (
      <div className="category-section style-4 padding-tb">
        <div className="container">
          <div className="section-header text-center">
            <span className="subtitle">{subTitle}</span>
            <h2 className="title">{title}</h2>
          </div>
  
          <div className="section-wrapper">
            <div className="row g-4 justify-content-center row-cols-md-3 row-cols-sm-2 row-cols-1">
              {categoryList.map((val, i) => (
                <div key={i} className="col">
                  <Link to="/shop" className="category-item">
                    <div className="category-inner">
                      <div className="category-thumb">
                        <img src={val.imgUrl} alt={val.imgAlt} />
                      </div>
                      <div className="category-content">
                        <div className="cate-icon">
                          <i className={val.iconName}></i>
                        </div>
                        <h6>{val.title}</h6>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
  
            <div className="text-center mt-5">
              <Link to="/shop" className="lab-btn">
                <span>{btnText}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default HomeCategory;
