import React from "react";
import {addGroup, deleteGroupByLabel} from "../../actions/groupsActions";
import {connect} from "react-redux";
import {setGeneratedList} from "../../actions/generatedList";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import T3 from './Table';
import {setSelectedTable} from "../../actions/selectedTable";

const AutoPlaySwipeableViews = /*autoPlay*/(SwipeableViews);

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 1400,
        flexGrow: 1,
    },
    img: {
        height: 255,
        display: 'block',
        maxWidth: 800,
        overflow: 'hidden',
        width: '100%',
    },
}));

function Select(props) {
    const classes = useStyles();
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    //props.setSelectedTable(activeStep);
    const maxSteps = props.lists.list.length;

    const handleNext = () => {
        props.setSelectedTable(activeStep+1)
        setActiveStep((prevActiveStep) => prevActiveStep + 1);

    };

    const handleBack = () => {
        props.setSelectedTable(activeStep-1)
        setActiveStep((prevActiveStep) => prevActiveStep - 1);


    };

    const handleStepChange = (step) => {
        setActiveStep(step);



    };

    const c =`overflow-auto ${classes.root}`

    return (


        <div className={classes.root} >


            <AutoPlaySwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
            >
                {props.lists.list.map((l, index) => (
                    <div >
                        {Math.abs(activeStep - index) <= 2 ? (
                            <div >
                            <T3 choose={index}/>
                            </div>
                        ) : null}
                    </div>
                ))}
            </AutoPlaySwipeableViews>

            <div style={{width:"80%",margin:"auto"}}>
            <MobileStepper id="bottom"
                steps={maxSteps}
                position="static"
                variant="text"
                activeStep={activeStep}
                nextButton={
                    <Button id="next_table" className="next_t" size="large" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
                        Next
                        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                    </Button>
                }
                backButton={
                    <Button size="large" onClick={handleBack} disabled={activeStep === 0}>
                        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                        Back
                    </Button>
                }
            />
        </div>
        </div>

    );
}

const mapStateToProps = state =>{
    return {
        subjects: state.subs,
        groups:state.grps,
        lists:state.lists,
        selected:state.selected
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        addGroup: (group) => dispatch(addGroup(group)),
        deleteGroupByLabel: (label) => dispatch(deleteGroupByLabel(label)),
        setGeneratedList: (list) => dispatch(setGeneratedList(list)),
        setSelectedTable: (n) => dispatch(setSelectedTable(n))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Select);