import React from 'react';
import { useState } from 'react';


function DisplayData({ iteamfood}) {

    const [showText, setShowText] = useState(false); 

    const ShoeTextClick = (element) => {
        element.showMore = !element.showMore
        setShowText(!showText)
    }
    
    return(
       <div className="main_block">
        {iteamfood.map((element => {
            const {id, name, describe, price, image, type, Select, showMore} = element;
            return(
                <div className="product-card" key={id}>
    
                    <div className="name_div cont">
                        <h2>{name}</h2>
                    </div>
    
                    <div className="describe_div cont">
                       <p>
                            {showMore ? describe : describe.substring(0, 40) + "..."}
                            <button className='btnSwitch' onClick={() => ShoeTextClick(element)}>{showMore ? "Show less" : "Show more"}</button>
                       </p>
                    </div>
    
                    <div className="price_div cont">
                        {price}
                    </div>
    
                    <div className="image_div cont">
                        <img src={image} width="200px" height="200px"/>
                    </div>
    
                    <div className="button_div cont">
                        <button id="btn" onClick={() => {alert("New Closed")}}>Заказать</button>
                    </div>
                </div>   
            )
        } ))}
       </div>
    );
    }
    
    export default DisplayData;