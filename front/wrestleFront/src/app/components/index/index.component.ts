import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

export class Techniques {
  constructor(
    public id: number,
    public title: string,
    public difficulty: string,
    public date: Date
  ) {}
}

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements OnInit {
  technique!: Techniques[];

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.getTechnique();
  }

  getTechnique() {
    this.httpClient
      .get<any>('http://localhost:3000/api/techniques')
      .subscribe((response) => {
        console.log(response);
        this.technique = response;
      });
  }
}
