import { Component, OnInit, OnDestroy } from '@angular/core';
import { ContentService } from '../content.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit, OnDestroy {
  currentUserType: string;
  constructor(private contentService: ContentService) { }
  userTypeSub: Subscription;

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
