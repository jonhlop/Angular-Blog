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
  constructor(private gestorService: GestorService, private router: Router) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      titulo: new FormControl('', [Validators.required]),
      autor: new FormControl('', [Validators.required]),
      categoria: new FormControl('', [Validators.required]),
      fecha: new FormControl('', [Validators.required]),
      texto: new FormControl('', [Validators.required]),
    });
  }

  onSubmit(post) {
    
    this.gestorService.agregarPost(post);
    this.router.navigate(['/blog']);
  }
}
