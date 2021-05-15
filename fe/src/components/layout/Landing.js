import React, { Component } from "react";
import {Nav, Navbar as Nbar} from "react-bootstrap";
import {Form, Button, ListGroup,CardGroup,Card,Row,Col} from 'react-bootstrap';
import loader_gif from "./sample.png";


class Landing extends Component {
    render() {
        return (
            <div>
            <Nbar bg="dark" variant="dark">
                <Nbar.Brand href="/">Timetable Generator</Nbar.Brand>
                <Nav className="mr-auto">
                </Nav>
                <Nav className="navbar-right">
                    <Nav.Link href="/register">Sign Up</Nav.Link>
                    <Nav.Link href="/login">Login</Nav.Link>

                </Nav>

            </Nbar>
                <CardGroup style={{width: "60%",margin: "auto"}}>


                    <Card   style={{ width: "20%" ,margin: "140px 25px 25px 25px",borderRadius: "25px"}}>
                        <Card.Header ><h1 style={{textAlign:"center"}} >Welcome to the timetable generator!</h1>
                            <h2 style={{textAlign:"center"}} >To get started, Log-in or Sign-up!</h2>
                        </Card.Header>
                        <Card.Footer>
                            <div style={{textAlign: "center"}}>
                            <img  src={loader_gif} alt="LOADING" width="90%"/>
                            </div>
                        </Card.Footer>
                    </Card>
                </CardGroup>
            </div>

        )
    }
}
export default Landing;
