import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import subjectsReducer from "./subjectsReducer";
import groupsReducer from "./groupsReducer";
import generatedListReducer from "./generatedListReducer";
import groupBySubject from "./groupBySubjectReducer";
import minBreakReducer from "./minBreakReducer";
import noClassReducer from "./noClassReducer";
import profPrefReducer from "./profPrefReducer";
import distributeClassesReducer from "./distributeClassesReducer";
import selectedTableReducer from "./selectedTableReducer";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  subs: subjectsReducer,
  grps:groupsReducer,
  lists:generatedListReducer,
  gbs:groupBySubject,
  minBreak:minBreakReducer,
  noClass:noClassReducer,
  profPref:profPrefReducer,
  distr:distributeClassesReducer,
  selected:selectedTableReducer
});

export {addSubject} from '../actions/subjectsActions';
export {deleteSubject} from '../actions/subjectsActions';



export {addGroup} from '../actions/groupsActions';
export {deleteGroup} from '../actions/groupsActions';

