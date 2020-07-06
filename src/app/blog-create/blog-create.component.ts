import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { BlogHttpService } from '../blog-http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.css']
})
export class BlogCreateComponent implements OnInit {

  constructor(private _route: ActivatedRoute, private router: Router, private blogHttpService : BlogHttpService) { 
    
  }

  public blogTitle : string;
  public blogBodyHtml : string;
  public blogDescription : string;
  public blogCategory : string;
  public possibleCategories = ["Comedy","Drama","Action","Technology"];

  ngOnInit(): void {
  }

  public createBlog():any{
    let blogData = {
      title : this.blogTitle,
      description : this.blogDescription,
      blogBody : this.blogBodyHtml,
      category : this.blogCategory

    }
    this.blogHttpService.createBlog(blogData).subscribe(

      data =>{
        alert("Blog Posted Successfully");
        
        setTimeout(()=>{
          this.router.navigate(['/blog',data.data.blogId]);
        }, 1000)
      },

      error =>{
        alert("Some Error Occurred");
       
      }

    )
  }

}
