import React, { Component } from "react";
import {addGroup, deleteGroupByLabel} from "../../actions/groupsActions";
import {connect} from "react-redux";
import {setGeneratedList} from "../../actions/generatedList";
import {Card, Button, ListGroup, OverlayTrigger} from "react-bootstrap";
import "./T3.css";
import T4 from "./T4";
import {findCells} from "./functions";
import { exportComponentAsJPEG, exportComponentAsPDF, exportComponentAsPNG } from "react-component-export-image";
import GetAppIcon from '@material-ui/icons/GetApp';

import SaveIcon from '@material-ui/icons/Save';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import axios from "axios";

export class Modify extends Component {


    constructor(props) {
        super(props);

        let b = findCells(this.props.lists.list[this.props.selected.selected]);
        let bb = [...b];

        this.state = {
            cp : [...this.props.lists.list[this.props.selected.selected]],
            data: [...this.props.gbs.list],
            cell:bb
        }

        this.runner();


    }

    runner = () => {
        let data = this.state.data;
        let cp = this.state.cp;

        for(let i=0;i<data.length;++i) {
            for (let k = 0; k < data[i].length; ++k) {
                data[i][k].tcolor = "black";
                for (let j = 0; j < cp.length; ++j) {
                    if (data[i][k].s_name === cp[j].s_name && data[i][k].g_name === cp[j].g_name) {
                        console.log("REEEEED")
                        data[i][k].tcolor = "blue";
                    }
                }
                console.log(data[i][k]);
            }
        }

            let b = findCells(this.state.cp);
            let bb = [...b];

            this.setState({
                cp: cp,
                data: data,
                cell:bb
            });

    }

    saveData = () =>{

        console.log(this.props.auth.user.id)
        const sendingData={
            identity:this.props.auth.user.id,
            subjects:this.props.subjects.subjects,
            groups:this.props.groups.groups
        }

        console.log("sending id:")
        console.log(sendingData.identity)
        axios
            .post("/api/users/save/", sendingData).then(resp=>{

        })
            .catch(error=>{

            });
    }

    handleClick = (item,ind) =>{
        let data = this.state.data;
        let cp = this.state.cp;


        cp[ind] = {...item}
        let loc=ind;

        //check clashes
        for(let i=0;i<cp.length;++i){
            if(i!==loc && cp[i].day===cp[loc].day && ((cp[i].st < cp[loc].ft) && (cp[loc].st < cp[i].ft))){
                //delete clashed class
                cp[i] = {}
            }
        }

        this.setState({
            ...this.state,
            cp: cp,
            data: data
        });


        this.runner();

        setTimeout(() =>{
        }, 10);

    }



    render() {

        const data= this.state.data;
        const ref = React.createRef();


        const listSubjects = data.map((subject,i) =>
            <Card className={subject[0].color}   style={{ width: '25rem'}}>
            <Card.Header >{subject[0].s_name}</Card.Header>
            <ListGroup variant="flush">
                {subject.map((ind) =>
                    <ListGroup.Item action="true" style={{textAlign:"left !important",color:ind.tcolor}} onClick={() => {this.handleClick(ind,i)}}>
                        {ind.g_name}&nbsp;&nbsp;{ind.day}&nbsp;&nbsp;{ind.st}-{ind.ft}&nbsp;&nbsp;{ind.p_name}
                    </ListGroup.Item>)}
            </ListGroup>
        </Card>);


        return <div >


            <div style={{width: "100%"}}>
                    <div style={{ float:"left",display:"inline", width: "73%"}}>
                        <div ref={ref}>
                    <T4 cell={this.state.cell} />
                        </div>
                    </div>

                <div style={{textAlign:"center"}}>
                <button  onClick={this.saveData} ><SaveIcon fontSize={"large"}/>
                </button>
                <button id="download" onClick={() => exportComponentAsJPEG(ref)} ><GetAppIcon fontSize={"large"}/>
                </button>
                </div>



                    <div className="overflow-auto" style={{ float:"left",display:"inline",width:"27%",maxHeight: "1000px"}}>
                    {listSubjects}
                    </div>

                    <div style={{height:"200px"}}>

                    </div>

            </div>

        </div>
    }

}


const mapStateToProps = state =>{
    return {
        subjects: state.subs,
        groups:state.grps,
        lists:state.lists,
        gbs:state.gbs,
        auth: state.auth,
        selected:state.selected
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
)(Modify);
