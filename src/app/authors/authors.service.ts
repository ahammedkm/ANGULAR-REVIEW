import { Injectable } from '@angular/core';

@Injectable()

export class AuthorsService {
    getAuthors() {
        return [
          { name: 'Author1'},
          { name: 'Author2'},
          { name: 'Author3'},
          { name: 'Author4'},
        ];
    }
}