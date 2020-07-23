import React, { Component } from 'react';
import styled from 'styled-components';
import { ProductConsumer } from '../context';
import { ButtonContainers } from './Button';
import { Link } from 'react-router-dom';

class Modal extends Component {
    render() { 
        return ( 
            <ProductConsumer>
                {value => { 
                    const { modalOpen, closeModal } = value;
                    const { img, title, price } = value.modalProduct;

                    if (!modalOpen) {
                        return null
                    } else {
                        return (
                            <ModalContainer>
                                <div className="container">
                                    <div className="row">
                                        <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize px-4 py-3">
                                            <img src={img} className="img-fluid" alt="product" />
                                            <h5 className="text-purple">{title}</h5>
                                            <h2 className="text-purple text-capitalize mt-3">
                                                <span>$</span>{price}
                                            </h2>
                                            <Link to="/">
                                                <ButtonContainers onClick={() => { closeModal()}}>
                                                    Continue Shopping
                                                </ButtonContainers>
                                            </Link>
                                            <Link to="/cart">
                                                <ButtonContainers cart onClick={() => { closeModal()}}>
                                                    Go To Cart
                                                </ButtonContainers>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </ModalContainer>
                        );
                    }

                }}
            </ProductConsumer>
        );
    }
}
 
export default Modal;

const ModalContainer = styled.div`
    position :fixed;
    top:0;
    left:0;
    right:0;
    bottom:0;
    background:rgba(0,0,0,0.3);
    display: flex;
    align-items:center;
    justify-content:center;

    #modal{
        box-shadow:-6px -6px 10px rgba(0,0,0,0.2), 6px 6px 10px rgba(0,0,0,0.2);
        border-radius:24px!important;
        background:var(--mainWhite);
    }
`;