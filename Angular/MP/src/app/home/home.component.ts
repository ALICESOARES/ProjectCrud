import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public perfil:any=[];

  constructor() { }

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
