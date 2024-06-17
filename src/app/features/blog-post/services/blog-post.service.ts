import { Injectable } from '@angular/core';
import { AddBlogPost } from '../models/add-blog-post.model';
import { Observable } from 'rxjs';
import { BlogPost } from '../models/blog-post.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Category } from '../../category/models/category.model';
import { UpdateBlogPost } from '../models/update-blog-post.model';

@Injectable({
  providedIn: 'root'
})
export class BlogPostService {

  constructor(private http:HttpClient) { }

  createBlogPost(data:AddBlogPost):Observable<BlogPost>{
   return this.http.post<BlogPost>(`${environment.apiBaseurl}/api/blogposts?addAuth=true`,data);
  }

  getAllBlogPosts():Observable<BlogPost[]>{
   return this.http.get<BlogPost[]>(`${environment.apiBaseurl}/api/blogposts`);
  }

  getBlogPostById(id:string):Observable<BlogPost>{
    return this.http.get<BlogPost>(`${environment.apiBaseurl}/api/blogposts/${id}`);
  }

  getBlogPostByUrlHandle(urlHandle:string):Observable<BlogPost>{
    return this.http.get<BlogPost>(`${environment.apiBaseurl}/api/blogposts/${urlHandle}`);
  }

  updateBlogPost(id:string,updatedBlogPost:UpdateBlogPost):Observable<BlogPost>{
    return this.http.put<BlogPost>(`${environment.apiBaseurl}/api/blogposts/${id}?addAuth=true`,updatedBlogPost);
  }

  deleteBlogPost(id:string):Observable<BlogPost>{
    return this.http.delete<BlogPost>(`${environment.apiBaseurl}/api/blogposts/${id}?addAuth=true`);
  }
}
