import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { GestorService } from '../gestor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css'],
})
export class NewComponent implements OnInit {
  form: FormGroup;
  fechaActual: any;
  constructor(private gestorService: GestorService, private router: Router) {
    this.fechaActual = new Date(Date.now())
      .toLocaleDateString()
      .replace(/\//g, '-');
    this.form = new FormGroup({
      titulo: new FormControl('', [Validators.required]),
      autor: new FormControl('', [Validators.required]),
      categoria: new FormControl('', [Validators.required]),
      fecha: new FormControl(''),
      texto: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {}

  onSubmit(post) {
    post.fecha = new Date(Date.now()).toLocaleDateString().replace(/\//g, '-');
    this.gestorService.agregarPost(post);
    this.router.navigate(['/blog']);
  }
}
