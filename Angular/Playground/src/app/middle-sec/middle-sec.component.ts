import { Component, OnInit, OnDestroy } from '@angular/core';
import { ContentService } from '../content.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-middle-sec',
  templateUrl: './middle-sec.component.html',
  styleUrls: ['./middle-sec.component.css']
})
export class MiddleSecComponent implements OnInit, OnDestroy {
  currentUserType: string;
  userTypeSub: Subscription;

  constructor(private contentService: ContentService) { }

  ngOnInit(): void {
    this.currentUserType = this.contentService.currentUserType;
    this.userTypeSub = this.contentService.userTypeChanged.subscribe((newUserType)=> {
      this.currentUserType = newUserType;
    });
  }

  ngOnDestroy(): void {
    this.userTypeSub.unsubscribe();
  }
}
