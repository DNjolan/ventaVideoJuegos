import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PageCategoriaFutbolPage } from './page-categoria-futbol.page';

describe('PageCategoriaFutbolPage', () => {
  let component: PageCategoriaFutbolPage;
  let fixture: ComponentFixture<PageCategoriaFutbolPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PageCategoriaFutbolPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PageCategoriaFutbolPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
