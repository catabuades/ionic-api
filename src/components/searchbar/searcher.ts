import { Component } from '@angular/core'
import { Http } from '@angular/http'
import { Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'search-input',
  templateUrl: 'searcher.html',
})
export class SearchInput {
 // El Output emite el evento onArtistSearch, al cual se le assigna el valor de la búsqueda de la función 'getArtist',
	@Output() onArtistSearch: EventEmitter<any> = new EventEmitter<any>()

  constructor(public http: Http) {
  }

// Como la Api devuelve un Json en formato .txt, la única manera que he encontrado para poder leer e utilizar
// la información de la búsqueda, ha sido utilizando xml http en javascript nativo, parseando el resultado para poder
// llamarlo en el html
  getArtist(ev: any) {
    const artist = this.searchQuery
    const url = `https://itunes.apple.com/search?term=${artist}&entity=song`
    var req = new XMLHttpRequest();
    req.open('GET', url, true);
    req.onreadystatechange = (aEvt) =>{
      if (req.readyState == 4) {
        if (req.status == 200) {
          this.onArtistSearch.emit(JSON.parse(req.responseText).results)
        }
        else
          console.error("Error loading page\n");
      }
    };

    req.send(null);
  }

}
