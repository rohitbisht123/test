import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UploadFilesComponent } from './upload-files/upload-files.component';
import { ViewFilesComponent } from './view-files/view-files.component';

const routes: Routes = [
  {
    path: 'view',
    component: ViewFilesComponent,
  },
  {
    path: '',
    component: UploadFilesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
