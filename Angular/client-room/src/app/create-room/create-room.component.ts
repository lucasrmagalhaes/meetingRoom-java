import { Component, OnInit } from '@angular/core';
import { Room } from '../room';
import { Router } from '@angular/router';
import { RoomService } from '../room.service';

@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.component.html',
  styleUrls: ['./create-room.component.css']
})
export class CreateRoomComponent implements OnInit {
  room: Room = new Room();
  submited = false;

  constructor(private roomService: RoomService, private router: Router) { 

  }

  ngOnInit(): void {}

  newRoom(): void {
    this.submited = false;
    this.room = new Room();
  }

  save() {
    this.roomService.createRoom(this.room)
    .subscribe(data => console.log(data)),
    error => console.log(error);
    this.room = new Room ();
    this.gotoList();
  }

  onSubmit() {
    this.submited = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/rooms'])
  }
}