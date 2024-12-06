import React from 'react'
import { Link } from 'react-router-dom';
import  '../../App.css';

const title = "About ShopA2Z";
const desc = "ShopA2Z is the first door to door shopping service platfrom in Bangladesh.User Can buy their necessary goods from here in a one click .";
const ItemTitle = "Categories";
const quickTitle = "Quick Links";
const tweetTitle = "Recent Tweets";

const addressList = [
    {
        iconName: 'icofont-google-map',
        text:  '  Chittagong, Bangladesh.',
    },
    {
        iconName: 'icofont-phone',
        text:  '  +8801757559055#',
    },
    {
        iconName: 'icofont-envelope',
        text:  '  info@shopA2Z.com',
    },
]

const socialList = [
    {
        iconName: 'icofont-facebook',
        siteLink: '#',
        className: 'facebook',
    },
    {
        iconName: 'icofont-twitter',
        siteLink: '#',
        className: 'twitter',
    },
    {
        iconName: 'icofont-linkedin',
        siteLink: '#',
        className: 'linkedin',
    },
    {
        iconName: 'icofont-instagram',
        siteLink: '#',
        className: 'instagram',
    },
    {
        iconName: 'icofont-pinterest',
        siteLink: '#',
        className: 'pinterest',
    },
]

const ItemList = [
    {
        text: 'All Products',
        link: '/shop',
    },
    {
        text: 'Shop',
        link: '/shop',
    },
    {
        text: 'Blog',
        link: '/blog',
    },
    {
        text: 'About',
        link: '/about',
    },
    {
        text: 'Policy',
        link: '#',
    },
    {
        text: 'FAQs',
        link: '/about',
    }
]

const quickList = [
    {
        text: 'Summer Sessions',
        link: '#',
    },
    {
        text: 'Events',
        link: '#',
    },
    {
        text: 'Gallery',
        link: '#',
    },
    {
        text: 'Forums',
        link: '#',
    },
    {
        text: 'Privacy Policy',
        link: '#',
    },
    {
        text: 'Terms of Use',
        link: '#',
    },
]

const tweetList = [
    {
        iconName: 'icofont-twitter',
        desc: <p>Sabbir Hasan Shuvo <a href="#">@ShopA2Z Greetings!</a> Grab your item, 50% Big Sale Offer !!</p>,
    },
    {
        iconName: 'icofont-twitter',
        desc: <p>Shop A<sub>2</sub>Z <a href="#">@ShopA2Z Hey!</a> Grab your item, 50% Big Sale Offer !!</p>,
    },
]

const footerbottomList = [
    {
        text: 'Faculty',
        link: '#',
    },
    {
        text: 'Staff',
        link: '#',
    },
    {
        text: 'Students',
        link: '#',
    },
    {
        text: 'Alumni',
        link: '#',
    },
]


const Footer = () => {
  return (
    <footer className='style-2'>
        <div className="footer-top dark-view padding-tb">
            <div className="container">
                <div className="row g-4 row-cols-xl-4 row-cols-sm-2 row-cols-1 justify-content-center">
                    <div className="col">
                        <div className="footer-item our-address">
                            <div className="footer-inner">
                                <div className="footer-content">
                                    <div className="title">
                                        <h4>{title}</h4>
                                    </div>
                                    <div className="content">
                                        <p>{desc}</p>
                                        <ul className='lab-ul office-address'>
                                            {
                                                addressList.map((val,i)=>(
                                                    <li key={i}>
                                                        <i className={val.iconName}>{val.text}</i>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                        <ul className='lab-ul social-icons'>
                                            {
                                                socialList.map((val,i)=>(
                                                    <li key={i}>
                                                       <a href="" className={val.className}><i className={val.iconName}>{val.text}</i></a> 
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="footer-item our-address">
                            <div className="footer-inner">
                                <div className="footer-content">
                                    <div className="title">
                                        <h4>{ItemTitle}</h4>
                                    </div>
                                    <div className="content">
                                       
                                        <ul className='lab-ul office-address'>
                                            {
                                                ItemList.map((val,i)=>(
                                                    <li key={i}>
                                                        <a href="#">{val.text}</a>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="footer-item our-address">
                            <div className="footer-inner">
                                <div className="footer-content">
                                    <div className="title">
                                        <h4>{quickTitle}</h4>
                                    </div>
                                    <div className="content">
                                        <ul className='lab-ul office-address'>
                                            {
                                                quickList.map((val,i)=>(
                                                    <li key={i}>
                                                        <a href="#">{val.text}</a>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="footer-item our-address">
                            <div className="footer-inner">
                                <div className="footer-content">
                                    <div className="title">
                                        <h4>{tweetTitle}</h4>
                                    </div>
                                    <div className="content">
                                        <ul className='lab-ul office-address'>
                                            {
                                                tweetList.map((val,i)=>(
                                                    <li key={i}>
                                                        <i className={val.iconName}></i>
                                                        {val.desc}
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="footer-bottom justify-items-center">
            <div className="container ">
                <div className="section-wrapper">
                    <p className='footerText'>&copy;<Link to="/">ShopA2Z</Link>2024 @ All rights reserved by <a href="www.facebook.com/sabbirn53"><b>SHUVO</b></a></p>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer