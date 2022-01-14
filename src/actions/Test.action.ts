
import {Action} from "@ngrx/store"
import { Test } from "src/model/Test.model";

export const Add_Test = "[tutorial] Add";
export const Remove_Test = "[tutorial] remove";

export class AddTest implements Action{
        readonly type = Add_Test;
        constructor (public payload:Test){}
}
export class RemoveTest implements Action{
    readonly type = Remove_Test;
    constructor(public payload:number){

    }

}
export type Actions = AddTest | RemoveTest;