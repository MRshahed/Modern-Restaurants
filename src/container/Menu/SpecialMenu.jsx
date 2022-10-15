import React from 'react';
import {images, data} from "../../constants";
import {SubHeading, MenuItem} from "../../components";
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className='app_specialMenu flex__center section_padding' id='speacialMenu'>
  <div className='app_specialMenu-title'>
    <SubHeading title="Menu that's fits your Palatte"/>
    <h1 className='headtext__cormorant'>Today's Speacial</h1>
  </div>

<div className='app_specialMenu-menu'>
  <div className='app_specialMenu-menu_wine flex__center'>
    <p className='app_specialMenu-menu_heading'>Wine & Beer</p>
     <div className='app_specialMenu-menu_items'>
      {data.wines.map((wine,index )=>(
       <MenuItem key={wine.title + index} title={wine.title}  price={wine.price} tags={wine.tags}/>
      ))}
     </div>
  </div>
   
   <div className='app_specialMenu-menu_img'>
    <img src={images.menu} alt="menu img"/>
   </div>

   <div className='app_specialMenu-menu_cocktails flex__center'>
    <p className='app_specialMenu-menu_heading'>Cocktails</p>
     <div className='app_specialMenu-menu_items'>
      {data.cocktails.map((item,index )=>(
        <MenuItem key={item.title + index} title={item.title}  price={item.price}  tags={item.tags}/>
      ))}
     </div>
  </div>

</div>
<div style={{marginTop:"15px"}}>
  <button className='custom__button' type='button'>View More</button>
</div>
  </div>
);

export default SpecialMenu;
