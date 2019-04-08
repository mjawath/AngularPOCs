import { Component, OnInit, Input, ContentChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  @Input() title: string;
  @Input() data: string[];


  @Input() temp: TemplateRef<any>;
  @Input() footer: TemplateRef<any>;
  
  constructor() {
  }

  ngOnInit() {
  }

  onSelect=($event,item)=>{
    console.log($event)
    console.log(item)
  }

}
