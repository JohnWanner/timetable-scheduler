import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";
import {Button, Card, CardGroup, Form} from "react-bootstrap";
import {Nav, Navbar as Nbar} from "react-bootstrap";


class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
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
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }

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

    const userInfo = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginUser(userInfo);
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


          <Card   style={{ width: "60%" ,margin: "180px 25px 25px 25px",borderRadius: "25px"}}>
            <Card.Header ><h1 style={{textAlign:"center"}} >Login</h1></Card.Header>
            <Card.Footer>



              <Form noValidate onSubmit={this.onSubmit}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label style={{fontSize:"25px"}}>Email address</Form.Label>
                  <Form.Control type="email" style={{fontSize:"25px"}} onChange={this.onChange}
                                value={this.state.email}
                                error={errors.email}
                                id="email"
                                className={classnames("", {
                                  invalid: errors.email || errors.emailnotfound
                                })}/>
                  <span className="red-text" style={{fontSize:"25px"}}>
                  {errors.email}
                    {errors.emailnotfound}
                </span>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label style={{fontSize:"25px"}}>Password</Form.Label>
                  <Form.Control type="password" style={{fontSize:"25px"}} onChange={this.onChange}
                                value={this.state.password}
                                error={errors.password}
                                id="password"
                                className={classnames("", {
                                  invalid: errors.password || errors.passwordincorrect
                                })}/>
                  <span className="red-text" style={{fontSize:"25px"}}>
                  {errors.password}
                    {errors.passwordincorrect}
                </span>
                </Form.Group>
                <Button variant="primary" type="submit" className="btn btn-large waves-effect waves-light hoverable blue accent-3">
                  Login
                </Button>
              </Form>

            </Card.Footer>
          </Card>
        </CardGroup>
        </div>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);

