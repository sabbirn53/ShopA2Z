import React from "react";
import { Link, Links } from "react-router-dom";
import camera from "../../assets/images/category/Products/01.jpg"
import shoe from "../../assets/images/category/Products/02.jpg"
import photograpy from "../../assets/images/category/Products/03.jpg"
import dress from "../../assets/images/category/Products/04.jpg"
import bags from "../../assets/images/category/Products/05.jpg"
import decor from "../../assets/images/category/Products/06.jpg"

const subTitle = "Choose Any Products";
const title = "Buy Everything with Us";
const btnText = "Get Started Now";

const categoryList = [
  {
    imgUrl: camera,
    imgAlt: "category rajibraj91 rajibraj",
    iconName: "icofont-shopping-cart",
    title: "DSLR Camera",
  },
  {
    imgUrl: shoe,
    imgAlt: "category rajibraj91 rajibraj",
    iconName: "icofont-shopping-cart",
    title: "Shoes",
  },
  {
    imgUrl: photograpy,
    imgAlt: "category rajibraj91 rajibraj",
    iconName: "icofont-shopping-cart",
    title: "Photography",
  },
  {
    imgUrl: dress,
    imgAlt: "category rajibraj91 rajibraj",
    iconName: "icofont-shopping-cart",
    title: "Formal Dress",
  },
  {
    imgUrl: bags,
    imgAlt: "category rajibraj91 rajibraj",
    iconName: "icofont-shopping-cart",
    title: "Colorful Bags",
  },
  {
    imgUrl: decor,
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
