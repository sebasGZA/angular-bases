import { UpperCasePipe } from "@angular/common";
import { Component, computed, signal } from "@angular/core";

@Component({
    imports: [UpperCasePipe],
    templateUrl: './hero-page.component.html',
})
export class HeroPageComponent {
    name = signal('Ironman')
    age = signal(45)

    heroDescription = computed(() => {
        const description = `${this.name()} - ${this.age()}`
        return description
    })

    capitalizeName = computed(() => this.name().toUpperCase())

    changeHero() {
        this.name.set('Superman')
        this.age.set(22)
    }

    resetForm() {
        this.name.set('Ironman')
        this.age.set(45)
    }

    changeAge() {
        this.age.set(60)
    }
}