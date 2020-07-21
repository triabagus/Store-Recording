import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../context';
import PropTypes from 'prop-types';

class Product extends Component {
    render() { 
        // const { id, title, img, price, inCart } = this.props.product;
        const { title ,img, price, inCart } = this.props.product;

        return ( 
            <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-2">
                <div className="card">
                    <div className="img-container p-5" onClick={() => console.log('you click image container')}>
                        <Link to="/details">
                            <img src={img} alt="product image" className="card-img-top" />
                        </Link>

                        <button className="cart-btn" disabled={inCart ? true : false} onClick={() =>console.log('add to cart')}>
                            {inCart ? (<p className="text-capitalize mb-0 ml-2" disabled>{" "}in cart</p>):<i className="fas fa-cart-plus" />}
                        </button>
                    </div>

                    {/* Cart Footer */}
                    <div className="card-footer d-flex justify-content-between">
                        <p className="align-self-center mb-0">
                            {title}
                        </p>
                        <h5 className="text-blue font-italic mb-0">
                            <span className="mr-1">$</span>
                            {price}
                        </h5>
                    </div>
                </div>
            </ProductWrapper>
         );
    }
}
 
export default Product;

Product.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number,
        img:PropTypes.string,
        title:PropTypes.string,
        price: PropTypes.number,
        inCart:PropTypes.bool
    }).isRequired
}

const ProductWrapper = styled.div`
    .card{
        border:0;
        transition:all 1s linear;
        border-radius:16px;
        overflow: hidden;
        box-shadow: 0 3rem 6rem rgba(0, 0, 0, .1);
    }
    
    .card-footer{
        background:transparent;
        border-top:transparent;
        transition:all 1s linear;
    }

    &:hover{
        .card{
            transform: translateY(-.5%);
            box-shadow: 0 4rem 8rem rgba(0, 0, 0, .2);
        }

        .card-footer{
            background:var(--mainWhite);
        }
    }

    .img-container{
        position:relative;
        overflow:hidden;
    }

    .card-img-top{
        transition:all 1s linear;
    }

    .img-container:hover .card-img-top{
        transform:scale(1.2);
    }

    .cart-btn{
        position:absolute;
        bottom:0;
        right:0;
        padding:0.4rem 0.6rem;
        background:var(--lightBlue);
        border:none;
        color:var(--mainWhite);
        font-size:1rem;
        border-radius:5rem 0 0 0;
        transform:translate(100%, 100%);
        transition:all 0.5s linear;
    }

    .cart-btn i{
        margin-left:10px;
    }

    .img-container:hover .cart-btn{
        transform:translate(0,0);
    }
`;