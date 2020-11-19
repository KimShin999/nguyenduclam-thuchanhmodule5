import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(public httpClinet: HttpClient) { }

  getData = (): Promise<Object> => {
    debugger
    return new Promise((resolve, reject) => {
      let url = "http://localhost:3000/books";
      this.httpClinet.get(url)
      .subscribe(res => {
          resolve(res);
      }, err => {
          reject(err);
      })
    })
  }

  createbook = (book: any): Promise<Object> => {
    return new Promise((resolve, reject) => {
      let url = "http://localhost:3000/books";
      this.httpClinet.post(url, book)
      .subscribe(res =>{
        resolve(res);
      }, err => {
        reject(err);
      })
    })
  }

  deletebook = (id): Promise<Object> => {
    return new Promise((resolve, reject) => {
      let url = `http://localhost:3000/books/${id}`;
      this.httpClinet.delete(url)
      .subscribe(res =>{
        resolve(res);
      }, err => {
        reject(err);
      })
    })
  }

  detailData = (id): Promise<Object> =>{
    debugger
    return new Promise((resolve, reject) => {
      let url = `http://localhost:3000/books/${id}`;
      this.httpClinet.get(url)
      .subscribe(res =>{
        resolve(res);
      }, err => {
        reject(err);
      })
    })
  }

  updateData = (id, book): Promise<Object> =>{
    debugger
    return new Promise((resolve, reject) => {
      let url = `http://localhost:3000/books/${id}`;
      this.httpClinet.put(url,book)
      .subscribe(res =>{
        resolve(res);
      }, err => {
        reject(err);
      })
    })
  }




}
