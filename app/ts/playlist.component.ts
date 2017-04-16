/**
 * Created by acer on 4/13/2017.
 */
import {Component} from 'angular2/core';
import {Video} from './Video';

@Component({

    selector : 'playlist',
    templateUrl : 'app/html/playlist.component.html',
    inputs : ['viideos']
})

export class PlaylistComponent{

    onSelect(v : Video){
        console.log(v.name);
    }
}