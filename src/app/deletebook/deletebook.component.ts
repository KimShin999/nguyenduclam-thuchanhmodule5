import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'app-deletebook',
  templateUrl: './deletebook.component.html',
  styleUrls: ['./deletebook.component.css']
})
export class DeletebookComponent implements OnInit {


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

  showlist(){
    this.router.navigateByUrl('')
  }

  deletebook(id){
    this.service.deletebook(id)
    .then(res => {
      this.book = res;
      alert('xóa thành công');
      this.router.navigateByUrl('');
    }).catch(e =>{
      window.alert('connection Error')
    })
  }

}
