import { Component, OnInit } from '@angular/core';
import { Router} from "@angular/router";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit{
   title = "Angular js Blog App"
   curBlog:object = {
        title: '',
        body: '',
        image: '',
        author: '' 
   };

   constructor(private router: Router) {}

   ngOnInit(): void {

   }

   addBlog() {
    localStorage.setItem('curBlog', JSON.stringify(this.curBlog));
    this.router.navigateByUrl('/blog');
   }
}
