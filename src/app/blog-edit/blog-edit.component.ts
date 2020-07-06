import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogHttpService } from '../blog-http.service';

@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.css']
})
export class BlogEditComponent implements OnInit {

  public currentBlog;
  public possibleCategories = ["Comedy","Drama","Action","Technology"];
  constructor(private _route: ActivatedRoute, private router: Router, private blogHttpService : BlogHttpService) { }

  ngOnInit(): any{
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

  public editThisBlog(): any{

    this.blogHttpService.editBlog(this.currentBlog.blogId, this.currentBlog).subscribe(

      data =>{
        alert("Blog Edited Successfully");
        this.router.navigate(['/blog',this.currentBlog.blogId]);
      },

      error =>{
        alert("Some Error Occurred");
      }
    )
  }

}
