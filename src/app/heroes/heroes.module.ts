import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core'
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    //Componenetes requeridos solo para el modulo
    declarations: [
        HeroeComponent,
        ListadoComponent,
    ],
    //Componenetes que se requiren publicos
    exports: [
        ListadoComponent,
        HeroeComponent,
    ],
    //Modulos que se colocan en los imports
    imports: [
        CommonModule //angular commonimportado para usar las directivas
    ],
    //Servicios
    providers: [],
    bootstrap: [],
})
export class HeroesModule {

}