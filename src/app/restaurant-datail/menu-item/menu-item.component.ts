import { MenuItem } from './menu-item.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'mt-menu-item',
  templateUrl: './menu-item.component.html'
})

export class MenuItemComponent implements OnInit {
  
  /**
   * Ele me permite que o valor seja modificado pelo componet parent
   */
  @Input() menuItem: MenuItem;
  /**
   * 
   */

   /**
    * Me permite criar um evento personalizado que será lido pelo front
    * new EventEmitter -> ele é responsavel por criar o evento
    */
  @Output() add = new EventEmitter
  
  constructor() { }

  ngOnInit() {
  }
  
  emitAddEvent() {
    /**
     * emit(this.menuItem) -> ele me permite emitir o evento quando ele for chamado
     */
    this.add.emit(this.menuItem)
  }

}