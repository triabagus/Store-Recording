import React, { Component } from 'react';

class Default extends Component {
    render() { 
        // console.log(this.props);
        return ( 
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto text-center text-purple text-uppercase pt-5">
                        <h5 className="display-4">Page Not Found</h5>
                        <div className="col-md-8 mx-auto text-center">
                            <img src="img/404.svg" className="img-fluid" />
                            <p className="mt-4">The request URL <span className="text-danger font-weight-bold">{this.props.location.pathname}</span>{" "}was not found.</p>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Default;