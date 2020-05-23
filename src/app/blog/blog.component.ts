import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post.model';
import { GestorService } from '../gestor.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit {
  posts: Post[];
  constructor(private gestorService: GestorService) {
    this.posts = [];
  }

  async ngOnInit() {
    this.recuperartodoslosPost();
  }

  filtroCategoria($event) {
  console.log($event.target.value)
    if ($event.target.value === 'todos') {
      this.recuperartodoslosPost();
    } else {
      this.gestorService.getPostByCategoria($event.target.value)
      .then((articulos) => {
        this.posts = articulos;
      });
    }
  }

  async recuperartodoslosPost() {
    this.posts = this.gestorService.getAllPost();
  }
}
