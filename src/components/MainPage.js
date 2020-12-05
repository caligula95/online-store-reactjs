import * as React from "react";
import ProductsPage from "./ProductsPage";
import Cart from "./Cart";

class MainPage extends React.Component {

    constructor() {
        super();
        this.state = {openCart: false}
    }

    openCart = () => {
        this.setState({openCart: true})
    }

    closeCart = () =>{
        this.setState({openCart: false})
    }

    render() {
        return <div className="row">
            {this.state.openCart ? <Cart closeModal={this.closeCart}/> : ""}
            <div className="large-12 columns">
                <div className="logo">
                    <h1>Online store</h1>
                </div>

                <div className="row">
                    <div className="large-12 columns">

                        <nav className="top-bar data-topbar">
                            <ul className="title-area">
                                <li className="name">
                                    <h1>
                                        <a href="#">
                                            Welcome to our online store
                                        </a>
                                    </h1>
                                </li>
                                <li className="toggle-topbar menu-icon"><a href="#"><span>menu</span></a></li>
                            </ul>

                            <section className="top-bar-section">
                                <ul className="right">
                                    <li className="divider"></li>
                                    <li className="has-dropdown">
                                        <a href="#">Login</a>
                                    </li>
                                    <li className="divider"></li>
                                    <li className="has-dropdown">
                                        <a data-toggle="modal" data-target="#cart" href="#"
                                           onClick={() => this.openCart()}>Cart </a>
                                    </li>
                                </ul>
                            </section>
                        </nav>
                    </div>
                </div>

                <ProductsPage/>

            </div>
        </div>
    }

}

export default MainPage;
