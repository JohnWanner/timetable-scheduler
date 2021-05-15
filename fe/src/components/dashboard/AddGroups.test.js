import {groupNameExists} from './AddGroups';

test('check if group already exists',()=>
{
    let groups = [
        {s_name:"Analysis II L",g_name:"G1",day:"Thursday",st:"17:30",ft:"19:30",color:"lightsalmon",p_name: "Csörgő István"},
        {s_name:"Analysis II P",g_name:"G1",day:"Wednesday",st:"14:00",ft:"16:00",color:"lightseagreen",p_name: "Chripkó Ágnes"},
        {s_name:"Analysis II P",g_name:"G2",day:"Tuesday",st:"14:00",ft:"16:00",color:"lightseagreen",p_name: "Filipp Zoltán"},
        {s_name:"Web Prog L",g_name:"G1",day:"Monday",st:"13:00",ft:"14:00",color:"lightcoral",p_name: "Horváth Győző"},
        {s_name:"Web Prog P",g_name:"G1",day:"Wednesday",st:"08:00",ft:"10:00",color:"lightblue",p_name: "Visnovitz Márton"},
        {s_name:"Web Prog P",g_name:"G2",day:"Tuesday",st:"08:00",ft:"10:00",color:"lightblue",p_name: "Bucsánszki Tamás"},
        {s_name:"Web Prog P",g_name:"G3",day:"Tuesday",st:"18:00",ft:"20:00",color:"lightblue",p_name: "Rakonczai Sándor"},
        {s_name:"A&D II L",g_name:"G1",day:"Friday",st:"10:00",ft:"12:00",color:"lightcyan",p_name: "Ásványi Tibor"},
        {s_name:"A&D II P",g_name:"G1",day:"Monday",st:"14:00",ft:"16:00",color:"lightgoldenrodyellow",p_name: "Ásványi Tibor"},
        {s_name:"A&D II P",g_name:"G2",day:"Tuesday",st:"10:00",ft:"12:00",color:"lightgoldenrodyellow",p_name: "Szabó László"},
        {s_name:"App of DM",g_name:"G1",day:"Thursday",st:"10:00",ft:"12:00",color:"lightgreen",p_name: "Burcsi Péter"},
        {s_name:"App of DM",g_name:"G2",day:"Thursday",st:"08:00",ft:"10:00",color:"lightgreen",p_name: "Tompa Gábor"},
        {s_name:"Tools of sw projects",g_name:"G1",day:"Tuesday",st:"10:00",ft:"12:00",color:"lightpink",p_name: "Gera Zoltán"},
        {s_name:"Intro to ML",g_name:"G1",day:"Wednesday",st:"16:00",ft:"17:00",color:"lightskyblue",p_name: "Lőrincz András"}

    ]
    let T_new_grp = {
        s_name:"A&D II P",
        g_name:"G1"
    }
    let F_new_grp = {
        s_name:"A&D II P",
        g_name:"G3"
    }
    let F2_new_grp = {
        s_name:"A&D II N",
        g_name:"G1"
    }
    expect(groupNameExists(T_new_grp,groups)).toEqual(true)
    expect(groupNameExists(F_new_grp,groups)).toEqual(false)
    expect(groupNameExists(F2_new_grp,groups)).toEqual(false)
});

