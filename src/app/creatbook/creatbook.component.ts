import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'app-creatbook',
  templateUrl: './creatbook.component.html',
  styleUrls: ['./creatbook.component.css']
})
export class CreatbookComponent implements OnInit {

  constructor(private service: BookService, public router: Router) { }

  ngOnInit(): void {
  }

  showlist(){
    this.router.navigateByUrl('')
  }

  book: any = {
    title: "",
    author: "",
    description:"",
  }


  createBook(){
    this.service.createbook(this.book)
    .then(res => {
      this.router.navigateByUrl('/')
      window.alert('create thành công')
    }).catch(e =>{
      window.alert('Error')
    })
  }

}
