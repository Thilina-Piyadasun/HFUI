/**
 * Created by acer on 4/13/2017.
 */
import {Component} from 'angular2/core';

@Component({
    selector : 'my-form',
    template : '' +
        '<h2>Hotel Search</h2>' +
        '<form (ngSubmit)="onSubmit(f)" #f="ngForm">' +
        '   <div>'+
        '       <label for="hotel_name">Hotel Name</label>'+
        '       <input ngControl="hotel_name" type="text" id="hotel_name" required="" #hotel="ngForm"/> ' +
        '       <span class="validation-error" *ngIf="!hotel.valid">Not Valid</span>' +
        '   </div>'+
        '   <div>'+
        '       <label for="adults">Adults</label>'+
        '       <input ngControl="adults" type="text" id="adults" required="" #adults="ngForm"/> ' +
        '       <span class="validation-error" *ngIf="!adults.valid">Not Valid</span>' +
        '   </div>'+
        '   <button type="submit" [disabled]="!f.valid">Submit</button>'+
        '</form>' +
        ''
})
export class FormComponent{

    onSubmit(value){
        console.log(value);
    }
}