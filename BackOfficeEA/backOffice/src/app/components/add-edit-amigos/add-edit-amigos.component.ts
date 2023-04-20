import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ID, Amigos } from 'src/app/interfaces/amigo';
//import { ListAmigosComponent } from '../list-productos/list-productos.component';

import { AmigosService } from 'src/app/services/amigos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-edit-amigos',
  templateUrl: './add-edit-amigos.component.html',
  styleUrls: ['./add-edit-amigos.component.css']
})
export class AddEditAmigosComponent {
  formAmigos: FormGroup;
  loading: boolean = false;
  idAmigo: string;
  idUser:string;
  operacion: string = 'Añadir ';

  constructor(private fb: FormBuilder,
    private _amigosService: AmigosService,
    private router: Router,
    private toastr: ToastrService,
    private aRouter: ActivatedRoute,
    private _location: Location) {
    this.formAmigos = this.fb.group({
      //Para poner mas de una validacion hay que ponerlas entre claudators
      name: ['', Validators.required],
      surname: [null, Validators.required],
      email: [null, Validators.required],
      password: [null, Validators.required] 
    })
    this.idAmigo = aRouter.snapshot.paramMap.get("idAmigo")!;
    this.idUser = aRouter.snapshot.paramMap.get("idUser")!;

  }
  ngOnInit(): void {
    if (this.idAmigo != null) {
      this.operacion = 'Añadir ';
    }
  }

  goBack(){
    this._location.back();
  }


  addAmigo() {
    const amigo: Amigos = {


    }

    this.loading = true;
    
      //Es crear
      this._amigosService.postAmigosOfUser(this.idUser,this.idAmigo).subscribe((data:Amigos) => {
        this.toastr.success(`El amigo ${this.idAmigo} fue añadido con exito`, 'Amigo agregado')
        this.loading = false;
        this.idAmigo=String(data._id!);})
      

    }

}