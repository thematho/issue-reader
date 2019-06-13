import { Component, Input, HostListener, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';

export class FileHandler {
  data: Observable<any>;
  onLoadFile(reader: FileReader): Promise<any> {
    throw new Error('Implementation for File Handler needs to be provided');
  };
}

@Component({
  selector: 'app-file-reader',
  templateUrl: './file-reader.component.html',
  styleUrls: ['./file-reader.component.scss']
})
export class FileReaderComponent {
  @ViewChild('fileInput', { static: false }) fileInputElement: ElementRef;

  @Input() label?: string = null;
  @Input('accept') acceptTypes?: string = null;

  fileToUpload: File = null;
  fileReader: FileReader;

  constructor(private fileHandler: FileHandler) { }

  @HostListener('dragover', ['$event'])
  @HostListener('dragenter', ['$event'])
  onDrag(event: DragEvent) {
    event.preventDefault();
  }
  @HostListener('drop', ['$event'])
  onDrop(event: DragEvent) {
    event.preventDefault();
    this.handleFileChange(event.dataTransfer.files);
  }
  handleFileChange(files: FileList) {
    if (files.length) {
      this.fileToUpload = files[0];
      this.fileReader = new FileReader();
      this.fileReader.onload = this.onFileLoad.bind(this);
      this.fileReader.readAsText(this.fileToUpload, "UTF-8");
    }
  }
  onFileLoad(ev: ProgressEvent) {
    this.fileHandler.onLoadFile(this.fileReader).catch((e) => {
      this.fileInputElement.nativeElement.value = '';
    });
  }
}
