import {Component, computed, effect, signal} from '@angular/core';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-like-counter',
  imports: [
    NgIf
  ],
  templateUrl: './like-counter.html',
  styleUrl: './like-counter.scss'
})
export class LikeCounter {
  likes = signal(0);
  username = signal("Utilisateur");

  likeMessage = computed(() => {
    const count = this.likes();
    if (count === 0) return "Aucun like";
    if (count === 1) return "1 personne aime";
    return `${count} personnes aiment`;
  });

  isPopular = computed(() =>  this.likes() >= 10);

  ngOnInit() {
    effect(() => {
      console.log(`${this.username} a ${this.likes()} likes`);
    });
  }

  setUsername(name: string) {
    this.username.set(name);
  }

  resetLikes() {
    this.likes.set(0);
  }

  addLike() {
    this.likes.update(count => count + 1);
  }

  removeLike() {
    this.likes.update(count => count > 0 ? count - 1 : 0);
  }
}
