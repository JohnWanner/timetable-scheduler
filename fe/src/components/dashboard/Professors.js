import SortableList from 'react-sortable-list'
import React, { Component } from 'react'
import {Card, ListGroup,CardGroup} from "react-bootstrap"
import Switch from "react-switch";
import {setMinBreak} from "../../actions/minBreakActions";
import {connect} from "react-redux";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import {setProfPref} from "../../actions/profPrefActions";
import {rearrangeProf} from "../../actions/profPrefActions";
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';


class Professors extends Component {
    constructor(props) {
        super(props);
            let plist = this.fetchProfessors();
            this.props.rearrangeProf(plist);
        this.handleChange = this.handleChange.bind(this);

    }

    handleChange(checked) {
        console.log(this.state.colors)
    }

    fetchProfessors = () => {
        const plist = this.props.groups.groups.map((group,index) => group.p_name);
        const unique_plist = [...new Set(plist)];
        console.log(unique_plist)
        return unique_plist;
    }

    handle = () =>{
        console.log("handler")
    }

    render() {

        const items = this.props.profPrefList;
        const listItems = items.map((item,index) =>

            <ListGroup.Item key={index} action="false">
                ・&nbsp;&nbsp;&nbsp;&nbsp;{item}
                <span style={{display:"block",float:"right",width:"10%",marginLeft:"10px"}}><ArrowDropUpIcon onClick={() => {
                    let copy = [...this.props.profPrefList];
                    if(index!==0){
                        let tmp = copy[index-1];
                        copy.splice(index-1,1,copy[index]);
                        copy.splice(index,1,tmp);
                        console.log(copy);
                        this.props.rearrangeProf(copy)
                        if(this.props.profPrefIsEnabled) {
                            setTimeout(() => {
                                this.props.refresh();
                            }, 10);
                        }
                    };

                }}/></span>
                <span style={{display:"block",float:"right",width:"10%",marginLeft:"20px"}}>
                <ArrowDropDownIcon id="arrow_down" onClick={() => {
                    let copy = [...this.props.profPrefList];
                    if (index !== copy.length-1) {
                        let tmp = copy[index + 1];
                        copy.splice(index +1, 1, copy[index]);
                        copy.splice(index, 1, tmp);
                        console.log(copy);
                        this.props.rearrangeProf(copy)
                        if(this.props.profPrefIsEnabled) {
                            setTimeout(() => {
                                this.props.refresh();
                            }, 10);
                        }
                    }
                    ;
                }}
                    /></span></ListGroup.Item>);



        return (

            <div>

                <CardGroup style={{width: "600px",margin: "auto"}}>
                    <Card className="car2"   style={{ width: "100%" ,margin: "25px 25px 25px 25px",borderRadius: "25px"}}>
                        <Card.Header >
                            <div>
                                <h5>Rank Professors <label style={{display:"block",float:"right"}}>
                                    <Switch checked={this.props.profPrefIsEnabled} onChange={(checked)=>{
                                        this.props.setProfPref(checked);
                                        setTimeout(() =>{
                                            this.props.refresh();
                                        }, 10);
                                    }} />
                                </label></h5>

                            </div>
                            </Card.Header>
                        <Card.Footer>
                            <h6>Rank professors in order of preference from top to bottom</h6>
                            <div style={{display:"block",textAlign:"left"}}>
                            <ListGroup variant="flush" style={{ margin: "0px 10px 0px 10px",borderRadius: "25px"}}>
                                {listItems}
                            </ListGroup>
                            </div>


                        </Card.Footer>
                    </Card>
                </CardGroup>


            </div>
        )
    }
}

const mapStateToProps = state =>{
    return {
        minBreakValue: state.minBreak.value,
        minBreakIsEnabled: state.minBreak.isEnabled,
        groups:state.grps,
        profPrefIsEnabled: state.profPref.isEnabled,
        profPrefList: state.profPref.list
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        setMinBreak: (num,sw) => dispatch(setMinBreak(num,sw)),
        setProfPref: (sw) => dispatch(setProfPref(sw)),
        rearrangeProf: (l) => dispatch(rearrangeProf(l))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Professors);








