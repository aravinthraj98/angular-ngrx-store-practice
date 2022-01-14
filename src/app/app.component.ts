import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AddTest } from 'src/actions/Test.action';
import { AddTutorial } from 'src/actions/tutorial.action';
import { AppState } from 'src/app.state';
import { Test } from 'src/model/Test.model';
import { Tutorial } from 'src/model/tutorial.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-ngrx-app';

  tutorials:Observable<Tutorial[]>;
  test:Observable<Test[]>;

  constructor(private store:Store<AppState>){
    this.tutorials = store.select("tutorial");
    this.test=store.select("test");
  }
  setTutorial(text:string){
    let data ={
           text,
           id:Date.now()
    }
    
     this.store.dispatch(new AddTutorial(data));
  }
  setTest(text:string){
        let data ={
           text,
           id:Date.now()
    }
    
     this.store.dispatch(new AddTest(data));
  }
}
