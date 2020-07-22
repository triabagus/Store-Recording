import React, { Component } from 'react';
import { ProductConsumer } from '../context';
import { ButtonContainers } from './Button';

class Details extends Component {
    render() { 
        return ( 
            <ProductConsumer>
                {value => { 
                    const { id, company, img, info, price, title, inCart } = value.detailProduct;
                    return (
                        <div className="container py-3">
                            {/* product info */}
                            <div className="row">
                                <div className="col-10 mx-auto col-md-6 my-3">
                                    <img src={img} alt="product" className="img-fluid" />
                                </div>
                                {/* product text */}
                                <div className="col-10 mx-auto col-md-6 my-3">
                                    <h3 className="text-dark font-weight-bold">{title}</h3>
                                    <span className="text-uppercase badge badge-info">
                                        {company}
                                    </span>
                                    <h2 className="text-purple text-capitalize mt-3">
                                        <span>$</span>{price}
                                    </h2>
                                    {/* buttons */}
                                    <div>
                                        <ButtonContainers disabled={inCart?true:false}>
                                            <span className="cart text-capitalize">
                                                {inCart ? "inCart" : <div><i className="fas fa-cart-plus" /> add to cart</div>}
                                            </span>
                                        </ButtonContainers>
                                    </div>
                                    {/* end buttons */}
                                    <p className="text-detail lead">
                                        {info}
                                    </p>
                                </div>
                                {/* end product text */}
                            </div>
                            {/* end product info */}
                        </div>
                    )
                }}
            </ProductConsumer>
         );
    }
}
 
export default Details;