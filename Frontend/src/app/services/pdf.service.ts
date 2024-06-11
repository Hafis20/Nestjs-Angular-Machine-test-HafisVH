import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PdfService {

  constructor(private http: HttpClient) { }

  generatePDF(): Observable<Blob> {
    return this.http.get(`${environment.pdfUrl}/generate`, { responseType: 'blob' });
  }
}
