import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { SystemUsersService } from '../../../shared/services/system-users.service';
import { SystemUsers } from '../../../shared/models/system-users.model';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-system-users-home',
  templateUrl: './system-users-home.component.html',
  styleUrls: ['./system-users-home.component.scss'],
  animations: [routerTransition()],
  providers: [SystemUsersService]
})
export class SystemUsersHomeComponent implements OnInit {

  public token: string = localStorage.getItem('token');
  constructor(private translate: TranslateService, public router: Router, private systemUsersService: SystemUsersService) { }

  ngOnInit() { }

  public listUsers(): void {

    this.systemUsersService.countUser(this.token)
      .subscribe((apiResponse: number) => {
        this.router.navigate(['/system-users/systemUsersList'], { queryParams: { contador: apiResponse } });
      });

  }

  public addNewUser(): void {
    this.router.navigateByUrl('/system-users/newSystemUser'); //ROTEAMENTO

  }
  changeLang(language: string) {
    this.translate.use(language);
  }
}

