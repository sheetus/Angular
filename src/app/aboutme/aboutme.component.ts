import { Component, } from '@angular/core';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent  {

name:string;
constructor(){
  this.name='Shady';
}



  ngOnInit():void{}//when  component is intialized and iw want to call api to the component 
  ngDoCheck():void{} // when i want to check the changes that happen in component

}

