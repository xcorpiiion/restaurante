"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppComponent = void 0;
var core_1 = require("@angular/core");
/**
 * @Component -> é uma pequena parte independente e reusaveis, onde eu posso referenciar ele em uma outra
 * parte da aplicação
 * selector -> componente raiz da aplicação (é onde eu faço referência no html para chamar o meu html deste
 * componente)
 * templateUrl -> ele pega o html que será a "cara" do projeto
 * styleUrls -> ele é o css da página (ele precisa esta entre [], pois ele receber um vetor de css) ex:
 * [./app.compoment.css]
 */
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.content = 'Welcome do Meat App!';
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'mt-app',
            templateUrl: 'app.component.html'
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
