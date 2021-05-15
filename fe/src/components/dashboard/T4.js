import React, { Component } from "react";
import {addGroup, deleteGroupByLabel} from "../../actions/groupsActions";
import {connect} from "react-redux";
import {setGeneratedList} from "../../actions/generatedList";
import "./T3.css";
import {findCells} from "./functions";


export class T4 extends Component {

    constructor(props) {
        super(props);

    }



    onClickCell = (e) =>{
        console.log("HEEEEy")
    }

    render() {

        const t = ["8AM","8:30AM","9AM","9:30AM","10AM","10:30AM","11AM","11:30AM","12PM","12:30PM","1PM","1:30PM","2PM","2:30PM","3PM","3:30PM","4PM","4:30PM","5PM","5:30PM","6PM","6:30PM","7PM","7:30PM","8PM"]

        const outter = this.props.cell.map((row,ind) =>
            <tr>
                <td>{t[ind]}</td>
                {row.map((col) =>
                    <td style={{backgroundColor:col.color}}>{col.s_name} {col.g_name}</td>
                )}
            </tr>
        );

        return (
            <div> <table className="wholetable hover table-striped table-sm">

                <tr>
                    <th>#</th>
                    <th>Monday</th>
                    <th>Tuesday</th>
                    <th>Wednesday</th>
                    <th>Thursday</th>
                    <th>Friday</th>
                </tr>
                {outter}
            </table> </div>
        );
    }
}


const mapStateToProps = state =>{
    return {
        subjects: state.subs,
        groups:state.grps,
        lists:state.lists
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
)(T4);
