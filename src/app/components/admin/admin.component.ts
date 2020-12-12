import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddDistListComponent } from '../add-dist-list/add-dist-list.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  today = new Date()

  distributionsLists = [
    {
      description: 'Subscribe here to receive updated exam dates and topics.',
      id: 1,
      isFull: false,
      owner: 'René Descartes',
      subscriptionCount: 12,
      subscriptionEndDate: this.today.getDate() + 3,
      subscriptionStartDate: this.today,
      title: 'Math class',
    },
    {
      description: 'Distributions list to recive physics exercises every weeks',
      id: 2,
      isFull: false,
      owner: 'Stephen Hawking',
      subscriptionCount: 12,
      subscriptionEndDate: this.today.getDate() + 3,
      subscriptionStartDate: this.today,
      title: 'Physics class',
    }
  ];

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
  }

  openDialog() {
    const dialogRef = this.dialog.open(AddDistListComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
