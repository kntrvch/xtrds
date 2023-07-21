import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerPage } from './career.page';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

describe('CareerPage', () => {
  let component: CareerPage;
  let fixture: ComponentFixture<CareerPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CareerPage],
      imports: [IonicModule.forRoot(), RouterModule.forRoot([])]
    }).compileComponents();

    fixture = TestBed.createComponent(CareerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