test('check if group already exists',()=>
{
    let groups = [
        {s_name:"Analysis II L",g_name:"G1",day:"Thursday",st:"17:30",ft:"19:30",color:"lightsalmon",p_name: "Csörgő István"},
        {s_name:"Analysis II P",g_name:"G1",day:"Wednesday",st:"14:00",ft:"16:00",color:"lightseagreen",p_name: "Chripkó Ágnes"},
        {s_name:"Analysis II P",g_name:"G2",day:"Tuesday",st:"14:00",ft:"16:00",color:"lightseagreen",p_name: "Filipp Zoltán"},
        {s_name:"Web Prog L",g_name:"G1",day:"Monday",st:"13:00",ft:"14:00",color:"lightcoral",p_name: "Horváth Győző"},
        {s_name:"Web Prog P",g_name:"G1",day:"Wednesday",st:"08:00",ft:"10:00",color:"lightblue",p_name: "Visnovitz Márton"},
        {s_name:"Web Prog P",g_name:"G2",day:"Tuesday",st:"08:00",ft:"10:00",color:"lightblue",p_name: "Bucsánszki Tamás"},
        {s_name:"Web Prog P",g_name:"G3",day:"Tuesday",st:"18:00",ft:"20:00",color:"lightblue",p_name: "Rakonczai Sándor"},
        {s_name:"A&D II L",g_name:"G1",day:"Friday",st:"10:00",ft:"12:00",color:"lightcyan",p_name: "Ásványi Tibor"},
        {s_name:"A&D II P",g_name:"G1",day:"Monday",st:"14:00",ft:"16:00",color:"lightgoldenrodyellow",p_name: "Ásványi Tibor"},
        {s_name:"A&D II P",g_name:"G2",day:"Tuesday",st:"10:00",ft:"12:00",color:"lightgoldenrodyellow",p_name: "Szabó László"},
        {s_name:"App of DM",g_name:"G1",day:"Thursday",st:"10:00",ft:"12:00",color:"lightgreen",p_name: "Burcsi Péter"},
        {s_name:"App of DM",g_name:"G2",day:"Thursday",st:"08:00",ft:"10:00",color:"lightgreen",p_name: "Tompa Gábor"},
        {s_name:"Tools of sw projects",g_name:"G1",day:"Tuesday",st:"10:00",ft:"12:00",color:"lightpink",p_name: "Gera Zoltán"},
        {s_name:"Intro to ML",g_name:"G1",day:"Wednesday",st:"16:00",ft:"17:00",color:"lightskyblue",p_name: "Lőrincz András"}

    ]
    let T_new_grp = {
        s_name:"A&D II P",
        g_name:"G1"
    }
    let F_new_grp = {
        s_name:"A&D II P",
        g_name:"G3"
    }
    let F2_new_grp = {
        s_name:"A&D II N",
        g_name:"G1"
    }
    expect(groupNameExists(F_new_grp,groups)).toEqual(false)
});
test('check if group already exists',()=>
{
    let groups = [
        {s_name:"Analysis II L",g_name:"G1",day:"Thursday",st:"17:30",ft:"19:30",color:"lightsalmon",p_name: "Csörgő István"},
        {s_name:"Analysis II P",g_name:"G1",day:"Wednesday",st:"14:00",ft:"16:00",color:"lightseagreen",p_name: "Chripkó Ágnes"},
        {s_name:"Analysis II P",g_name:"G2",day:"Tuesday",st:"14:00",ft:"16:00",color:"lightseagreen",p_name: "Filipp Zoltán"},
        {s_name:"Web Prog L",g_name:"G1",day:"Monday",st:"13:00",ft:"14:00",color:"lightcoral",p_name: "Horváth Győző"},
        {s_name:"Web Prog P",g_name:"G1",day:"Wednesday",st:"08:00",ft:"10:00",color:"lightblue",p_name: "Visnovitz Márton"},
        {s_name:"Web Prog P",g_name:"G2",day:"Tuesday",st:"08:00",ft:"10:00",color:"lightblue",p_name: "Bucsánszki Tamás"},
        {s_name:"Web Prog P",g_name:"G3",day:"Tuesday",st:"18:00",ft:"20:00",color:"lightblue",p_name: "Rakonczai Sándor"},
        {s_name:"A&D II L",g_name:"G1",day:"Friday",st:"10:00",ft:"12:00",color:"lightcyan",p_name: "Ásványi Tibor"},
        {s_name:"A&D II P",g_name:"G1",day:"Monday",st:"14:00",ft:"16:00",color:"lightgoldenrodyellow",p_name: "Ásványi Tibor"},
        {s_name:"A&D II P",g_name:"G2",day:"Tuesday",st:"10:00",ft:"12:00",color:"lightgoldenrodyellow",p_name: "Szabó László"},
        {s_name:"App of DM",g_name:"G1",day:"Thursday",st:"10:00",ft:"12:00",color:"lightgreen",p_name: "Burcsi Péter"},
        {s_name:"App of DM",g_name:"G2",day:"Thursday",st:"08:00",ft:"10:00",color:"lightgreen",p_name: "Tompa Gábor"},
        {s_name:"Tools of sw projects",g_name:"G1",day:"Tuesday",st:"10:00",ft:"12:00",color:"lightpink",p_name: "Gera Zoltán"},
        {s_name:"Intro to ML",g_name:"G1",day:"Wednesday",st:"16:00",ft:"17:00",color:"lightskyblue",p_name: "Lőrincz András"}

    ]
    let T_new_grp = {
        s_name:"A&D II P",
        g_name:"G1"
    }
    let F_new_grp = {
        s_name:"A&D II P",
        g_name:"G3"
    }
    let F2_new_grp = {
        s_name:"A&D II N",
        g_name:"G1"
    }
    expect(groupNameExists(F2_new_grp,groups)).toEqual(false)
});