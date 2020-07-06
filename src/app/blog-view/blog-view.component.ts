import { Component, OnInit, OnDestroy } from '@angular/core';
//We need to write
import { ActivatedRoute, Router } from "@angular/router";
import { BlogService } from '../blog.service';
import { BlogHttpService } from '../blog-http.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css'],
  providers : [Location]
})
export class BlogViewComponent implements OnInit, OnDestroy {

  public currentBlog;

  

  constructor(private _route: ActivatedRoute, private router: Router, public blogHttpService:BlogHttpService, private location : Location) { 
    console.log("constructor called");
  }

  ngOnInit(){
    console.log("onitcalled");
    let myBlogId = this._route.snapshot.paramMap.get('blogId');
    this.blogHttpService.getSingleBlogInformation(myBlogId).subscribe(

      data =>{
        this.currentBlog=data["data"];
      },

      error =>{
        console.log(error.errorMessage);
      }
    )
  }

  public deleteThisBlog(): any{
    this.blogHttpService.deleteBlog(this.currentBlog.blogId).subscribe(

      data =>{
        console.log("Blog Deleted Successfully");
        alert("Blog Deleted Successfully");
        this.router.navigate(['/home']);
        
      },

      error =>{
        console.log(error.errorMessage);
        alert("Some Error Occurred");
       
      }
    )
  }

  public goBackToPreviousPage(): any{
    this.location.back();
  }
  ngOnDestroy(): void {
    
  }

  

  

}
