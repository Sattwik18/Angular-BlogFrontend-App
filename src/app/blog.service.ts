import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  public allBlogs = [
    {
      "blogId":"1",
      "lastModified":"2017-10-20T12:20:47.854Z",
      "created":"2017-10-20T12:20:47.854Z",
      "tags":[],
      "author":"Admin",
      "category":"Comedy",
      "isPublished":true,
      "views":0,
      "bodyHtml":"this is blog body",
      "description":"this is blog 1 description",
      "title":"This is blog 1",

    },

    {
      "blogId":"2",
      "lastModified":"2017-10-20T12:20:51.678Z",
      "created":"2017-10-20T12:20:51.678Z",
      "tags":[],
      "author":"Admin",
      "category":"Comedy",
      "isPublished":true,
      "views":0,
      "bodyHtml":"this is blog body",
      "description":"this is blog 2 description",
      "title":"This is blog 2",

    },

    {
      "blogId":"3",
      "lastModified":"2017-10-20T12:20:47.854Z",
      "created":"2017-10-20T12:20:47.854Z",
      "tags":[],
      "author":"Admin",
      "category":"Comedy",
      "isPublished":true,
      "views":0,
      "bodyHtml":"this is blog body",
      "description":"this is blog 3 description",
      "title":"This is blog 3",

    }
  ]

  public currentBlog;

  constructor() { }

  public getAllBlogs(): any{
    return this.allBlogs;
  }

  public getSingleBlogInformation(currentBlogId): any{
    for(let blog of this.allBlogs){
      if(blog.blogId==currentBlogId){
        this.currentBlog=blog;
      }
    } 
 
    return this.currentBlog;
   }

  
}
