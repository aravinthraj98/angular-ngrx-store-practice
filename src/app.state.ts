import { Test } from "./model/Test.model";
import { Tutorial } from "./model/tutorial.model";

export interface AppState{
    readonly tutorial:Tutorial[];
    readonly test:Test[];
}