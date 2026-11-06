import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Navabr } from './navabr';

describe('Navabr', () => {
  let component: Navabr;
  let fixture: ComponentFixture<Navabr>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Navabr],
    }).compileComponents();

    fixture = TestBed.createComponent(Navabr);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
