import {Component} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {FormControl} from '@angular/forms';
import {PostService} from '../../service/post.service';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-blog-modal',
  templateUrl: './app-blog-modal.component.html',
  styleUrls: ['./app-blog-modal.component.scss']
})
export class AppBlogModalComponent {

  public title = new FormControl('');
  public body = new FormControl('');

  constructor(private modalService: NgbActiveModal, private callsService: PostService) {
  }


  public save(): void {
    this.callsService.save({title: this.title.value, content: this.body.value, createdAt: new Date()}).pipe(take(1)).subscribe();
    this.modalService.close();
  }

  public dismiss(): void {
    this.modalService.close();
  }
}
