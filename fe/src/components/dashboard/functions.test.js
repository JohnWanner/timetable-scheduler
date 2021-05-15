
import {isOverlapping} from './functions';


test('checks if two time intevals overlap',()=>
{
    expect(isOverlapping('06:00','07:00','08:00','09:00')).toEqual(false)
    expect(isOverlapping('06:00','08:30','08:00','09:00')).toEqual(true)

});



