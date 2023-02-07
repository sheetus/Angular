import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent {
  @Input() skill='';
  @Input()progress=0;
  cond:boolean=true
  constructor(){
    this.cond=true;

    

  }
  ngOnInit(): void {
    console.log(this.skill);
  }

}
