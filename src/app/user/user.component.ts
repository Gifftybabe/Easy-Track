import { Component, computed, EventEmitter, input, Input, output, Output, signal } from '@angular/core';
// import { DUMMY_USERS } from '../dummy-users';

// const randomIndex = Math.floor(Math.random() *  DUMMY_USERS.length)

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
//   //USing signal...
// selectedUser = signal(DUMMY_USERS[randomIndex])
// imagePath = computed(() =>  'assets/users/' + this.selectedUser().avatar)

// selectedUser = DUMMY_USERS[randomIndex]

// get imagePath() {
//   return 'assets/users/' + this.selectedUser.avatar
// }

// onSelectUser() {
//   const randomIndex = Math.floor(Math.random() *  DUMMY_USERS.length)
//   // this.selectedUser.set(DUMMY_USERS[randomIndex]) // Using signal
//   this.selectedUser = DUMMY_USERS[randomIndex]
// }
@ Input ({ required: true }) id!: string;
@ Input({ required: true }) avatar!: string;
@ Input({ required: true }) name!: string;
// @ Output() select = new EventEmitter();

select = output<string>();

// avatar = input.required<string>();
// name = input.required<string>();

get imagePath() {
  return 'assets/users/' + this.avatar;
}
// imagePath = computed(() => {
//   return 'assets/users/' + this.avatar()
// })

onSelectUser() {
  this.select.emit(this.id)
}

}