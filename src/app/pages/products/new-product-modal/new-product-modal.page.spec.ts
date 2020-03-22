import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewProductModalPage } from './new-product-modal.page';

describe('NewProductModalPage', () => {
  let component: NewProductModalPage;
  let fixture: ComponentFixture<NewProductModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewProductModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewProductModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
