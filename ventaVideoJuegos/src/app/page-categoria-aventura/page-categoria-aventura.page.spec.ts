import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PageCategoriaAventuraPage } from './page-categoria-aventura.page';

describe('PageCategoriaAventuraPage', () => {
  let component: PageCategoriaAventuraPage;
  let fixture: ComponentFixture<PageCategoriaAventuraPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PageCategoriaAventuraPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PageCategoriaAventuraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
