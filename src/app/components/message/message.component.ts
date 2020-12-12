import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  newMessageForm: any;

  constructor(fb: FormBuilder) {
    this.newMessageForm = fb.group({
      message: new FormControl('')
    })
  }

  ngOnInit(): void {
  }
}
