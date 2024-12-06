import React, { useState } from "react";
import productData from "../../products.json";
import { Link } from "react-router-dom";
import SelectedCategory from "../Category/SelectedCategory";

const title = (
  <h2>
    Search Your One From <span>Thousand</span> of Products{" "}
  </h2>
);
const desc = "We have the largest collection of products";
const bannerList = [
  {
    iconName: "icofont-users-alt-4",
    text: "1.5 Million Customers",
  },
  {
    iconName: "icofont-notification",
    text: "More then 2000 Marchent",
  },
  {
    iconName: "icofont-globe",
    text: "Buy Anything Online",
  },
];

const Banner = () => {
  const [searchInput, setSearchInput] = useState("");
  const [filteredProducts, setFiteredProducts] = useState(productData);

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    setSearchInput(searchTerm);

    // Filtering Section
    const filtered = productData.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFiteredProducts(filtered);
  };
  return (
    <div className="banner-section style-4">
      <div className="container">
        <div className="banner-content">
          {title}
          <form>
            <SelectedCategory select={"all"}/>
            <input
              onChange={handleSearch}
              type="text"
              name="search"
              id="search"
              value={searchInput}
              placeholder="Search your one..."
            />

            <button type="submit">
              <i className="icofont-search-1"></i>
            </button>
          </form>
          <p>{desc}</p>
          <ul className="lab-ul">
            {searchInput &&
              filteredProducts.map((product, i) => (
                <li key={i}>
                  <Link to={`/shop/${product.id}`}>{product.name}</Link>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Banner;
