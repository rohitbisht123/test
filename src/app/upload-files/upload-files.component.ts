import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-upload-files',
  templateUrl: './upload-files.component.html',
  styleUrls: ['./upload-files.component.css'],
})
export class UploadFilesComponent implements OnInit {
  @ViewChild('postLoader') loader: ElementRef;
  loadingPercentage = 0;
  FileUploadForm: FormGroup;
  constructor(private fb: FormBuilder, private http: HttpClient) {}
  files: File[] = [];

  onSelect(event) {
    console.log(event);
    this.files.push(...event.addedFiles);
  }

  onRemove(event) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }
  ngOnInit() {}

  submit() {
    console.log('hhh');
    const formdata = new FormData();
    for (let img of this.files) {
      formdata.append('files', img);
    }
    this.loadingPercentage = 0;
    //console.log(formData);
    this.http
      .post(`http://localhost:3000/upload`, formdata, {
        reportProgress: true,
        observe: 'events',
      })
      .subscribe((events) => {
        if (events.type == HttpEventType.UploadProgress) {
          console.log(
            'Response',
            Math.round((events.loaded / events.total) * 100)
          );
          this.loadingPercentage = Math.round(
            (events.loaded / events.total) * 100
          );
          this.loader.nativeElement.style = `width:${Math.round(
            (events.loaded / events.total) * 100
          )}%`;
        } else if (events.type == HttpEventType.Response) {
          console.log('Response', HttpEventType.Response);
          alert('All files Uploaded');
          this.files = [];
        }
      });
  }

  deleteFile(i) {
    console.log(this.files);
    this.files.splice(i, 1);
  }
}
