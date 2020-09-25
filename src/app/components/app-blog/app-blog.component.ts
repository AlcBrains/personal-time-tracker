import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {AppBlogModalComponent} from '../app-blog-modal/app-blog-modal.component';

@Component({
  selector: 'app-app-blog',
  templateUrl: './app-blog.component.html',
  styleUrls: ['./app-blog.component.scss']
})
export class AppBlogComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  public openModal() {
    const modalRef =  this.modalService.open(AppBlogModalComponent);
  }

}
