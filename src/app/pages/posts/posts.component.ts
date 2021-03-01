import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

// mensajes: any[] = [];
mensajes: any;

  constructor(private dataService: DataService ) { }

  ngOnInit() {
    //asi uso un distroy para evitar sobrecargar la memoria
    this.mensajes  = this.dataService.getPosts();

    // this.dataService.getPosts().subscribe((posts : any []) => {
    //   console.log(posts);
    //   this.mensajes = posts;

   // });
  }
  //escucha el evento desde el hijo
  escuchaClick(id: number){
    console.log('click en :',id)
  }

}
