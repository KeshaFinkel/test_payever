import {Component, OnDestroy, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {ApiService} from '../../../core/services/api.service';
import {UserInterface} from '../../../../../interfaces/user.interface';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {

  user: UserInterface;
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private apiService: ApiService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    const userId: number = this.activatedRoute.snapshot.params['id'];
    this.apiService.fetchUserById(userId)
      .pipe(takeUntil(this.destroy$))
      .subscribe((user: UserInterface) => {
      this.user = user;
    });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  back(): void {
    this.router.navigate(['./users']);
  }
}
