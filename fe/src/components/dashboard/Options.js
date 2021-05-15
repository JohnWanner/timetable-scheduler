import React, { Component } from "react";
import {connect} from "react-redux";
import {addGroup, deleteGroupByLabel} from "../../actions/groupsActions";
import {Alert} from "react-bootstrap";
import Switch from "react-switch";
import Professors from "./Professors";
import MinBreaks from "./MinBreaks";

export class Options extends Component {
    constructor(props) {
        super(props);
        this.state = { checked: false };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(checked) {
        this.setState({ checked });
    }



    render() {
        return <div className="overflow-auto" style={{height: "600px"}}>

            <Alert variant="success" style={{width:"80%",margin: "auto"}}>

                <Alert.Heading>You have {this.props.lists.list.length} tables to choose from</Alert.Heading>
                <p>
                    Narrow down your choices by adding constraints
                </p>



            </Alert>

            <label>
                <Switch onChange={this.handleChange} checked={this.state.checked} />
            </label>

            <div style={{width:"200px"}}>
            <Professors></Professors>
                <MinBreaks></MinBreaks>
            </div>

            </div>;
    }
}

const mapStateToProps = state =>{
    return {
        subjects: state.subs,
        groups:state.grps,
        lists:state.lists,
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        addGroup: (group) => dispatch(addGroup(group)),
        deleteGroupByLabel: (label) => dispatch(deleteGroupByLabel(label))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Options);



