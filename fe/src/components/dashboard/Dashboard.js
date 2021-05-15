import React, { Component } from "react";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import Stepper from "./Stepper";
import {addSubject} from "../../actions/subjectsActions";
import {Nav, Navbar as Nbar} from "react-bootstrap";
import axios from "axios";
import {initSubArray} from "../../actions/subjectsActions";

class Dashboard extends Component {
    constructor(props) {
        super(props);
    }
    initializeData = () =>{
        const sendingData={
            identity:this.props.auth.id
        }
        axios
            .post("/api/users/init/", sendingData).then(resp=>{
            console.log(resp.data);
            this.props.initSubArray(resp.data)
        })
            .catch(error=>{
            });
    }

  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    return (
        <div>
            <Nbar bg="dark" variant="dark" >
                <Nbar.Brand href="/">Timetable Generator</Nbar.Brand>
                <Nav className="mr-auto">
                </Nav>
                <Nav className="navbar-right">
                    <Nav.Link onClick={this.onLogoutClick}>Logout</Nav.Link>
                </Nav>
            </Nbar>
            <Stepper/>
        </div>
    );
  }
}

const mapStateToProps = state =>{
    return {
        subjects: state.subs,
        auth: state.auth
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        addSubject: () => dispatch(addSubject()),
        logoutUser: () => dispatch(logoutUser()),
        initSubArray: (subs) => dispatch(initSubArray(subs))
    }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);