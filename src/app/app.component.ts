import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  newFriend: string | null = null;
  favorites: string[] = [];

  people: string[] = ['lewis', 'jules', 'ed', 'nathan', 'dave', 'nigel'];

  addFriend() {
    if (!this.newFriend) {
      return;
    }
    this.people.push(this.newFriend);
    this.newFriend = null;
  }

  setFavorite(favorite: string) {
    this.favorites.push(favorite);
  }

  removeFavorite(favorite: string) {
    const index = this.favorites.indexOf(favorite);
    if (index !== -1) {
      this.favorites.splice(index, 1);
    }
  }
}
