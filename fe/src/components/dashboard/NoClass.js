import React, { Component } from 'react'
import {Card, Form, Button, ListGroup, CardGroup, Row, Col} from "react-bootstrap"
import Switch from "react-switch";
import {addGroup, deleteGroupByLabel} from "../../actions/groupsActions";
import {connect} from "react-redux";
import {Options} from "./Options";
import {setMinBreak} from "../../actions/minBreakActions";
import {addItem,deleteItem} from "../../actions/noClassActions";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import {setNoClass} from "../../actions/noClassActions";

class NoClass extends Component {



    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(checked) {

        this.props.setNoClass(checked);

        setTimeout(() =>{
            this.props.refresh();
        }, 10);


    }

    handleSubmit = (e) => {
        e.preventDefault();
        let data = e.target.elements;
        let str = data.day.value+data.time[0].value+data.time[1].value;
        let i = {name:str,day:data.day.value,st:data.time[0].value,ft:data.time[1].value};
        if(i.st<i.ft) {
            this.props.addItem(i);
        }

        setTimeout(() =>{
            this.props.refresh();
        }, 10);

    }

    render() {

        const days = ["Monday","Tuesday","Wednesday","Thursday","Friday"];
        const hhmm = ["08:00","08:30","09:00","09:30","10:00","10:30","11:00","11:30","12:00","12:30","13:00","13:30","14:00","14:30","15:00","15:30","16:00","16:30","17:00","17:30","18:00","18:30","19:00","19:30","20:00","20:30"]
        const daysItems = days.map((day,index) => <option key={index}>{day}</option>);
        const hhmmItems = hhmm.map((hm,index) => <option key={index}>{hm}</option>);

        const items = this.props.noClassList;
        const listItems = items.map((item,index) =>

            <ListGroup.Item key={index} action="true"
                            onClick={() => {
                                this.props.deleteItem(item.name);
                                setTimeout(() =>{
                                    this.props.refresh();
                                }, 10);

                            }}>
                ・&nbsp;&nbsp;&nbsp;&nbsp;{item.day}&nbsp;&nbsp;&nbsp;&nbsp;{item.st}-{item.ft}
                <span style={{display:"block",float:"right",width:"10%",marginLeft:"10px"}}><DeleteForeverIcon/></span></ListGroup.Item>);

        return (

            <div>

                <CardGroup style={{width: "600px",margin: "auto"}}>
                    <Card className="car2"   style={{ width: "100%" ,margin: "25px 25px 25px 25px",borderRadius: "25px"}}>
                        <Card.Header >
                            <div>
                                <h5>No Classes<label style={{display:"block",float:"right"}}>
                                    <Switch onChange={this.handleChange} checked={this.props.noClassIsEnabled}/>
                                </label></h5>

                            </div>
                            <ListGroup variant="flush" style={{ margin: "0px 10px 0px 10px",borderRadius: "25px"}}>
                                {listItems}
                            </ListGroup>
                        </Card.Header>
                        <ListGroup variant="flush" style={{ margin: "0px 10px 0px 10px",borderRadius: "25px"}}>
                        </ListGroup>
                        <Card.Footer>
                            <Form style={{display:"block",textAlign:"center"}} onSubmit={this.handleSubmit}>
                                <Form.Group controlId="day">
                                    <Form.Label>No Classes On</Form.Label>
                                    <Form.Control as="select"  required>
                                        <option disabled selected value> -- select an option -- </option>
                                        {daysItems}
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group controlId="time">

                                    <Row>
                                        <Col>
                                            <Form.Label>From</Form.Label>
                                            <Form.Control as="select"  required>
                                                <option disabled selected value> -- select an option -- </option>
                                                {hhmmItems}
                                            </Form.Control>
                                        </Col>
                                        <Col>
                                            <Form.Label>To</Form.Label>
                                            <Form.Control as="select"  required>
                                                <option disabled selected value> -- select an option -- </option>
                                                {hhmmItems}
                                            </Form.Control>
                                        </Col>
                                    </Row>

                                </Form.Group>

                                <Button variant="primary" type="submit" >
                                    ADD
                                </Button>
                            </Form>

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
        noClassList:state.noClass.list,
        noClassIsEnabled:state.noClass.isEnabled

    }
}

const mapDispatchToProps = dispatch =>{
    return{
        setMinBreak: (num,sw) => dispatch(setMinBreak(num,sw)),
        addItem: (i) => dispatch(addItem(i)),
        deleteItem: (n) => dispatch(deleteItem(n)),
        setNoClass: (b) => dispatch(setNoClass(b))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NoClass);

