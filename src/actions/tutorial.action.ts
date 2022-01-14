
import {Action} from "@ngrx/store"
import { Tutorial } from "src/model/tutorial.model";

export const Add_Tutorial = "[test] Add";
export const Remove_Tutorial = "[test] remove";

export class AddTutorial implements Action{
        readonly type = Add_Tutorial;
        constructor (public payload:Tutorial){}
}
export class RemoveTutorial implements Action{
    readonly type = Remove_Tutorial;
    constructor(public payload:number){

    }

}
export type Actions = AddTutorial | RemoveTutorial;