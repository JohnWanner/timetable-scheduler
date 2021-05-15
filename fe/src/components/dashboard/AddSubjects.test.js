import {subjectNameExists} from './AddSubjects';
import React from 'react';
import ReactDOM from 'react-dom';
import AddSubjects from "./AddSubjects";
import {render} from '@testing-library/react';
import {Add} from "@material-ui/icons";


test('check if subject already exists',()=>
{
    let subjects = [{s_name:"Analysis II L",color:"lightsalmon"},{s_name:"Analysis II P",color:"lightseagreen"},{s_name:"Web Prog L",color:"lightcoral"},{s_name:"Web Prog P",color:"lightblue"},{s_name:"A&D II L",color:"lightcyan"},{s_name:"A&D II P",color:"lightgoldenrodyellow"},{s_name:"App of DM",color:"lightgreen"},{s_name:"Tools of sw projects",color:"lightpink"},{s_name:"Intro to ML",color:"lightskyblue"}];
    let T_new_sub = "Analysis II P";
    let F_new_sub = "New Subject"
    expect(subjectNameExists(T_new_sub,subjects)).toEqual(true)
});

test('check if subject already exists',()=>
{
    let subjects = [{s_name:"Analysis II L",color:"lightsalmon"},{s_name:"Analysis II P",color:"lightseagreen"},{s_name:"Web Prog L",color:"lightcoral"},{s_name:"Web Prog P",color:"lightblue"},{s_name:"A&D II L",color:"lightcyan"},{s_name:"A&D II P",color:"lightgoldenrodyellow"},{s_name:"App of DM",color:"lightgreen"},{s_name:"Tools of sw projects",color:"lightpink"},{s_name:"Intro to ML",color:"lightskyblue"}];
    let T_new_sub = "Analysis II P";
    let F_new_sub = "New Subject"
    expect(subjectNameExists(F_new_sub,subjects)).toEqual(false)
});


