import { Component } from '@angular/core';

@Component({
  selector: 'app-gridecatlog',
  templateUrl: './gridecatlog.component.html',
  styleUrls: ['./gridecatlog.component.css']
})
export class GridecatlogComponent {

public Productes=[{Id:1,
                   name:'SamsungTv',
                   price:'700000',
                   photos:'assets/iphone.jpeg'

                 },
                 { Id:2,
                   name:'Nike Casual',
                   price:'7000',
                   photos:'assets/iphone.jpeg'

                 },
                 { Id:3,
                   name:'Apple Phone',
                   price:'70000',
                   photos:'assets/iphone.jpeg'

                 }

];
public AddProduct(){
this.Productes=[];
}
public TrackById(index,product){
  return product.Id;
}
}
