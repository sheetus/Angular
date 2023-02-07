import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { SkillsComponent } from './skills/skills.component';
import { PortofiloComponent } from './portofilo/portofilo.component';
import { FooterComponent } from './footer/footer.component';
import { SkillComponent } from './skill/skill.component';
import { ProjectComponent } from './project/project.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutmeComponent,
    SkillsComponent,
    PortofiloComponent,
    FooterComponent,
    SkillComponent,
    ProjectComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    NgbNavModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
