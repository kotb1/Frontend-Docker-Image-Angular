import { Injectable } from '@angular/core';
import { Todo } from './models/Todo';
import { WebRequestService } from './web-request.service';
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private webReqService: WebRequestService) {}
  createList(title: string) {
    // We want to send a web request to create a list
    return this.webReqService.post({ title });
  }
  getTasks(){
    return this.webReqService.get();
  }
  }