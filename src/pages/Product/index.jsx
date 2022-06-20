import React, { Component } from 'react';
import axios from 'axios';
import Header from '../../components/Product/Header';
import Footer from '../../components/Footer/Footer';
import { Link } from 'react-router-dom';
import './Product.css';
import withSearchParams from '../../helper/withSerchParams';
import { FilterSquare, FilterSquareFill, ArrowLeftCircle, ArrowRightCircle } from 'react-bootstrap-icons';

class Product extends Component {
   constructor(props) {
      super(props);
      this.state = {
         product: [],
         categoryActive: 'all',
         doAxios: false,
         sort: 'price',
         order: 'asc',
         page: 1,
         limit: '12',
         totalPage: '1',
         searchName: '',
         setSearchParams: this.props.setSearchParams.bind(this),
         error: false,
         errMsg: '',
      };
   }

   componentDidMount() {
      document.title = 'Product';
      this.state.setSearchParams('');
      axios
         .get(`${process.env.REACT_APP_HOST}/products`)
         .then((result) => {
            this.setState({
               product: result.data.data,
               totalPage: result.data.meta.totalPage,
            });
         })
         .catch((error) => {
            console.log(error);
         });
   }

   componentDidUpdate() {
      if (this.state.doAxios) {
         let params = '';
         let url = `${process.env.REACT_APP_HOST}/products`;
         if (this.state.categoryActive === 'all') {
            url += `?page=${this.state.page}&limit=${this.state.limit}&`;
            params += `page=${this.state.page}&limit=${this.state.limit}&`;
         }

         if (this.state.categoryActive === 'favorite') {
            url += `/favorite?`;
            params += 'category=favorite&';
         }

         if (this.state.categoryActive !== 'all' && this.state.categoryActive !== 'favorite') {
            url += `?category_name=${this.state.categoryActive}&page=${this.state.page}&limit=${this.state.limit}&`;
            params += `category=${this.state.categoryActive}&page=${this.state.page}&limit=${this.state.limit}&`;
         }

         if (this.state.searchName !== '') {
            url += `name=${this.state.searchName}&`;
            params += `name=${this.state.searchName}&`;
         }

         url += `sort=${this.state.sort}&order=${this.state.order}`;
         params += `sort=${this.state.sort}&order=${this.state.order}`;
         this.state.setSearchParams(params);

         axios
            .get(url)
            .then((result) => {
               this.setState({
                  product: result.data.data,
                  totalPage: !result.data.meta ? '1' : result.data.meta.totalPage,
                  error: false,
                  errMsg: '',
               });
            })
            .catch((error) => {
               console.log(error);
               this.setState({
                  error: true,
                  errMsg: error.response.data.err,
               });
            });
         this.setState({
            doAxios: false,
         });
      }
   }

