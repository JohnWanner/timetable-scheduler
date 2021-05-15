import React, { Component } from 'react'
import {Card,Form, Button, ListGroup,CardGroup} from "react-bootstrap"
import Switch from "react-switch";
import {connect} from "react-redux";
import {setDistributeClasses} from "../../actions/distrubuteActions";

class DistributeClasses extends Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(checked) {
        this.props.setDistributeClasses(checked);

        setTimeout(() =>{
            this.props.refresh();
        }, 10);


    }


    render() {
        return (

            <div>

                <CardGroup style={{width: "600px",margin: "auto"}}>
                    <Card className="car2"   style={{ width: "100%" ,margin: "25px 25px 25px 25px",borderRadius: "25px"}}>
                        <Card.Header >
                            <div>
                                <h5>Distribute Classes Evenly <label style={{display:"block",float:"right"}}>
                                    <Switch checked={this.props.distrIsEnabled} onChange={(checked)=>{
                                        this.props.setDistributeClasses(checked);
                                        setTimeout(() =>{
                                            this.props.refresh();
                                        }, 10);
                                    }} />
                                </label></h5>

                            </div>
                        </Card.Header>

                        <Card.Footer>

                                    <h6>Distribute Classes as Evenly as Possible Throughout the Week</h6>
                        </Card.Footer>
                    </Card>
                </CardGroup>
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return {
        distrIsEnabled: state.distr.isEnabled
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        setDistributeClasses: (sw) => dispatch(setDistributeClasses(sw))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DistributeClasses);

