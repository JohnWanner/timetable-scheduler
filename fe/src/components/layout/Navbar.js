import React, { Component } from "react";
import {Navbar as Nbar,Nav} from "react-bootstrap";
import "../../App.scss";
import { logoutUser } from "../../actions/authActions";
import { connect } from "react-redux";

import {addSubject} from '../../reducers/index';
import {deleteSubjectByName} from "../../actions/subjectsActions";


export class Navbar extends Component {


    onLogoutClick = e => {
        e.preventDefault();
    };

  render() {

    return(
        <Nbar bg="dark" variant="dark" >
          <Nbar.Brand href="/">Timetable Generator</Nbar.Brand>
          <Nav className="mr-auto">
          </Nav>
          <Nav className="navbar-right">
            <Nav.Link href="/register">Sign Up</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
              <Nav.Link onClick={this.onLogoutClick}>Logout</Nav.Link>

          </Nav>

        </Nbar>
    );
  }
}

const mapStateToProps = state =>{
    return {
        auth: state.auth
    }
}


const mapDispatchToProps = dispatch =>{
    return{
        addSubject: (subject) => dispatch(addSubject(subject)),
        deleteSubjectByName: (name) => dispatch(deleteSubjectByName(name))

    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Navbar);

