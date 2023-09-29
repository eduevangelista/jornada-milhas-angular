import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-form-busca',
  templateUrl: './form-busca.component.html',
  styleUrls: ['./form-busca.component.scss']
})
export class FormBuscaComponent {
  @Input() variant: 'primary' | 'secondary' = 'primary';

  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(ModalComponent, {
      width:'50%'
    });
  }
}
