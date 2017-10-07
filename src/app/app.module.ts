import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BlogComponent } from './blog/blog.component';
import { TechComponent } from './tech/tech.component';
import { TruncatePipe } from './app.pipe';
import { DatePipe } from '@angular/common';
import { AddComponent } from './add/add.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    TechComponent,
    TruncatePipe,
    AddComponent
  ],
   imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: '',
        component: BlogComponent
      },
      {
        path:'blog',
        component:TechComponent
      },
      {
        path:'add',
        component:AddComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
