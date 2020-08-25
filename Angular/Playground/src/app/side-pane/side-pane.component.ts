import { Component, OnInit, Input } from '@angular/core';
import {ContentService} from '../content.service';
@Component({
  selector: 'app-side-pane',
  templateUrl: './side-pane.component.html',
  styleUrls: ['./side-pane.component.css']
})
export class SidePaneComponent implements OnInit {
  userTypes: string[] = [];
  constructor(private contentService: ContentService) { }

  ngOnInit(): void {
    this.userTypes = this.contentService.userTypes;
  }

  changeUserType(userType: string){
    this.contentService.changeUserType(userType);
    this.contentService.userTypeChanged.next(userType);
  }
}
