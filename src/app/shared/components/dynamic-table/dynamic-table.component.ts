import { Component, Input, OnInit } from '@angular/core';
import { Field } from 'src/app/core/interfaces/field';

@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.scss']
})
export class DynamicTableComponent implements OnInit {
  @Input() data :any; 
  @Input() fields:Field[]=[]; 
  constructor() { }

  ngOnInit(): void {
  }

}
