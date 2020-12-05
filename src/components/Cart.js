import * as React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import FinishPurchase from "./FinishPurchase";

class Cart extends React.Component {

    constructor(props) {
        super(props);
        this.state = {show: true, productsList: [], finishPurchaseForm: false}
    }

    componentDidMount() {
        this.handleDisplayProducts();
    }

    handleDisplayProducts = () => {
        let products = localStorage.getItem("products");
        if (products != null) {
            products = JSON.parse(products);
            this.setState({productsList: products})
        }
    }

    handleClose = () => {
        this.setState({show: false})
        this.props.closeModal();
    }

    clearCart = () => {
        localStorage.clear();
    }

    finishPurchase = () =>{
        this.setState({finishPurchaseForm: true})
    };

    render() {
        if(this.state.finishPurchaseForm){
            return <FinishPurchase/>
        }else{
            return (
                <Modal show={this.state.show} onHide={this.handleClose} animation={false}>
                    <Modal.Header closeButton>
                        <Modal.Title>Cart</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <table>
                            <tr>
                                <th>Title</th>
                                <th>Price</th>
                                <th></th>
                            </tr>
                            {this.state.productsList.map(product => (
                                <tr>
                                    <td>{product.title}</td>
                                    <td>{product.price}</td>
                                    <td>X</td>
                                </tr>
                            ))}

                        </table>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
                        </Button>
                        <Button variant="secondary" onClick={this.clearCart}>
                            Clear cart
                        </Button>
                        <Button variant="primary" onClick={this.finishPurchase}>
                            Finish purchase
                        </Button>
                    </Modal.Footer>
                </Modal>
            );
        }
    }

}

export default Cart;
