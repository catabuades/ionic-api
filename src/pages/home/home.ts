import { Component } from '@angular/core';
import { Http } from '@angular/http'
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  	this.count = 0
  }

  //esta función se activa cuando se emite el evento searcher.ts y almacena la información que queremos requerir 
  //para escuchar en el padre y poder utilizar esa información
  getArtistResult(songs:any){
  	this.results = songs
  }

  //es una función que también recoge un evento de cambio en los likes, para poder hacer el contador, se catpa el 
  // cambio de estilo de este, de tal modo cuando se añade la classe 'like-change' el contador suma uno, y cuando
  // se elimina se resta uno
  like(e) {
  	const change = e.target
  	if (change.classList.contains("like-change")) {
  		this.count--
  		change.classList.remove("like-change")
  	} else {
  		change.classList.add("like-change")
  		this.count++
  	}
  }
}
