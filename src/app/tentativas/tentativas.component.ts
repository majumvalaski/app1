import { Component, OnInit, OnChanges, Input } from '@angular/core';
import {Coracao} from '../shared/coracao.model';
@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.scss']
})
export class TentativasComponent implements OnInit {
  
  @Input() public tentativas: number
  public coracoes: Coracao[] = [
    new Coracao(true), new Coracao(true), new Coracao(true)
  ]

  constructor(){
    console.log(this.coracoes)
  }
  ngOnChanges(){
    if(this.tentativas != this.coracoes.length){
      let indice = this.coracoes.length - this.tentativas
      //modificando o status do coracao a cada erro
      this.coracoes[indice-1].cheio = false
    }
  }
  ngOnInit(){
    console.log('tentativas recebidas do painel: ', this.tentativas)
  }
}
