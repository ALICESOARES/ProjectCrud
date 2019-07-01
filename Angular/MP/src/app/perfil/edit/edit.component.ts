import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  public perfil: any = {};
  public msg: any;
  public id : any;
  public create: boolean;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  EditarPerfil(form:NgForm) {

    let perfil: any = {};
    perfil = form.value;
    perfil.id = Number(this.id);



    let localStringperfils = localStorage.getItem('Perfis');
    let localArrayperfils = JSON.parse(localStringperfils);

    console.log(perfil);
    console.log(perfil.id);
    console.log(typeof (perfil.id));
    console.log(typeof (localArrayperfils.id));
    console.log( localArrayperfils );

    for (let index  = 0; index < localArrayperfils.length; index++) {

      if(localArrayperfils[index].id === perfil.id){

        localArrayperfils[index] = perfil;


     }
    }





    let listaToString = JSON.stringify(localArrayperfils);
    localStorage.setItem('Perfis', listaToString);
    form.resetForm();

  }
  _findPerfilLocalStorage(id:any) {
    const localStringPerfils = localStorage.getItem("Perfis");
    const localArrayPerfils = JSON.parse(localStringPerfils);
    const getPerfil = localArrayPerfils.filter(item => {
      if (item.id === id) {
        return true;
      }
    });
    if (getPerfil.length > 0) {
      return getPerfil[0];
    } else {
      return null;
    }
  }


  ngOnInit() {

    const { id } = this.route.snapshot.params;
    this.id=id
    if (id === 'new') {
      this.create = true;
    } else {
      const findPerfil = this._findPerfilLocalStorage( Number(id) );

      if (findPerfil) {
        this.perfil = findPerfil;
        this.create = false;
      } else {

        this.router.navigate(['/', 'perfil']);
      }
    }
  }
  }



