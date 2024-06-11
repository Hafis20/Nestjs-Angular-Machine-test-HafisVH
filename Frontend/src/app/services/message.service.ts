import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private toastr: ToastrService) { }

  // For showing success message
  showSuccess(message: string) {
    this.toastr.success(message, '', {
      timeOut: 2000,
      progressAnimation: 'increasing',
      progressBar: true,
    })
  }

  // For showing warning message
  showWarning(message: string) {
    this.toastr.warning(message, '', {
      timeOut: 2000,
      progressAnimation: 'increasing',
      progressBar: true,
    })
  }

  // For showing error message
  showError(message: string) {
    this.toastr.error(message, '', {
      timeOut: 2000,
      progressAnimation: 'increasing',
      progressBar: true,
    })
  }
}
