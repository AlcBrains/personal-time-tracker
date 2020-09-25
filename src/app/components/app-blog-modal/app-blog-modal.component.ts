import {Component} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-blog-modal',
  templateUrl: './app-blog-modal.component.html',
  styleUrls: ['./app-blog-modal.component.scss']
})
export class AppBlogModalComponent  {


  constructor(private modalService: NgbActiveModal) {}

  public save(): void {
    this.modalService.close();
  }

  public dismiss(): void {
    this.modalService.close();
  }
}
