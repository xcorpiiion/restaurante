import { Component, OnInit } from "@angular/core"

/**
 * @Component -> é uma pequena parte independente e reusaveis, onde eu posso referenciar ele em uma outra
 * parte da aplicação
 * selector -> componente raiz da aplicação (é onde eu faço referência no html para chamar o meu html deste
 * componente)
 * templateUrl -> ele pega o html que será a "cara" do projeto
 * styleUrls -> ele é o css da página (ele precisa esta entre [], pois ele receber um vetor de css) ex:
 * [./app.compoment.css]
 */
@Component({
  selector: 'mt-app',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {

  content = 'Welcome do Meat App!'

  constructor() { }

  ngOnInit() {
  }

}
