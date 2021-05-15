import React, { Component } from "react";
import _ from 'lodash';
import {addGroup, deleteGroupByLabel} from "../../actions/groupsActions";
import {connect} from "react-redux";
import {setGeneratedList} from "../../actions/generatedList";
import {setGroupBySubject} from "../../actions/groupBySubject";
import {recursiveFor} from "./functions";
import {Alert} from "react-bootstrap";
import Switch from "react-switch";
import Professors from "./Professors";
import MinBreaks from "./MinBreaks";
import NoClass from "./NoClass";
import DistributeClasses from "./DistributeClasses";

var Deque = require("collections/deque");

export class Generator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false
        }
        this.run();
    }

    groupBySubject = (input) => {
        return _.groupBy(input, 's_name');
    }

    convertToArray = (input) => {
        return Object.keys(input)// [{{S1G1},{S1G2},{S1G3}},{{S2G1},{S2G2}]
            .map(function(key) {
                return input[key];
            });
    }

    generateEveryCombination = (arrayData) => {
        var deque = new Deque();
        let allComb=[];

        recursiveFor(deque,arrayData, arrayData.length,allComb);
        return allComb;
    }

    eliminateClashes = (sol) =>{
        let b = [];
        for(let i=0;i<sol.length;++i){
            b[i]=false;
        }
        let lists = [...sol];
        let fin = [];


        here: for (let k = 0; k < lists.length; ++k) {
            for (let i = 0; i < lists[k].length - 1; ++i) {
                for (let j = i+1; j < lists[k].length; ++j) {

                    if(lists[k][i].day.localeCompare((lists[k][j].day))===0 && this.isOverlapping(lists[k][i].st,lists[k][i].ft,lists[k][j].st,lists[k][j].ft)){
                        b[k] =true;
                        continue here;
                    }

                }
            }

        }
        for(let i=0;i<lists.length;++i){
            if(!b[i]){
                fin.push(lists[i]);
            }
        }
        return fin;
    }

    eliminateNoClassClashes = (sol) =>{
        let b = [];
        for(let i=0;i<sol.length;++i){
            b[i]=false;
        }
        let lists = [...sol];
        let fin = [];

        let l = this.props.noClassList;
        here: for (let k = 0; k < lists.length; ++k) {
            for (let i = 0; i < lists[k].length; ++i) {
                for (let j = 0; j < l.length; ++j) {

                    if(lists[k][i].day.localeCompare((l[j].day))===0 && this.isOverlapping(lists[k][i].st,lists[k][i].ft,l[j].st,l[j].ft)){
                        b[k] =true;
                        continue here;
                    }

                }
            }

        }
        for(let i=0;i<lists.length;++i){
            if(!b[i]){
                fin.push(lists[i]);
            }
        }
        return fin;
    }

    isOverlapping = (s1,e1,s2,e2) => {

        let b=0;
        if(this.props.minBreakIsEnabled){
            b = this.props.minBreakValue
        }

        let t = ["05:00","05:15","05:30","05:45",
            "06:00","06:15","06:30","06:45",
            "07:00","07:15","07:30","07:45",
            "08:00","08:15","08:30","08:45",
            "09:00","09:15","09:30","09:45",
            "10:00","10:15","10:30","10:45",
            "11:00","11:15","11:30","11:45",
            "12:00","12:15","12:30","12:45",
            "13:00","13:15","13:30","13:45",
            "14:00","14:15","14:30","14:45",
            "15:00","15:15","15:30","15:45",
            "16:00","16:15","16:30","16:45",
            "17:00","17:15","17:30","17:45",
            "18:00","18:15","18:30","18:45",
            "19:00","19:15","19:30","19:45",
            "20:00","20:15","20:30","20:45",
            "21:00","21:15","21:30","21:45",
            "22:00","22:15","22:30","22:45",
            "23:00","23:15","23:30","23:45"]

        const cnt = b/30;

        let f = (value) =>{
            let i=0;
            while(i<t.length && t[i]!==value){
                ++i
            }
            return i;
        }


        return this.compareTime(t[f(s1)-cnt],t[f(e1)+cnt],t[f(s2)-cnt],t[f(e2)+cnt]);
    }

    compareTime = (start1,end1,start2,end2) => {
        return (start1 < end2) && (start2 < end1);
    }

    run = () =>{

        this.setState({isLoading:true});
        let groupedList = this.groupBySubject(this.props.groups.groups); // [[{},{},{}],[{},{},{}]]
        let arrayData = this.convertToArray(groupedList);
        this.props.setGroupBySubject(arrayData);

        //generate every combination
        let everyComb = this.generateEveryCombination(arrayData);

        //eliminate clashes
        let noClashes = this.eliminateClashes(everyComb);
        this.props.setGeneratedList(noClashes);


        //eliminate noClass crashes
        if(this.props.noClassIsEnabled) {
            let fin = this.eliminateNoClassClashes(noClashes);
            this.props.setGeneratedList(fin)
        }


        setTimeout(() => {
            console.log('Hello, World!')
            this.setState({isLoading: false});
        }, 1000);

        //ranking
        this.sortBoth();


    }

    sortBoth = () =>{
        if(this.props.profPrefIsEnabled && this.props.distrIsEnabled){
            //prof pref
            let copy = [...this.props.lists.list];

            const array1 = this.props.profPrefList;

            const isEqual = (element, p_name) => element === p_name;


            for (let i = 0; i < copy.length; ++i) {
                copy[i][0].p_sum = 0
                for (let j = 0; j < copy[i].length; ++j) {
                    const isEqual = (element) => element === copy[i][j].p_name;
                    copy[i][0].p_sum += array1.findIndex(isEqual);

                }

                let list = _.groupBy(this.props.lists.list[i], 'day');
                let arr = [];
                const entries = Object.entries(list);
                for(let i=0;i<entries.length;++i){
                    arr.push(entries[i][1].length)
                }
                for(let i=entries.length;i<5;++i){
                    arr.push(0);
                }
                copy[i][0].sd =this.standardDeviation(arr);

            }

            //sort in ascending order by sd
            copy.sort((a, b) => {
                //first sort by professor and then distribution
                return a[0].p_sum - b[0].p_sum || a[0].sd - b[0].sd  ;
                //first sort by distr and then by professor
            });
            //eliminate sd property
            copy = copy.map((i) => {
                delete i.p_sum
                delete i.sd
                return i
            });
            this.props.setGeneratedList(copy);
            console.log("both sorting executed");
        }
        else if(this.props.profPrefIsEnabled){
            this.sortByPreference();
        }
        else if(this.props.distrIsEnabled){
            this.sortByDistribution();
        }
    }

    sortByDistribution = () =>{
        if(this.props.distrIsEnabled){

            for (let i = 0; i < this.props.lists.list.length; ++i) {

                let list = _.groupBy(this.props.lists.list[i], 'day');
                let copy = this.props.lists.list;


                let arr = [];
                const entries = Object.entries(list);
                for(let i=0;i<entries.length;++i){
                    arr.push(entries[i][1].length)
                }
                for(let i=entries.length;i<5;++i){
                    arr.push(0);
                }

                console.log(arr)
                copy[i][0].sd =this.standardDeviation(arr);

                console.log(copy[i][0].sd);

                //sort in ascending order by sd
                copy.sort((a, b) => {
                    return a[0].sd - b[0].sd
                });
                //eliminate sd property
                copy = copy.map((i) => {
                    delete i.sd
                    return i
                });
                this.props.setGeneratedList(copy);
            }
        }
    }

    standardDeviation = (val) =>{
        let avg = this.average(val);

        let squareDiffs = val.map(function(value){
            return (value - avg) * (value - avg);
        });

        return Math.sqrt(this.average(squareDiffs));
    }

    average = (data) => {
        let sum = data.reduce(function(sum, value){
            return sum + value;
            }, 0);
        return sum / data.length;
    }

    sortByPreference = () => {
        if(this.props.profPrefIsEnabled) {
            let list = [...this.props.lists.list];
            const array1 = this.props.profPrefList;
            const isEqual = (element, p_name) => element === p_name;
            for (let i = 0; i < list.length; ++i) {
                list[i][0].p_sum = 0
                for (let j = 0; j < list[i].length; ++j) {
                    const isEqual = (element) => element === list[i][j].p_name;
                    list[i][0].p_sum += array1.findIndex(isEqual);
                }
            }
            //sort in ascending order by p_sum
            list.sort((a, b) => {
                return a[0].p_sum - b[0].p_sum
            });
            //eliminate p_sum property
            list = list.map((i) => {
                delete i.age
                return i
            });
            this.props.setGeneratedList(list);
        }
    }



    render() {
        return <div >

            <Alert variant="success" style={{width:"80%",margin: "auto"}}>
                <Alert.Heading>You have {this.state.isLoading ? <div className="spinner-border text-info" role="status">
                    <span className="sr-only">Loading...</span>
                </div>: this.props.lists.list.length} tables to choose from</Alert.Heading>

                <p>
                    Add constraints to narrow down your choices
                </p>
                <p>
                    Add preferences to sort the generated list by preference
                </p>
            </Alert>


            <div style={{width:"80%",margin: "auto"}}>
                <div className="row">
                    <div className="col">
                        <MinBreaks refresh={this.run}></MinBreaks>
                        <NoClass refresh={this.run}></NoClass>
                    </div>
                    <div className="col">
                        <DistributeClasses refresh={this.run}></DistributeClasses>
                        <Professors refresh={this.run}></Professors>
                    </div>


                </div>

            </div>


        </div>;
    }
}

const mapStateToProps = state =>{
    return {
        groups:state.grps,
        lists:state.lists,
        gbs:state.gbs,
        minBreakValue: state.minBreak.value,
        minBreakIsEnabled: state.minBreak.isEnabled,
        noClassList:state.noClass.list,
        noClassIsEnabled:state.noClass.isEnabled,
        profPrefIsEnabled: state.profPref.isEnabled,
        profPrefList: state.profPref.list,
        distrIsEnabled: state.distr.isEnabled

    }
}

const mapDispatchToProps = dispatch =>{
    return{
        setGeneratedList: (list) => dispatch(setGeneratedList(list)),
        setGroupBySubject: (list) => dispatch(setGroupBySubject(list)),

    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Generator);
