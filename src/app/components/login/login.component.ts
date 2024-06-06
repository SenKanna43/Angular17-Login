import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginResponse } from '../../models/loginResponse.model';
import { Login } from '../../models/login.model';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, FormsModule, NgbAlertModule],
  providers: [Router],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  username: string = ''
  password: string = ''
  error: boolean = false
  showError: string = ''

  _service = inject(ApiService)
  route = inject(Router)

  userObj: Login = new Login()

  onLogin() {
    this._service.login(this.userObj).subscribe({
      next: (response: LoginResponse) => {
        console.log(response)
        if (response.token) {
          this.route.navigateByUrl('/dashboard')
        }
      },
      error: (err) => {
        console.log(err.error)
        this.error = true
        this.showError = err.error
        setTimeout(() => {
          return this.error = false
        }, 5000)
      }
    })
  }
}
