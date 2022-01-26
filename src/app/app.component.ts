import { Component } from '@angular/core';
import { ModalComponent } from './components/modal/modal.component';
import { ModalService } from './components/modal/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'codefirst-ngx-starter';

  constructor(private modalService: ModalService) {}

  showModal() {
    const modalRef = this.modalService.show(ModalComponent);

    modalRef.onOk.subscribe(() => {
      console.log('OK');
    });
  }

  onCancel() {
    console.log('cancel');
  }

  onOk() {
    console.log('ok');
  }
}
