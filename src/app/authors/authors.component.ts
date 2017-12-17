import { Component, OnInit } from '@angular/core';
import { AuthorsService } from './authors.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  private authors: any =[];
  constructor(
    private _authorsService: AuthorsService
  ) { }

  ngOnInit() {
    this.authors = this._authorsService.getAuthors();
  }

}
