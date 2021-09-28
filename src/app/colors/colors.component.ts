import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.css']
})
export class ColorsComponent implements OnInit {

  colorForm = new FormGroup({
    color: new FormControl('', [Validators.required])
  });

  constructor() { }

  ngOnInit(): void {
  }

  getColor() {
    return this.colorForm.get('color')?.value;
  }

}
