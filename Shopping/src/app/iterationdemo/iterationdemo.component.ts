import { Component} from '@angular/core';

@Component({
  selector: 'app-iterationdemo',
  templateUrl: './iterationdemo.component.html',
  styleUrls: ['./iterationdemo.component.css']
})
export class IterationdemoComponent{

  productes=[{Name:'SamsungTV',
              Price:50000
              },
            {
              Name:'Mobile',
              Price:700000
            }
            
            ];

            public textName;
            public textPrice;

            public NewProduct={
              Name:"",
              Price:0
            }
            public AddProduct(){
              alert('product will be added');
              this.NewProduct={
              Name:this.textName,
              Price:this.textPrice
              };
              this.productes.push(this.NewProduct);
              this.textName='';
              this.textPrice='';
            }
            public DeleteProduct(index){
              var status=confirm('Are you sure to delete the product');
              if(status==true)
              {
               this.productes.splice(index,1);

              }
            }
}
