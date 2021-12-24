import { Component } from "@angular/core";


@Component({
    selector: 'app-heroe',
    templateUrl: './heroe.component.html',

})

export class HeroeComponent {
    nombre: string = 'IronMan'
    edad: number = 45

    get nombreCapitalizado(){
        return this.nombre.toUpperCase()
    }

    obtenerNombre(): string {
        return `${this.nombre} - ${this.edad}`
    }

    cambiarNombre(): void {
        this.nombre = 'SpiderMan'
    }
    cambiarEdad(): void {
        console.log('Hey!....')
        this.edad = 46
    }
}