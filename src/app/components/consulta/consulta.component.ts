import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RegistroService } from 'src/app/services/registro.service';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {
  registros: any[] = [];



  constructor(
    private registroService: RegistroService,
  ) { }

  ngOnInit(): void {
    this.getRegistro()

  }


  getRegistro() {
    this.registroService.getRegistros().subscribe(data => {
      this.registros = [];
      data.forEach((element: any) => {
        this.registros.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });
      console.log(this.registros);
    })

  }

}
