import { Component, OnInit } from '@angular/core';
import { Room } from '../room';
import { RoomService } from '../room.service';
import { RoomListComponent } from '../room-list.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-room-details',
  templateUrl: './room-details.component.html',
  styleUrls: ['./room-details.component.css']
})
export class RoomDetailsComponent implements OnInit {

  id: number
  room: Room;

  constructor(private route: ActivatedRoute, private router: Router,
  private RoomService: RoomService) { }

  ngOnInit(): void {
    this.room = new Room();
    this.id = this.route.snapshot.params[ 'id' ];
    this.RoomService.getRoom(this.id)
    .subscribe(data => {
      console.log(data)
      this.room = data;

    }, error => console.log(error));
  }

  list(){
    this.router.navigate(['rooms']);
  }

}
