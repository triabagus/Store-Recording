import React from 'react';
import { Link } from 'react-router-dom';

function CartTotals({ value }){
    const { cartSubTotal, cartTax, cartTotal, clearCart} = value;
    return (  
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                        <Link to="/">
                            <button
                                className="btn btn-outline-danger text-uppercase mb-3 px-5" type="button"
                                onClick={() => clearCart()}
                            >
                                Clear Cart
                            </button>
                        </Link>

                        <p>
                            <span className="text-uppercase">Sub Total : </span>
                            <strong>${cartSubTotal}</strong>
                        </p>
                        <p>
                            <span className="text-uppercase">Tax : </span>
                            <strong>${cartTax}</strong>
                        </p>
                        <p>
                            <span className="text-uppercase">Total : </span>
                            <strong>${cartTotal}</strong>
                        </p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
 
export default CartTotals;