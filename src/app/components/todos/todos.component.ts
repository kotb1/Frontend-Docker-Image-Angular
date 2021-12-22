import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { TaskService } from 'src/app/task.service';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [];
  new_task:Todo=new Todo;
  inputTodo:string="";
  tasks:any[]=[];
  update_task:Todo=new Todo;
  removed_task:Todo=new Todo;
  user_id:string="";
  constructor(private taskservice:TaskService) { }

  ngOnInit(): void {
    setTimeout(() => {
      for(let i =0;i<this.tasks.length;i++)
      {
        this.todos.push({
          content:this.tasks[i].title,
          completed:this.tasks[i].completed,
          _id:this.tasks[i]._id
        })
      }  
    }, 100);
    this.taskservice.getTasks().subscribe((tasks: any)=>{
      //console.log("el hamdulellah")
      this.tasks=tasks;
      //console.log(this.tasks[0])
      //console.log(this.tasks[0].title)
    })
  }
  toggleDone(id:number)
  {
    this.todos.map((v,i)=>
    {
      if(i==id)
      {
        v.completed=!v.completed;
      }
      return v;
    })
  }
  deleteTodo(id:number)
  {
    this.todos = this.todos.filter((v,i) => i !==id);
    this.removed_task = this.tasks[id];
    //this.taskservice.deleteTask(this.removed_task).subscribe((response: any)=>{
      //console.log(response);
    //});
  }
  addTodo()
  {
    /*this.new_task.content = this.inputTodo;
    this.new_task.completed = false;*/
    this.todos.push({
      content:this.inputTodo,
      completed:false,
      _id:""
    })
    this.taskservice.createList(this.inputTodo).subscribe((response: any)=>{
      console.log(response);
    });
    this.inputTodo = "";
  }
 
}
