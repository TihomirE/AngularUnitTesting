import { NO_ERRORS_SCHEMA } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing"
import { By } from "@angular/platform-browser";
import { HeroComponent } from "./hero.component"

describe('HeroComponent', () => {
    let fixture: ComponentFixture<HeroComponent>;
    let component: HeroComponent;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [HeroComponent],
            schemas: [NO_ERRORS_SCHEMA] // used to remove some console warnings/errors but should be used with care
        });
        fixture = TestBed.createComponent(HeroComponent);
        component = fixture.componentInstance;
    });

    it('should have the correct hero', () => {
        component.hero = { id: 1, name: 'SuperDude', strength: 3 };
        // fixture.detectChanges();
        expect(component.hero.name).toEqual('SuperDude');
    });

    it('should render the hero name in an anchor tag', () => {
        component.hero = { id: 1, name: 'SuperDude', strength: 3 };
        fixture.detectChanges();

        // let deA = fixture.debugElement.query(By.css('a'));
        // expect(deA.nativeElement.textContent).toContain('SuperDude');

        expect(fixture.nativeElement.querySelector('a').textContent).toContain('SuperDude');
    })

})