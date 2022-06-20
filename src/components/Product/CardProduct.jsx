import React from 'react';
import { Link } from 'react-router-dom';

export default function CardProduct(props) {
   return (
      <>
         <div className="col-md-6  col-lg-3 d-flex flex-column productContainer">
            <div className="d-flex flex-column align-items-center justify-content-center cardProduct">
               <Link to={`/product-details/${props.id}`}>
                  <img className="imgProduct" key={props.picture} src={`${process.env.REACT_APP_HOST}${props.pict}`} alt="props-img" />
               </Link>
               <div className="productName" key={props.name}>
                  {props.name}
               </div>
               <div className="price-props" key={props.total}>
                  IDR. {props.total}
               </div>
            </div>
         </div>
      </>
   );
}
