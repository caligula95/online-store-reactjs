import * as React from "react";

class Product extends React.Component {

    constructor(props) {
        super(props);
    }

    addToCart = (product) => {
        let productsList = [];
        let products = localStorage.getItem("products");
        if (products == null) {
            productsList.push(product);
        }else{
            productsList = JSON.parse(products);
            productsList.push(product);
        }
        localStorage.setItem("products", JSON.stringify(productsList));
        alert("You successfully added product to the cart!");
    }

    render() {
        return <div className="large-3 small-6 columns">
            <img src="http://placehold.it/1000x1000&text=Thumbnail"/>
            <div className="panel">
                <h5>{this.props.product.title}</h5>
                <h6 className="subheader">{this.props.product.price}</h6>
                <button onClick={() => this.addToCart(this.props.product)}>Add to cart</button>
            </div>
        </div>
    }

}

export default Product;
