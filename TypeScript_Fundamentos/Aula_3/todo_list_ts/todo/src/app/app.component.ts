import { Component } from '@angular/core';
import { Todo } from './models/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public todos : Todo[]  = [];
  public title : String = 'Minhas tarefas';
  public nome : String = 'Gabriel'

  constructor() { // contrutor: primeiro método para executar

    /*
    this.todos.push('passear com cachorro');
    this.todos.push('ir ao supermercado');
    this.todos.push('cortar cabelo');
    
    this.todos.push(1999);
    this.todos.push([{message : 'teste'}]);
    this.todos.push(new Date());
    */

    // pode ser feito passando o objeto como a linha  abaixo,
    // mas iremos usar o construtor da classe
    //this.todos.push(new Todo(), {id : 2, todo : 'Levar o cachorro para passear', done : false});
    // ____ // 
    // ↓↓ Usando o contrutor para preencher ↓↓
    this.todos.push(new Todo(1, 'Passear com o charro', false));
    this.todos.push(new Todo(2, 'Ir ao supermercado', true));
    this.todos.push(new Todo(3, 'Cortar o cabelo', false));

  }

  /*
  alterarTexto() {

    this.title = 'Texto alterado'
    this.nome = 'Gabriel Botão'
  }
  */

  // para remover um intem é necessário fazer um splice
  // entao vamos receber o indice do item de todo
  remove(todo : Todo) {
    const index = this.todos.indexOf(todo);

    if (index !== 1) {
      //verifica se A TAREFA(todo) esta na lista, se for !== 1 está na lista, ai pode remover
      this.todos.splice(index, 1);// pega o item que vai ser removido e diz quantos itens precisa remover

    }
  }

  markAsDone() {


  }

  markAsUndone() {

  }
}
