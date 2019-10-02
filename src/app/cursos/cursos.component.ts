import { CursosService } from './cursos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  nomeCurso: string;
  cursos: string[];
  
  constructor(private cursosService: CursosService) { 
    this.nomeCurso = "Teste";
    this.cursos = this.cursosService.getCursos();
  }

  ngOnInit() {
  }

}
