import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'app-listbook',
  templateUrl: './listbook.component.html',
  styleUrls: ['./listbook.component.css']
})
export class ListbookComponent implements OnInit {


  books: any = [];

  constructor(public router: Router, private service: BookService) { }

  ngOnInit(): void {
    this.getdata();
  }

  getdata(){
    this.service.getData()
    .then(res => {
      this.books = res;
    }).catch(e =>{
      window.alert('connection Error')
    })
  }

  // deletebook(id){
  //   this.service.deletebook(id)
  //   .then(res => {
  //     this.books = res;
  //   }).catch(e =>{
  //     window.alert('connection Error')
  //   })
  // }

  deletebook(id){
    this.router.navigateByUrl('/delete/'+id)
  }



  formcreate(){
    this.router.navigateByUrl('/create')
  }

  detailbook(id){
    this.router.navigateByUrl('/detail/'+id)
  }

}
