import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RegistroService } from 'src/app/services/registro.service';



@Component({
  selector: 'app-registro-tt',
  templateUrl: './registro-tt.component.html',
  styleUrls: ['./registro-tt.component.css']
})
export class RegistroTtComponent implements OnInit {

  registrartt: FormGroup;
  enviar = false;
  loading = false;
  id: string | null;

  constructor(
    private fb: FormBuilder,
    private registroService: RegistroService,
    private router: Router,
    private toastr: ToastrService,
    private arouter: ActivatedRoute
  ) {
    this.registrartt = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      cedula: ['', [Validators.required, Validators.maxLength(10)]],
      uni: ['', Validators.required],
      facu: ['', Validators.required],
      carre: ['', Validators.required],
      tema: ['', Validators.required],
      tutor: ['', Validators.required],
      tipo: ['', Validators.required],
    })
    this.id = this.arouter.snapshot.paramMap.get('id');
    console.log(this.id);
  }
  ngOnInit() {

  }

  agregarRegistro() {
    this.enviar = true;
    if (this.registrartt.invalid) {
      return;
    }
    const registro: any = {
      nombre: this.registrartt.value.nombre,
      apellido: this.registrartt.value.apellido,
      cedula: this.registrartt.value.cedula,
      uni: this.registrartt.value.uni,
      facu: this.registrartt.value.facu,
      carre: this.registrartt.value.carre,
      tema: this.registrartt.value.tema,
      tutor: this.registrartt.value.tutor,
      tipo: this.registrartt.value.tipo,
    }
    this.loading = true;
    this.registroService.agregarRegistro(registro).then(() => {
      this.toastr.success('Trabajo de titulacion registrado', 'Registro Exitoso')
      this.loading = false;
      this.router.navigate(['/consulta'])
    }).catch(error => {
      console.log('error');
      this.loading = false;
    })
  }

}


