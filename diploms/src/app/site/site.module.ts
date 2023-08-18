import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiteRoutingModule } from './site-routing.module';
import { BasicComponent } from './components/basic/basic.component';
import { AbiturientComponent } from './components/abiturient/abiturient.component';
import { HeaderComponent } from './components/header/header.component';
import { HistoryComponent } from './components/history/history.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { DocsComponent } from './components/docs/docs.component';
import { StudlifeComponent } from './components/studlife/studlife.component';
import { PhDComponent } from './components/ph-d/ph-d.component';
import { BakalavrComponent } from './components/bakalavr/bakalavr.component';
import { ScienceComponent } from './components/science/science.component';
import { MagistrComponent } from './components/magistr/magistr.component';
import { LaboratoriesComponent } from './components/laboratories/laboratories.component';
import { KafedraComponent } from './components/kafedra/kafedra.component';
import { VidgukiComponent } from './components/vidguki/vidguki.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { NewsComponent } from './components/news/news.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { NewsitemComponent } from './components/newsitem/newsitem.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    BasicComponent,
    AbiturientComponent,
    HeaderComponent,
    HistoryComponent,
    FooterComponent,
    ContactsComponent,
    DocsComponent,
    StudlifeComponent,
    PhDComponent,
    BakalavrComponent,
    ScienceComponent,
    MagistrComponent,
    LaboratoriesComponent,
    KafedraComponent,
    VidgukiComponent,
    FeedbackComponent,
    NewsComponent,
    NewsitemComponent,
  ],
  imports: [
    CommonModule,
    SiteRoutingModule,
    ReactiveFormsModule,
    CarouselModule.forRoot(),
  ],
})
export class SiteModule {}
