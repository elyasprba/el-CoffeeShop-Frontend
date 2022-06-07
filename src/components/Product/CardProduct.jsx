import React from 'react';
import { Link } from 'react-router-dom';

export default function CardProduct(props) {
   return (
      <>
         <div className="col-md-6  col-lg-3 d-flex flex-column productContainer">
            <div className="d-flex flex-column align-items-center justify-content-center cardProduct">
               <Link to={`/product-details/${props.id}`}>
                  <img className="imgProduct" key={props.picture} src={`http://localhost:8080${props.pict}`} alt="props-img" />
               </Link>
               <div className="productName" key={props.name}>
                  {props.name}
               </div>
               <div className="price-props" key={props.price}>
                  IDR. {props.price}
               </div>
            </div>
         </div>
      </>
   );
}
