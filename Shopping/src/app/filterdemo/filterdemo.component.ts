import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filterdemo',
  templateUrl: './filterdemo.component.html',
  styleUrls: ['./filterdemo.component.css']
})
export class FilterdemoComponent {


  @Input() public AllCount=0;
@Input() public ElectronicesCount=0;
@Input() public ShoesCount=0;
@Input() public BooksCount=0;
@Input() public IsAllSelected='';
@Input() public IsElectronicesSelected='Electronices';
@Input() public IsShoesSelected='Shoes';
@Input() public IsBooksSelected='Books';
  public SelectedCategoryValue='All';
@Output() public ComponentChangedEvent:EventEmitter<String>=new EventEmitter<String>();

public CheckBoxChecked(){
  this.ComponentChangedEvent.emit(this.SelectedCategoryValue);
  
}
}
