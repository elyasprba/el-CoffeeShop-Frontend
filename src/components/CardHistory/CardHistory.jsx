import React from 'react';

export const CardHistory = (props) => {
   return (
      <>
         <div className="col history-product-card-container">
            <div className="history-product-card">
               <div className="history-product-img-container">
                  <img src={`http://localhost:8080${props.pict}`} alt="coldbrew" className="history-product-img" />
               </div>
               <div className="history-product-info">
                  <div className="history-product-name">{props.name}</div>
                  <div className="history-product-price-status-container">
                     <div className="history-product-price-status">
                        <div className="history-product-price">IDR. {props.price}</div>
                        <div className="history-product-status">Delivered</div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};
