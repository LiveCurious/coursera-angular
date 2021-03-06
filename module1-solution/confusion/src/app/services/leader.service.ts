import { Injectable } from '@angular/core';
import {LEADERS} from '../shared/leaders';
import {Leader} from '../shared/leader';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }

  public getLeaders(): Leader[]
  {
    return LEADERS;
  }

  public getLeader(id: string):Leader
  {
    return LEADERS.filter(leader => leader.id === id)[0];
  
  }

  public getFeaturedLeader(): Leader
  {
return LEADERS.filter(leader => leader.featured)[0];
  }

}
