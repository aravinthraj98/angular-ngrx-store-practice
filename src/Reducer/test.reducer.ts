import { Action } from "@ngrx/store";
import { Test } from "src/model/Test.model"
import * as TestAction from "../actions/Test.action"

export function TestReducer(state:Test[]=[],action:Action){
  const  action1 =action as TestAction.Actions;
  
  
        switch(action1.type){
            case TestAction.Add_Test:
                return [...state,action1.payload];
            default:
                return state;
        }
}