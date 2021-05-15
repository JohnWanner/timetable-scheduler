import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { register } from "../../actions/authActions";
import classnames from "classnames";
import {Nav, Navbar as Nbar} from "react-bootstrap";
import {Form, Button, ListGroup,CardGroup,Card,Row,Col} from 'react-bootstrap';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "", password: "", email: "",
      password2: "",
      errors: {}
    };
  }

  componentDidMount() {
    // redirect to dashboard if logged in
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.register(newUser, this.props.history);
  };

  render() {
    const { errors } = this.state;

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


          <Card   style={{ width: "50%" ,margin: "180px 25px 25px 25px",borderRadius: "25px"}}>
            <Card.Header ><h1 style={{textAlign:"center"}} >Register</h1></Card.Header>
            <Card.Footer>

              <Form noValidate onSubmit={this.onSubmit}>

                <Form.Group controlId="formBasicText">
                  <Form.Label style={{fontSize:"25px"}}>Name</Form.Label>
                  <Form.Control type="text" onChange={this.onChange}
                                style={{fontSize:"25px"}}
                                value={this.state.name}
                                error={errors.name}
                                id="name"
                                className={classnames("", {
                                  invalid: errors.name
                                })}/>
                  <span className="red-text" style={{fontSize:"25px"}}>{errors.name}</span>

                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                  <Form.Label style={{fontSize:"25px"}}>Email address</Form.Label>
                  <Form.Control type="email" style={{fontSize:"25px"}} onChange={this.onChange}
                                value={this.state.email}
                                error={errors.email}
                                id="email"
                                className={classnames("", {
                                  invalid: errors.email
                                })}/>
                  <span className="red-text" style={{fontSize:"25px"}}>{errors.email}</span>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label style={{fontSize:"25px"}}>Password</Form.Label>
                  <Form.Control type="password"  style={{fontSize:"25px"}} onChange={this.onChange}
                                value={this.state.password}
                                error={errors.password}
                                id="password"
                                className={classnames("", {
                                  invalid: errors.password
                                })}/>
                  <span style={{fontSize:"25px"}} className="red-text">{errors.password}</span>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label style={{fontSize:"25px"}}>Confirm Password</Form.Label>
                  <Form.Control type="password"  style={{fontSize:"25px"}}
                                onChange={this.onChange}
                                value={this.state.password2}
                                error={errors.password2}
                                id="password2"
                                className={classnames("", {
                                  invalid: errors.password2
                                })}/>
                  <span style={{fontSize:"25px"}} className="red-text">{errors.password2}</span>
                </Form.Group>


                <Form.Group controlId="formBasicCheckbox">
                </Form.Group>
                <Button id="reg-button" variant="primary" type="submit" className="btn btn-large waves-effect waves-light hoverable blue accent-3">
                  Register
                </Button>
              </Form>

            </Card.Footer>
          </Card>
        </CardGroup>
        </div>
    );
  }
}

Register.propTypes = {
  register: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { register }
)(withRouter(Register));
