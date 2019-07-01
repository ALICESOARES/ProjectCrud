import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public perfil:any=[];

   PerfilStorage = [{name: "Leticia", idade: "12/10/1999", city: "Recife", musica: "reggae", filme: "ultimato"}]

  constructor() { localStorage.setItem("Perfis", JSON.stringify(this.PerfilStorage));
  this.perfil = JSON.parse( localStorage.getItem("Perfis"));}

  CriarPerfil( Perfil) {
    let data: any;
    data=Perfil.value
    data.id=Date.now()
    this.perfil.push(data);
    localStorage.setItem("Perfis",JSON.stringify(this.perfil));
    Perfil.resetForm()

  }

  ngOnInit() {
  }

}
