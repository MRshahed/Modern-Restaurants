import React from 'react';

import './Header.css';
import {SubHeading} from "../../components";
import {images} from "../../constants";

const Header = () => (
 <div className='app_header app__wrapper section__padding' id='home'>
  <div  className='app__wrapper_info'>
    <SubHeading title="Chase The New Flavor"/>
    <h1 className='app_header-h1'>The Key To Fine Dining</h1>
    <p className='p__opensans' style={{margin: "2rem 0"}}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
    <button type='button' className='custom__button'>Explore Menu</button>
  </div>
  <div className='app__wrapper_img'>
    <img src={images.welcome} alt="header img"
    />
  </div>
 </div>
);

export default Header;
