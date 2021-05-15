import React, { Component } from "react";
import {connect} from 'react-redux';    //for connecting to redux store
import {addSubject} from '../../reducers/index';
import {deleteSubjectByName} from "../../actions/subjectsActions";
import {initSubArray} from "../../actions/subjectsActions";
import {Card,Form, Button, ListGroup,CardGroup} from "react-bootstrap"
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import axios from "axios";
import {initGrpArray} from "../../actions/groupsActions";

export function subjectNameExists(item,subjects){
    let found = false
    for(let i=0;i<subjects.length;++i){
        if(item.localeCompare(subjects[i].s_name)==0){
            found = true;
        }
    }
    return found
}

export class AddSubjects extends Component {

    constructor(props) {
        super(props);
        this.state = {
            form_input: ''
        };

        const sendingData={
            identity:this.props.auth.user.id
        }

        axios
            .post("/api/users/init/", sendingData).then(resp=>{

            if(this.props.subjects.subjects.length==0) {

                this.props.initSubArray(resp.data.subjects);
                this.props.initGrpArray(resp.data.groups);
            }
        })
            .catch(error=>{
            });

    }

    myChangeHandler = (e) =>{
        this.setState({
            form_input: e.target.value
        })
    }

    handleSubmit = (e) => { //handle Add subject button click
        e.preventDefault();

        if(!(this.state.form_input.localeCompare("")===0)) {
            if (!subjectNameExists(this.state.form_input, this.props.subjects.subjects)) {
                this.props.addSubject(this.state.form_input);
                this.setState({
                    form_input: ""
                })
            } else {
                this.setState({
                    form_input: ""
                })
            }
        }
    }

        render() {
            const data= this.props.subjects.subjects;//list of subjects
                let listItems = data.map((subject, index) => <ListGroup.Item id={"item_" + index} key={index}
                                                                               action="true" onClick={() => {
                    this.props.deleteSubjectByName(subject.s_name)
                }} style={{
                    backgroundColor: subject.color,
                    borderRadius: "25px",
                    margin: "5px 5px 5px 0px",
                    textAlign: "left"
                }}>{subject.s_name} <span style={{
                    display: "block",
                    float: "right",
                    width: "10%",
                    marginLeft: "10px"
                }}><DeleteForeverIcon/></span></ListGroup.Item>);

            return (
                <div >
                    <CardGroup style={{width: "60%",margin: "auto"}}>
                    <Card className="car2"   style={{ width: "70%" ,margin: "25px 25px 25px 25px",borderRadius: "25px"}}>
                        <Card.Header >Registered Subjects</Card.Header>
                        <ListGroup variant="flush" style={{ margin: "0px 10px 0px 10px",borderRadius: "25px"}}>
                            {listItems}
                        </ListGroup>
                        <Card.Footer>

                            <Form style={{display:"block",textAlign:"center"}} onSubmit={this.handleSubmit} id="john">
                                <Form.Group controlId="s_name">
                                    <Form.Label>Subject</Form.Label>
                                    <Form.Control type="input" value={this.state.form_input} placeholder="enter subject name" required onChange={this.myChangeHandler}/>
                                </Form.Group>

                                <Button variant="primary" type="submit" id="add_button">
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
        auth: state.auth
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        addSubject: (subject) => dispatch(addSubject(subject)),
        deleteSubjectByName: (name) => dispatch(deleteSubjectByName(name)),
        initSubArray: (arr) => dispatch(initSubArray(arr)),
        initGrpArray: (arr) => dispatch(initGrpArray(arr))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddSubjects);