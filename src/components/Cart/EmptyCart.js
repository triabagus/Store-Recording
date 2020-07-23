import React from 'react';

function EmptyCart() {
    return ( 
        <div className="container mt-5">
            <div className="row">
                <div className="col-10 mx-auto text-center text-title">
                    <h3>Your Cart Is Currently Empty</h3>
                    <div className="col-md-8 mx-auto text-center">
                        <img src="img/empty-cart.svg" className="img-fluid rounded" />
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default EmptyCart;