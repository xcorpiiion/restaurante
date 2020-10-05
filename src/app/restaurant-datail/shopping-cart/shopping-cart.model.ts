import { MenuItem } from './../menu-item/menu-item.model';

export class CartItem {
    /**
     * ele me permite injetar metodos e para acessar o mesmo, eu preciso usar o this dentro de um método
     */
    constructor(public menuItem: MenuItem, public quantity: number = 1) {
    }

    value(): number {
        return this.menuItem.price * this.quantity;
    }
}