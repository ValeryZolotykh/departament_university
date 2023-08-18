import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicComponent } from './components/basic/basic.component';
import { AbiturientComponent } from './components/abiturient/abiturient.component';
import { HistoryComponent } from './components/history/history.component';
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
import { NewsitemComponent } from './components/newsitem/newsitem.component';

const routes: Routes = [
  {
    path: '',
    component: BasicComponent,
  },
  {
    path: 'abiturient',
    component: AbiturientComponent,
  },
  {
    path: 'history',
    component: HistoryComponent,
  },
  {
    path: 'contacts',
    component: ContactsComponent,
  },
  {
    path: 'docs',
    component: DocsComponent,
  },
  {
    path: 'studlife',
    component: StudlifeComponent,
  },
  {
    path: 'phd',
    component: PhDComponent,
  },
  {
    path: 'bakalavr',
    component: BakalavrComponent,
  },
  {
    path: 'science',
    component: ScienceComponent,
  },
  { path: 'magistr', component: MagistrComponent },
  { path: 'laboratories', component: LaboratoriesComponent },
  { path: 'kafedra', component: KafedraComponent },
  { path: 'vidguki', component: VidgukiComponent },
  { path: 'feedback', component: FeedbackComponent },
  { path: 'news', component: NewsComponent },
  { path: 'news/:id', component: NewsitemComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SiteRoutingModule {}
