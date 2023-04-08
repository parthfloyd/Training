import {Injectable} from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class ContentService {
    currentUserType:string ="User";
    userTypes = ['Admin', 'Manager', 'User', 'Moderator'];
    userTypeChanged = new Subject<string>();
    
    changeUserType(userType: string) {
        this.currentUserType = userType;
    }
}