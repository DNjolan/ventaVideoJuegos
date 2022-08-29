import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PageCategoriaAccionPage } from './page-categoria-accion.page';

describe('PageCategoriaAccionPage', () => {
  let component: PageCategoriaAccionPage;
  let fixture: ComponentFixture<PageCategoriaAccionPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PageCategoriaAccionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PageCategoriaAccionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
