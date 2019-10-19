import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Entrega } from '../../model/entrega';
import { ActivatedRoute } from '@angular/router';
import { EntregaService } from 'ionic-entregaTudo2018.1/src/app/services/entrega.service';
@Component({
  selector: 'app-perfil-entrega',
  templateUrl: './perfil-entrega.page.html',
  styleUrls: ['./perfil-entrega.page.scss'],
})
export class PerfilEntregaPage implements OnInit {
  
  protected entrega: Entrega = new Entrega;
  protected id: string = null;

  constructor(
    protected activatedRoute: ActivatedRoute,
    protected entregaService: EntregaService,
  ) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    if (this.id) {
      this.entregaService.get(this.id).subscribe(
        res => {
          this.entrega = res
        },
        erro => this.id = null
      )
    }
  }

}
