import React from 'react';

function CartItem({ item, value }) {
    const { id, title, img, price, total, count } = item;
    const { increment, decrement, removeItem } = value;

    return ( 
        <div className="row my-2 text-capitalize text-center">
            <div className="col-10 mx-auto col-lg-2">
                <img src={img}
                    style={{ width: '5rem', height: '5rem' }} 
                className="img-fluid" 
                alt="product"
                />
            </div>

            <div className="col-10 mx-auto col-lg-2 text-purple">
                <strong><span className="d-lg-none text-dark">Product</span> {title}</strong>
            </div>

            <div className="col-10 mx-auto col-lg-2 text-purple">
                <strong><span className="d-lg-none text-dark">Price</span> ${price}</strong>
            </div>

            <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                <div className="d-flex justify-content-center">
                    <div>
                        <span className="btn btn-black mx-1" onClick={()=>decrement(id)}>-</span>
                        <span className="btn btn-black mx-1">{count}</span>
                        <span className="btn btn-black mx-1" onClick={() => increment(id)}>+</span>
                    </div>
                </div>
            </div>

            <div className="col-10 mx-auto col-lg-2">
                <div className="cart-icon-remove" onClick={()=>removeItem(id)}>
                    <i className="fas fa-trash" />
                </div> 
            </div>

            <div className="col-10 mx-auto col-lg-2 text-purple">
                <strong className="text-purple">Total Item : ${total}</strong> 
            </div>

        </div>
     );
}
 
export default CartItem;