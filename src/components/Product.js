import * as React from "react";

class Product extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <div className="large-3 small-6 columns">
            <img src="http://placehold.it/1000x1000&text=Thumbnail"/>
            <div className="panel">
                <h5>{this.props.title}</h5>
                <h6 className="subheader">{this.props.price}</h6>
            </div>
        </div>
    }

}

export default Product;
