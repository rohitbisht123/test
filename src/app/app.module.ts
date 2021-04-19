import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ByteToMbPipe } from './byte-to-mb.pipe';
import { NgxFileDropModule } from 'ngx-file-drop';
import { HttpClientModule } from '@angular/common/http';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { ViewFilesComponent } from './view-files/view-files.component';
import { UploadFilesComponent } from './upload-files/upload-files.component';
@NgModule({
  declarations: [AppComponent, ByteToMbPipe, ViewFilesComponent, UploadFilesComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RxReactiveFormsModule,
    NgxFileDropModule,
    NgxDropzoneModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
