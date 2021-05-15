import React, { Component } from 'react'
import {Card,Form, Button, ListGroup,CardGroup} from "react-bootstrap"
import Switch from "react-switch";
import {addGroup, deleteGroupByLabel} from "../../actions/groupsActions";
import {connect} from "react-redux";
import {Options} from "./Options";
import {setMinBreak} from "../../actions/minBreakActions";

class MinBreaks extends Component {



    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(checked) {
        this.props.setMinBreak(this.props.minBreakValue,checked);

        setTimeout(() =>{
            this.props.refresh();
        }, 10);


    }

    handleSubmit = (e) => {
        e.preventDefault();
        let data = e.target.elements.min_break.value;
        this.props.setMinBreak(data,true);
        this.props.refresh();
        setTimeout(() =>{
            this.props.refresh();
        }, 10);




    }

    render() {

        const brk= ["0","30","60","90","120","150","180"];
        const listItems = brk.map((entry,index) => <option key={index}>{entry}</option>);

        return (

            <div>

                <CardGroup style={{width: "600px",margin: "auto"}}>
                    <Card className="car2"   style={{ width: "100%" ,margin: "25px 25px 25px 25px",borderRadius: "25px"}}>
                        <Card.Header >
                            <div>
                                <h5>Minimum Break Between Classes <label style={{display:"block",float:"right"}}>
                                    <Switch id="switch_1" onChange={this.handleChange} checked={this.props.minBreakIsEnabled}/>
                                </label></h5>

                            </div>
                        </Card.Header>
                        <ListGroup variant="flush" style={{ margin: "0px 10px 0px 10px",borderRadius: "25px"}}>
                        </ListGroup>
                        <Card.Footer>
                            <Form style={{display:"block",textAlign:"center"}} onSubmit={this.handleSubmit}>
                                <Form.Group controlId="min_break">
                                    <h6>Have minimum</h6>
                                    <Form.Control as="select"  required>
                                        <option disabled selected value> -- select an option -- </option>
                                        {listItems}
                                    </Form.Control>
                                    <h6>minutes of break between each class</h6>

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
        minBreakIsEnabled: state.minBreak.isEnabled
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        setMinBreak: (num,sw) => dispatch(setMinBreak(num,sw))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MinBreaks);

