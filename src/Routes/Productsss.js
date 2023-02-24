import React, { useState } from "react";
import './productsss.css'

export const Productsss = () => {
  const [products] = useState([
    {
      img: "/images/1.jpg",
      name: "New Balance",
      sale: true,
      price: '20,000',
      salePrice: '16,000',
    },
    {
      img: "/images/2.jpg",
      name: "Nike Jordan",
      sale: true,
      price:'20,000',
      salePrice: '16,000',
    },
    {
      img: "/images/3.jpg",
      name: "Nike Jordan",
      sale: false,
      price: '16,000',
    },
    {
      img: "/images/4.jpg",
      name: "New Balance",
      sale: false,
      price: '16,000',
    },

    {
      img: "/images/5.jpg",
      name: "Nike Jordan",
      sale: false,
      price: '16,000',
    },
    {
      img: "/images/6.jpg",
      name: "Adidas Yeezy",
      sale: false,
      price: '16,000',
    },
    {
      img: "/images/7.jpg",
      name: "Nike Jordan",
      sale: false,
      price: '16,000',
    },
    {
      img: "/images/8.jpg",
      name: "Nike Jordan",
      sale: false,
      price: '16,000',
    },
    {
      img: "/images/9.jpg",
      name: "Nike Jordan",
      sale: false,
      price: '16,000',
    },
    {
      img: "/images/10.jpg",
      name: "Nike Jordan",
      sale: false,
      price: '16,000',
    },
    {
      img: "/images/11.jpg",
      name: "Adidas Yeezy",
      sale: false,
      price: '16,000',
    },
    {
      img: "/images/12.jpg",
      name: "Adidas Yeezy",
      sale: false,
      price: '16,000',
    },
    {
      img: "/images/13.jpg",
      name: "Adidas Phirel Williams",
      sale: false,
      price: '16,000',
    },
    {
      img: "/images/14.jpg",
      name: "Nike Jordan",
      sale: false,
      price: '16,000',
    },
    {
      img: "/images/15.jpg",
      name: "New Balance",
      sale: false,
      price: '16,000',
    },
    {
      img: "/images/16.jpg",
      name:"Nike Jordan",
      sale: false,
      price: '16,000',
    },
    {
      img: "/images/17.jpg",
      name: "Puma Pikachu",
      sale: false,
      price: '16,000',
    },
    {
      img: "/images/18.jpg",
      name: "Nike Jordan",
      sale: false,
      price: '16,000',
    },
    {
      img: "/images/19.jpg",
      name: "Adidas Original",
      sale: false,
      price: '16,000',
    },
    {
      img: "/images/20.jpg",
      name: "New Balance",
      sale: false,
      price: '16,000',
    },
    {
      img: "/images/21.jpg",
      name: "New Balance",
      sale: false,
      price: '16,000',
    },
    {
      img: "/images/22.jpg",
      name: "New Balance",
      sale: false,
      price: '16,000',
    },
    {
      img: "/images/23.jpg",
      name: "New Balance",
      sale: false,
      price: '16,000',
    },
    {
      img: "/images/24.jpg",
      name: "Puma Sneaker",
      sale: false,
      price: '16,000',
    },

]);
return (
  <section className="products" id="products">
    <div className="container">
      <div className="products-wrapper">
        {products.map((product, i) => (
          <div key={i} className="product">
            <div className="img-container">
              <img src={product.img} alt="" />
              {product.sale && <span className="sale">Sale</span>}
              <div className="details">
                <span className="icon">
                  <i className="far fa-heart"></i>
                </span>
                <span className="read">Read More</span>
                
              </div>
            </div>
            <div className="content">
              <h3>{product.name}</h3>
              <span className={`price ${product.sale ? "line" : ""}`}>
              ₹{product.price}
              </span>
              {product.sale && (
                <span className="sale-price">₹{product.salePrice}</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
};