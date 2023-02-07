import { Component ,OnInit} from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent  {

skills:any[];
constructor(){

  this.skills=[{name:"HTML",score:90},

  {name:"css",score:95},{name:"JavaScript",score:80},
  {name:"PHP",score:70}]
  
}

}
