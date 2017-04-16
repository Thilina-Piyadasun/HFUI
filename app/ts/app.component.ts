import {Component} from 'angular2/core';
import {Config} from './config.service';
import {PlaylistComponent} from './playlist.component';
import {Video} from './Video';
import {FormComponent} from './formTemplate.component';

@Component({
    selector: 'my-app',
    templateUrl : 'app/html/app.component.html',
  //  directives : [PlaylistComponent],
    directives : [FormComponent]
})

export class AppComponent {

    mainHedding : string = Config.MAIN_HEDDING;
    videois:Array<Video>;

    constructor(){
        this.videois=[
                    new Video(1,"First Video" , "First URL" ,"Description1"),
                    new Video(2,"Second Video" , "second URL" ,"Description 2")
        ]
    }
}