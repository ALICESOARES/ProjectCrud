import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  public perfis:any=[];

  constructor() { }


  Listar(){
    const lista =localStorage.getItem('Perfis');
    this.perfis=JSON.parse(lista);
  }
  removeperfil(id) {
    let perfil = [];
    let updateperfil = [];
    const localperfil = localStorage.getItem('Perfis');
    perfil = JSON.parse(localperfil);


    updateperfil = perfil.filter(item => item.id !== id);


    localStorage.setItem('Perfis', JSON.stringify(updateperfil));


    this.Listar();
  }

  ngOnInit() {
    this.Listar();

  }

}
