import { ComponentFixture, TestBed } from "@angular/core/testing";
import { of } from "rxjs";
import { HeroesComponent } from "./heroes.component"

describe('HeroesComponent', () => {
    let fixture: ComponentFixture<HeroesComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [HeroesComponent]
        })
        fixture = TestBed.createComponent(HeroesComponent);
    })









    // let component: HeroesComponent;
    // let HEROES;
    // let mockHeroService;

    // beforeEach(() => {
    //     HEROES = [
    //         { id: 1, name: 'SpiderDude', strength: 8 },
    //         { id: 2, name: 'Wonderful Woman', strength: 24 },
    //         { id: 3, name: 'SuperDude', strength: 55 },
    //     ]

    //     mockHeroService = jasmine.createSpyObj(['getHeroes', 'addHero', 'deleteHero']);

    //     component = new HeroesComponent(mockHeroService);
    // });

    // describe('delete', () => {

    //     it('should remove the indicated hero from the heroes list', () => {
    //         mockHeroService.deleteHero.and.returnValue(of(true)); // as we just need an observable and don't care about value we can use it like this
    //         component.heroes = HEROES;

    //         component.delete(HEROES[2]);

    //         const contains = component.heroes.some(hero => hero.name === 'SuperDude');

    //         expect(contains).toBe(false);
    //     });
    //     it('should call deleteHero method', () => {
    //         mockHeroService.deleteHero.and.returnValue(of(true)); // as we just need an observable and don't care about value we can use it like this
    //         component.heroes = HEROES;

    //         component.delete(HEROES[2]);

    //         expect(mockHeroService.deleteHero).toHaveBeenCalledWith(HEROES[2]);
    //     });
    // })
})