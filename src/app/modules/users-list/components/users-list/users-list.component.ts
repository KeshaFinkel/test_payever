import {Component, OnDestroy, OnInit} from '@angular/core';
import { PageEvent } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import {map, takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit, OnDestroy {

  displayedColumns = ['first_name', 'last_name', 'email'];
  userList: any[] = [];
  pagesCount: number;
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.subscribeToRouteData();
  }
  private subscribeToRouteData() {
    this.activatedRoute.data.pipe(
      takeUntil(this.destroy$)
    ).subscribe(({usersList}) => {
        this.userList = usersList.data;
        this.pagesCount = usersList.total;
    });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
  pageChanged(event: PageEvent): void {
    const page: number = event.pageIndex + 1;
    this.router.navigate(['./users/', page]);
  }

}
