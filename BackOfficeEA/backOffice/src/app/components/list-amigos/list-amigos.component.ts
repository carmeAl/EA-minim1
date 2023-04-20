import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ID, Amigos } from 'src/app/interfaces/amigo';
import { AmigosService } from 'src/app/services/amigos.service';
 

@Component({
  selector: 'app-list-amigos',
  templateUrl: './list-amigos.component.html',
  styleUrls: ['./list-amigos.component.css']
})
export class ListAmigosComponent {
  listAmigos: Amigos[] = [];
  loading: boolean = false;
  idAmigo: string;

  constructor(private _amigosService: AmigosService,
    private toastr: ToastrService,
    private aRouter: ActivatedRoute) {
    this.idAmigo = aRouter.snapshot.paramMap.get("idAmigo")!;
  }

  ngOnInit(): void {
    if (this.idAmigo != null) {
      this.getListAmigos
      //this.getAmigosTicket(this.idAmigo);
    }else{
      this.getListAmigos()
    }
    
  }

  getListAmigos() {
    this.loading = true;
    this._amigosService.getListAmigos().subscribe((data: Amigos[]) => {
      this.listAmigos = data;
      this.loading = false;
    })
  }

  deleteAmigo(id: ID) {
    this.loading = true;
    this._amigosService.deleteAmigo(id).subscribe(() => {
      //this.loading=false;
      //if (this.idAmigo != null) {
        //this.getProductosTicket(this.idAmigo);
      //}else{
      this.getListAmigos()
      //}
      this.toastr.warning('El amigo fue eliminado con exito', 'amigo eliminado');
    });
  }

  //getAmigosTicket(id:string) {
    //this.loading = true;
    //this._amigosService.getAmigosTicket(id).subscribe((data: Amigo[]) => {
      //this.listAmigos = data;
      //this.loading = false;
    //})
  //}

}