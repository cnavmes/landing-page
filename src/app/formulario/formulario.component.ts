import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  encapsulation: ViewEncapsulation.Emulated
})
export class FormularioComponent implements OnInit {
  formulario: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formulario = this.fb.group({
      nombre: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      mensaje: ['', [Validators.required]]
    });
  }

  ngOnInit() {
    const savedData = localStorage.getItem('formularioData');
    if (savedData) {
      this.formulario.setValue(JSON.parse(savedData));
    }

    this.formulario.valueChanges.subscribe(value => {
      localStorage.setItem('formularioData', JSON.stringify(value));
    });
  }

  get nombre() {
    return this.formulario.get('nombre');
  }

  get email() {
    return this.formulario.get('email');
  }

  get mensaje() {
    return this.formulario.get('mensaje');
  }

  onSubmit() {
    if (this.formulario.valid) {
      console.log(this.formulario.value);
    }
  }
}
