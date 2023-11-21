import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-child',
  templateUrl: './add-child.component.html',
  styleUrls: ['./add-child.component.scss']
})
export class AddChildComponent {
registerForm = new FormGroup({
nickname: new FormControl('', [Validators.required]),
age: new FormControl('', [Validators.required]),
gender: new FormControl('', [Validators.required]),
picture: new FormControl('')
});


onSubmit() {
console.log(this.registerForm.value);
}


}
