import React, { Component } from "react";
import _ from 'lodash';
import {addGroup, deleteGroupByLabel} from "../../actions/groupsActions";
import {connect} from "react-redux";
import {setGeneratedList} from "../../actions/generatedList";
import {setGroupBySubject} from "../../actions/groupBySubject";
import {check, minBreak, recursiveFor} from "./functions";



var Deque = require("collections/deque");

export class S4 extends Component {

    constructor(props) {
        super(props);

        let rawData = this.props.groups.groups; // [[{},{},{}],[{},{},{}]]
        const categorizedData = _.groupBy(rawData, 's_name');
        let arrayData = Object.keys(categorizedData)// [{{S1G1},{S1G2},{S1G3}},{{S2G1},{S2G2}]
            .map(function(key) {
                return categorizedData[key];
            });

        this.props.setGroupBySubject(arrayData);

        var deque = new Deque();
        let everyComb=[];
        recursiveFor(deque,arrayData, arrayData.length,everyComb);
        this.state ={
            allchoices: [...everyComb]
        }
        //from here checking for duplication
        let noClashes = check(everyComb);
        this.props.setGeneratedList(noClashes);

        if(this.props.minBreakIsEnabled){
            minBreak("08:00","15:00","17:30","20:00",this.props.minBreakValue);
        }
        else{
            minBreak("08:00","15:00","17:30","20:00",0);
        }
    }







    render() {

        return <div></div>
    }
}

const mapStateToProps = state =>{
    return {
        subjects: state.subs,
        groups:state.grps,
        lists:state.lists,
        gbs:state.gbs,
        minBreakValue: state.minBreak.value,
        minBreakIsEnabled: state.minBreak.isEnabled
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        addGroup: (group) => dispatch(addGroup(group)),
        deleteGroupByLabel: (label) => dispatch(deleteGroupByLabel(label)),
        setGeneratedList: (list) => dispatch(setGeneratedList(list)),
        setGroupBySubject: (list) => dispatch(setGroupBySubject(list))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(S4);
