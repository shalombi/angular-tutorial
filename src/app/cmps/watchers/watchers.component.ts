import { Component } from '@angular/core';

@Component({
  selector: 'watchers',
  templateUrl: './watchers.component.html',
  styleUrls: ['./watchers.component.scss']
})
export class WatchersComponent {

  watchers = [
    { name: 'Puki', _id: 'w101', imgSrc: '' },
    { name: 'Muki', _id: 'w102', imgSrc: '' },
    { name: 'Shuk', _id: 'w103', imgSrc: '' }
  ]


}
