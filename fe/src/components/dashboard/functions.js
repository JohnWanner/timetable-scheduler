//takes time in string format and returns the row index of the first cell it corresponds
export const convertTime = (t) => {
    switch(t){
        case "08:00": return 1;
        case "08:30": return 2;
        case "09:00": return 3;
        case "09:30": return 4;
        case "10:00": return 5;
        case "10:30": return 6;
        case "11:00": return 7;
        case "11:30": return 8;
        case "12:00": return 9;
        case "12:30": return 10;
        case "13:00": return 11;
        case "13:30": return 12;
        case "14:00": return 13;
        case "14:30": return 14;
        case "15:00": return 15;
        case "15:30": return 16;
        case "16:00": return 17;
        case "16:30": return 18;
        case "17:00": return 19;
        case "17:30": return 20;
        case "18:00": return 21;
        case "18:30": return 22;
        case "19:00": return 23;
        case "19:30": return 24;
        case "20:00": return 25;
        default: return 25;
    }
}

//takes start time and finish time, returns number of cells the interval occupies
export const countBlock = (s,f) =>{
    let st = Date.parse('2012-01-26T'+s);
    let ft = Date.parse('2012-01-26T'+f);
    return (ft-st)/1000/60/30;
}

//takes day of week and converts returns the column index of the cell it corresponds
export const convertDay = (day) => {
    switch (day) {
        case "Monday":
            return 1;
        case "Tuesday":
            return 2;
        case "Wednesday":
            return 3;
        case "Thursday":
            return 4;
        case "Friday" :
            return 5;
        default:
            return 0;
    }
}

export const t = ["8AM","8:30AM","9AM","9:30AM","10AM","10:30AM","11AM","11:30AM","12PM","12:30PM","1PM","1:30PM","2PM","2:30PM","3PM","3:30PM","4PM","4:30PM","5PM","5:30PM","6PM","6:30PM","7PM","7:30PM","8PM"]

//takes two time intervals, returns true if overlaps
export const isOverlapping = (start1,end1,start2,end2) => {
    return (start1 < end2) && (start2 < end1);
}

//checks if minimum break constraint is met, returns true if overlapping
export const minBreak = (s1,e1,s2,e2,b) => {
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

    return isOverlapping(t[f(s1)-cnt],t[f(e1)+cnt],t[f(s2)-cnt],t[f(e2)+cnt]);
}

//checks if the timetable is acceptable
export const check = (sol) => {
    let b = [];
    for(let i=0;i<sol.length;++i){
        b[i]=false;
    }

    let lists = [...sol];
    let fin = [];

    here: for (let k = 0; k < lists.length; ++k) {
        for (let i = 0; i < lists[k].length - 1; ++i) {
            for (let j = i+1; j < lists[k].length; ++j) {
                if(lists[k][i].day.localeCompare((lists[k][j].day))===0 && isOverlapping(lists[k][i].st,lists[k][i].ft,lists[k][j].st,lists[k][j].ft)){
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

export const recursiveFor = (indices,ranges,n,sol) => { //indices is deque ranges is arraylist, n is array.elngth

    if (n !== 0) {

        for (let i = 0; i < ranges[n-1].length; i++) {

            indices.push(i);
            console.log("pushed to deque:")
            console.log(i)
            recursiveFor(indices, ranges, n-1,sol);

            console.log("popped from deque:")
            indices.pop();
        }
    }

    else {

        let arr = indices.toArray().reverse();

        let c=[];

        for(let i=0;i<arr.length;++i){
            let j = arr[i];
            let g = {
                ...ranges[i][j]
            };
            c.push(g);
        }
        sol.push(c);
    }
}

export const findCells = (d) => {
    const data = [...d];
    let dis = new Array(25);
    for (let i = 0; i < dis.length; i++) {
        dis[i] = new Array(5);
    }
    for(let i=0;i<25;++i){
        for(let j=0;j<5;++j){
            dis[i][j] = ""
        }
    }
    for(let i=0;i<data.length;++i){
        let day = convertDay(data[i].day);
        let s = convertTime(data[i].st);
        let c = countBlock(data[i].st,data[i].ft);
        for(let j=0;j<c;++j) {
            let tmp = {...data[i]}
            if(j===1){
                tmp.s_name = "Prof. " + data[i].p_name;
                tmp.g_name = "";
            }
            else if(j!==0){
                tmp.s_name = "";
                tmp.g_name = "";
            }
            dis[s + j - 1][day - 1] = tmp;
        }
    }
    return dis;
}

