import React, { Component } from "react";
import {addGroup, deleteGroupByLabel} from "../../actions/groupsActions";
import {connect} from "react-redux";
import {setGeneratedList} from "../../actions/generatedList";
import "./T3.css";
import loader_gif from "./l1.gif";

import S5 from "./Select";



export class Loader extends Component {


    constructor() {
        super();
        this.state = {
            isLoading: true
        }
    }

    componentDidMount() {

        setTimeout(() => {
            console.log('Hello, World!')
            this.setState({isLoading: false});
        }, 1000);

    }


    render() {

        return (
            this.state.isLoading ?<img src={loader_gif} alt="LOADING" width="300" height="300"/>:<S5/>
            )
    }

}
const mapStateToProps = state =>{
    return {
        subjects: state.subs,
        groups:state.grps,
        lists:state.lists,
        gbs:state.gbs
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        addGroup: (group) => dispatch(addGroup(group)),
        deleteGroupByLabel: (label) => dispatch(deleteGroupByLabel(label)),
        setGeneratedList: (list) => dispatch(setGeneratedList(list))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Loader);

