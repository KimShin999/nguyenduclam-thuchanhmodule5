import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'app-detailbook',
  templateUrl: './detailbook.component.html',
  styleUrls: ['./detailbook.component.css']
})
export class DetailbookComponent implements OnInit {

  book: any = {
    title: "",
    author: "",
    description:"",
  }

  idbook: number;

  constructor(public router: Router, private service: BookService, private actRoute: ActivatedRoute) {
    this.idbook = parseInt(this.actRoute.snapshot.params.id);
    this.getDataById(this.idbook);
  }

  ngOnInit(): void {
  }

  getDataById(id) {
    this.service.detailData(id)
      .then(res => {
        this.book = res;
      }).catch(e => {
        window.alert('Connection Error !');
      })
  }

  updatebook(){
    this.service.updateData(this.idbook, this.book)
    .then(res => {
      this.book = res;
      alert('cập nhật thành công')
      this.router.navigateByUrl('');
    }).catch(e => {
      window.alert('Connection Error !');
    })
  }

  showlist(){
    this.router.navigateByUrl('')
  }

}
