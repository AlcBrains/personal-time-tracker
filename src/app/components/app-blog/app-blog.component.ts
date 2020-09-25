import {Component, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {AppBlogModalComponent} from '../app-blog-modal/app-blog-modal.component';
import {PostService} from '../../service/post.service';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-app-blog',
  templateUrl: './app-blog.component.html',
  styleUrls: ['./app-blog.component.scss']
})
export class AppBlogComponent implements OnInit {
  posts: any[];

  constructor(private modalService: NgbModal, private callsService: PostService) {
    this.posts = [];
  }


  ngOnInit(): void {
    this.getData();
  }

  public openModal() {
    const modalRef = this.modalService.open(AppBlogModalComponent);
    modalRef.result.then((res) => {
      this.getData();
    });
  }

  public getData() {
    this.callsService.getAll().pipe(take(1)).subscribe((data) => {
      this.posts = data;
    });
  }
}
