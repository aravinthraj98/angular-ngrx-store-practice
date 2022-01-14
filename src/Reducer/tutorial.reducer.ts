import { Action } from "@ngrx/store";
import { Tutorial } from "src/model/tutorial.model"
import * as TutorialAction from "../actions/tutorial.action"

export function tutorialReducer(state:Tutorial[]=[],action:Action){
  const  action1 =action as TutorialAction.Actions;
  
        switch(action1.type){
            
            case TutorialAction.Add_Tutorial:
                
                return [...state,action1.payload];
            default:
                return state;
        }
}