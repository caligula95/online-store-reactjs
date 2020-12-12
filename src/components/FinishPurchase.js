import * as React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import axios from "axios";
import {url} from "../constant/constant";

class FinishPurchase extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            show: true, userName: '', userSurname: '',
            email: '', phone: '', address: '', comment: '', password: '', createAccount: false
        }
    }

    handleClose = () => {
        this.setState({show: false})
    }

    finishPurchase = () => {
        let products = localStorage.getItem("products");
        axios.post(url + "/finishPurchase", {
            productIds: JSON.parse(products),
            userName: this.state.userSurname,
            userSurname: this.state.userSurname,
            email: this.state.email,
            phone: this.state.phone,
            address: this.state.address,
            comment: this.state.comment,
            password: this.state.password
        }).then(res => {
            alert("Thanks for your purchase. Our manager will contact you soon.")
            localStorage.clear();
            window.location.reload();
        }).catch(error => {
            alert("Something went wrong! Please try again or contact us")
        })
    };

    handleUserName = (e) => {
        this.setState({userName: e.target.value})
    }

    handleUserSurname = (e) => {
        this.setState({userSurname: e.target.value})
    }

    handleUserEmail = (e) => {
        this.setState({email: e.target.value})
    }

    handleUserPhone = (e) => {
        this.setState({phone: e.target.value})
    }

    handleUserAddress = (e) => {
        this.setState({address: e.target.value})
    }

    handleUserComment = (e) => {
        this.setState({comment: e.target.value})
    }

    handlePassword = (e) => {
        this.setState({password: e.target.value})
    }

    handleCheckBox = (e) => {
        this.setState({createAccount: e.target.checked})
    }

    render() {
        return (
            <Modal show={this.state.show} onHide={this.handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Finish purchase</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input onChange={this.handleUserName} placeholder="Enter your name"/>
                    <input onChange={this.handleUserSurname} placeholder="Enter your surname"/>
                    <input onChange={this.handleUserEmail} placeholder="Enter your email"/>
                    <input onChange={this.handleUserPhone} placeholder="Enter your phone"/>
                    <input onChange={this.handleUserAddress} placeholder="Enter your address"/>
                    <textarea onChange={this.handleUserComment} placeholder="Enter your comment"/>
                    <input onChange={this.handleCheckBox} type="checkbox" id="create_account_id" name="create_account"/>
                    <label htmlFor="create_account_id">Create a personal account</label><br/>
                    {this.state.createAccount ?
                        <input type="password" onChange={this.handlePassword} placeholder="Please enter a new password"/> : ""}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={this.finishPurchase}>
                        Finish purchase
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    }

}

export default FinishPurchase;
