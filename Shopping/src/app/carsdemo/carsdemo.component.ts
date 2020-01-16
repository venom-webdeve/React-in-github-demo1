import { Component} from '@angular/core';

@Component({
  selector: 'app-carsdemo',
  templateUrl: './carsdemo.component.html',
  styleUrls: ['./carsdemo.component.css']
})
export class CarsdemoComponent{

 public car=[{Name:'Range Rover',Photo:'assets/iphone.jpeg',Likes:0,Dislikes:0},
 {Name:'Ferrari',Photo:'assets/iphone.jpeg',Likes:0,Dislikes:0}];

public likesClick(cars){

  cars.Likes++;
}

public DislikesClick(cars){
   cars.Dislikes++;
}

}