   render() {
      return (
         <>
            <Header />
            <main className="row body">
               <div className="col-sm-4 row sideBar">
                  <div className="promoTitle">
                     <h3>Promo for you</h3>
                     <p>Coupons will be updated every weeks.</p>
                     <p>Check them out</p>
                  </div>
                  <div className="layer">
                     <div className="imgContainer">
                        <img src={require('../../assets/products/beef.png')} alt="products-img" />
                        <div className="discount">
                           <h2>Beef Spaghetti</h2>
                           <h2>20% OFF</h2>
                           <p>Buy 1 Choco Oreo and get 20% off</p>
                           <p>for Beef Spaghetti</p>
                           <div className="dashLine"></div>
                           <div className="coupon d-flex justify-content-around flex-column align-items-center">
                              <div className="p2">COUPON CODDE</div>
                              <h1>FNPR15RG</h1>
                              <p>Valid until October 10th 2022</p>
                           </div>
                        </div>
                     </div>
                     <div className="blackLayer"></div>
                     <div className="brownLayer"></div>
                  </div>
                  <div className="apply">
                     <div className="applyCoupon">Apply Coupon</div>
                  </div>
                  <div className="terms">
                     <h5>Terms and Condition</h5>
                     <p>1. You can only apply 1 coupon per day</p>
                     <p>2. It only for dine in</p>
                     <p>3. Buy 1 get 1 only for new user</p>
                     <p>4. Should make member card to apply coupon</p>
                  </div>
               </div>
               <div className="col-sm-8 content">
                  <div className="d-flex justify-content-around productHeader">
                     <div
                        className={this.state.categoryActive === 'favorite' ? 'headerItem-active' : 'headerItem'}
                        onClick={() => {
                           this.setState({
                              doAxios: true,
                              categoryActive: 'favorite',
                           });
                        }}
                     >
                        Favorit Product
                     </div>
                     <div
                        className={this.state.categoryActive === 'coffee' ? 'headerItem-active' : 'headerItem'}
                        onClick={() => {
                           this.setState({
                              doAxios: true,
                              categoryActive: 'coffee',
                           });
                        }}
                     >
                        Coffee
                     </div>
                     <div
                        className={this.state.categoryActive === 'non coffee' ? 'headerItem-active' : 'headerItem'}
                        onClick={() => {
                           this.setState({
                              doAxios: true,
                              categoryActive: 'non coffee',
                           });
                        }}
                     >
                        Non Coffee
                     </div>
                     <div
                        className={this.state.categoryActive === 'food' ? 'headerItem-active' : 'headerItem'}
                        onClick={() => {
                           this.setState({
                              doAxios: true,
                              categoryActive: 'food',
                           });
                        }}
                     >
                        Foods
                     </div>
                     <div
                        className={this.state.categoryActive === 'all' ? 'headerItem-active' : 'headerItem'}
                        onClick={() => {
                           this.setState({
                              doAxios: true,
                              categoryActive: 'all',
                           });
                        }}
                     >
                        All
                     </div>
                     <div className="dropdown-filter">
                        {/* <label for="cars"></label> */}
                        <select
                           name="cars"
                           id="cars"
                           onClick={(e) => {
                              this.setState({
                                 sort: e.target.value,
                                 doAxios: true,
                              });
                           }}
                        >
                           <option value="price">Price</option>
                           <option value="category_name">Category</option>
                           <option value="name">Name</option>
                        </select>
                     </div>
                     <div>
                        {this.state.order === 'asc' ? (
                           <FilterSquare
                              onClick={() => {
                                 this.setState({
                                    order: 'desc',
                                    doAxios: true,
                                 });
                              }}
                           />
                        ) : (
                           <FilterSquareFill
                              onClick={() => {
                                 this.setState({
                                    order: 'asc',
                                    doAxios: true,
                                 });
                              }}
                           />
                        )}
                     </div>
                  </div>

                  <div className="row favoriteProduct">
                     {this.state.product.map((product) => (
                        <div className="col-md-6  col-lg-3 d-flex flex-column productContainer">
                           <div className="d-flex flex-column align-items-center justify-content-center cardProduct">
                              <Link to={`/product-details/${product.id}`}>
                                 <img className="imgProduct" src={`${process.env.REACT_APP_HOST}${product.pict}`} alt="product-img" />
                              </Link>
                              <div className="productName">{product.name}</div>
                              <div className="price-product">IDR. {product.price}</div>
                           </div>
                        </div>
                     ))}
                     <section className="paginasi-product">
                        <ArrowLeftCircle
                           className="paginasi-product-icon"
                           onClick={() => {
                              window.scroll(0, 0);
                              this.setState({
                                 page: this.state.page <= 1 ? 1 : this.state.page - 1,
                                 doAxios: true,
                              });
                           }}
                        />
                        <div className="page-number">{this.state.page}</div>
                        <ArrowRightCircle
                           className="paginasi-product-icon"
                           onClick={() => {
                              window.scroll(0, 0);
                              this.setState({
                                 page: this.state.page + 1,
                                 doAxios: true,
                              });
                           }}
                        />
                     </section>
                  </div>
                  <button type="button" className="create-newprod">
                     <Link to={'/new-product'} className="link-newprod">
                        Create Product
                     </Link>
                  </button>
               </div>
            </main>

            <Footer />
         </>
      );
   }
}

export default withSearchParams(Product);
