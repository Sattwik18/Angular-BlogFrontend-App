import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable} from "rxjs";
import { catchError, tap } from 'rxjs/operators';
//import 'rxjs/add/operator/catch';
//import 'rxjs/add/operator/do';

@Injectable({
  providedIn: 'root'
})
export class BlogHttpService {

  public allBlogs;
  public currentBlog;
  public baseUrl = 'https://blogapp.edwisor.com/api/v1/blogs';
  public authToken = 'YjBhYzZhMWNhMTdkMTY2Y2JkMDYyNzIwMTU3MTFjZmM1NTFmZDRiNWJjMDlkMmViYTg2MmM5OGUwMjg4YjhhNDY3NjNkMjdjMTU4Mjg1MGM1ZWE2YzgyMDdiN2YwNzE2YmU1YTVhYWEwNzcwZDA2ZTU2YTUzYWFmNmJmNmQxMzJmZA=='

  constructor(private _http:HttpClient) { 

  }

  private handleError(err: HttpErrorResponse){
    return Observable.throw(err.message)
  }

  public getAllBlogs(): any{
    let myResponse = this._http.get(this.baseUrl+'/all?authToken=' + this.authToken);
    return myResponse;
  }

  public getSingleBlogInformation(currentBlogId): any{
    let myResponse = this._http.get(this.baseUrl+'/view' + '/' + currentBlogId + '?authToken='+ this.authToken);
    return myResponse;
   }

   public createBlog(blogData): any{
    let myResponse = this._http.post(this.baseUrl+'/create' + '?authToken='+ this.authToken, blogData);
    return myResponse;
   }

   public deleteBlog(blogId): any{
    let data = {}
    let myResponse = this._http.post(this.baseUrl + '/' + blogId +'/delete'+ '?authToken='+ this.authToken, data);
    return myResponse;
   }

   public editBlog(blogId, blogData): any{
    let myResponse = this._http.put(this.baseUrl + '/' + blogId + '/edit' + '?authToken='+ this.authToken, blogData);
    return myResponse;
   }
}
