import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/app/models/Tarea';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.scss']
})
export class TareasComponent implements OnInit {
  listTarea: Tarea[] = [];
  nombreTarea = '';
constructor(){

}
ngOnInit(){

}

agregarTarea(){
  //Crear un Objeto Tarea
const tarea: Tarea = {
  nombre: this.nombreTarea,
  estado: false
}

  //Agregar el objeto tarea al Array
this.listTarea.push(tarea);

  //Reset Form

  this.nombreTarea = '';
}

DeleteTask(numer: number): void{
this.listTarea.splice(numer, 1);
}


actualizarTarea(tarea: Tarea, indes: number){
this.listTarea[indes].estado = !tarea.estado

console.log(this.listTarea[indes])
}
}
