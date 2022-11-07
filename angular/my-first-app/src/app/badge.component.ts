
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-badge',
    templateUrl: './badge.component.html' 
})
export class BadgeComponent{
    @Input('caption')title: string = "Default"
    @Output('itemClick') itemClick : EventEmitter<string> = new EventEmitter<string>();
    count: number = 0

    incrementCount(){
        console.log('incrementing..');
        this.itemClick.emit(this.title)
      this.count++
    }
}