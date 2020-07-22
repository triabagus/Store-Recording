import React from 'react';

function Title({ name , title }){
    return ( 
        <div className="row">
            <div className="col-10 mx-auto my-1 text-center text-title">
                <h1 className="text-capitalize font-weight-bold">
                    {name} <strong className="text-purple"> {title} </strong>
                </h1>
            </div>
        </div>
    );
}
 
export default Title;