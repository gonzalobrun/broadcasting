import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-dist-list',
  templateUrl: './add-dist-list.component.html',
  styleUrls: ['./add-dist-list.component.scss']
})
export class AddDistListComponent implements OnInit {

  newListForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.newListForm = fb.group({
      title: new FormControl(''),
      owner: new FormControl(''),
      description: new FormControl('')
    })
  }

  ngOnInit(): void {
  }
}
