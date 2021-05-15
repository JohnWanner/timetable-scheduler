import React, { Component } from "react";
import {addGroup, addSubject} from '../../reducers/index';
import {connect} from 'react-redux';
import {Form, Button, ListGroup,CardGroup,Card,Row,Col} from 'react-bootstrap';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import {deleteGroupByLabel} from "../../actions/groupsActions";


export function groupNameExists(item,groups){
    let found = false
    for(let i=0;i<groups.length;++i){
        if(item.g_name.localeCompare(groups[i].g_name)===0 && item.s_name.localeCompare(groups[i].s_name)===0){
            found = true;
        }
    }
    return found
}

export class AddGroups extends Component {

    handleSubmit = (e) => {
        e.preventDefault();
        let data = e.target.elements;


        let c = "white";
        for(let i=0;i<this.props.subjects.subjects.length;++i){
            if(data.s_name.value===this.props.subjects.subjects[i].s_name){
                c = this.props.subjects.subjects[i].color;
            }
        }
        let s = {s_name:data.s_name.value,g_name:data.g_name.value,day:data.day.value,st:data.time[0].value,ft:data.time[1].value,color:c,p_name:data.p_name.value};
        if (s.st<s.ft) {
            this.props.addGroup(s);
        }

    }


    render() {

        const days = ["Monday","Tuesday","Wednesday","Thursday","Friday"];
        const hhmm = ["08:00","08:30","09:00","09:30","10:00","10:30","11:00","11:30","12:00","12:30","13:00","13:30","14:00","14:30","15:00","15:30","16:00","16:30","17:00","17:30","18:00","18:30","19:00","19:30","20:00","20:30"]
        const daysItems = days.map((day,index) => <option key={index}>{day}</option>);
        const hhmmItems = hhmm.map((hm,index) => <option key={index}>{hm}</option>);

        const data= this.props.subjects.subjects;
        const listItems = data.map((subject,ind) => <option key={ind} style={{backgroundColor:subject.color}}>{subject.s_name}</option>);
        const groups = this.props.groups.groups;
        const listGroups = groups.map((group,index) =>

            <ListGroup.Item key={index} action="true" style={{backgroundColor:group.color, borderRadius: "25px", margin: "5px 5px 5px 0px",textAlign:"left"}}
                onClick={() => {
                this.props.deleteGroupByLabel(group.s_name,group.g_name);
            }}>
                {group.s_name}&nbsp;&nbsp;&nbsp;&nbsp;{group.g_name}&nbsp;&nbsp;&nbsp;&nbsp;{group.day}&nbsp;&nbsp;&nbsp;&nbsp;{group.st}-{group.ft}&nbsp;&nbsp;&nbsp;&nbsp;{group.p_name}
                <span style={{display:"block",float:"right",width:"10%",marginLeft:"10px"}}><DeleteForeverIcon/></span></ListGroup.Item>);

        return (
            <div >
                <CardGroup style={{width: "60%",margin: "auto"}}>


                    <Card className="car2"   style={{ width: "70%" ,margin: "25px 25px 25px 25px",borderRadius: "25px"}}>
                        <Card.Header >Registered Groups</Card.Header>
                        <ListGroup variant="flush" style={{ margin: "0px 10px 0px 10px",borderRadius: "25px"}}>
                            {listGroups}
                        </ListGroup>
                        <Card.Footer>

                            <Form style={{display:"block",textAlign:"center"}} onSubmit={this.handleSubmit}>
                                <Form.Group controlId="s_name">
                                    <Form.Label>Subject</Form.Label>
                                    <Form.Control as="select"  required>
                                        <option disabled selected value> -- select an option -- </option>
                                        {listItems}
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group controlId="g_name">
                                    <Form.Label>Group</Form.Label>
                                    <Form.Control type="input" placeholder="enter group name" required/>
                                </Form.Group>
                                <Form.Group controlId="p_name">
                                    <Form.Label>Lecturer</Form.Label>
                                    <Form.Control type="input" placeholder="enter Lecturer name" required/>
                                </Form.Group>
                                <Form.Group controlId="day">
                                    <Form.Label>Day</Form.Label>
                                    <Form.Control as="select"  required>
                                        <option disabled selected value> -- select an option -- </option>
                                        {daysItems}
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group controlId="time">

                                    <Row>
                                        <Col>
                                            <Form.Label>Starting Time</Form.Label>
                                            <Form.Control as="select"  required>
                                                <option disabled selected value> -- select an option -- </option>
                                                {hhmmItems}
                                            </Form.Control>
                                        </Col>
                                        <Col>
                                            <Form.Label>Finishing Time</Form.Label>
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
        );
    }
}


const mapStateToProps = state =>{
    return {
        subjects: state.subs,
        groups:state.grps

    }
}

const mapDispatchToProps = dispatch =>{
    return{
        addSubject: (subject) => dispatch(addSubject(subject)),
        addGroup: (group) => dispatch(addGroup(group)),
        deleteGroupByLabel: (s_name,g_name) => dispatch(deleteGroupByLabel(s_name,g_name))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddGroups);
