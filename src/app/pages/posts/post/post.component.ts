import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  //agrgar el input con el nombre que queremos se
  //visualice en el html el cual viene del componente padre
  @Input() mensaje: any;
  @Output() clickPost = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {

  }
  onClick(){
    this.clickPost.emit(this.mensaje.id);
      console.log(this.mensaje.id);
  }

}
