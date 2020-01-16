import { Component,Input,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-productsfilter',
  templateUrl: './productsfilter.component.html',
  styleUrls: ['./productsfilter.component.css']
})
export class ProductsfilterComponent {
@Input() public AllCount=0;
@Input() public ElectronicesCount=0;
@Input() public ShoesCount=0;
@Input() public BooksCount=0;
  public SelectedCategoryValue='All';
@Output() public ComponentChangedEvent:EventEmitter<String>=new EventEmitter<String>();

public RadioChanged(){
  this.ComponentChangedEvent.emit(this.SelectedCategoryValue);
  
}

}
