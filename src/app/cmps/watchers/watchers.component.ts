import { Component } from '@angular/core';
import { Watcher } from 'src/app/models/watcher.model';

@Component({
  selector: 'watchers',
  templateUrl: './watchers.component.html',
  styleUrls: ['./watchers.component.scss']
})
export class WatchersComponent {

  watchers = [
    { name: 'Puki', _id: 'w101', imgSrc: '../../assets/imgs/netflix-avatar.png', favoriteShows: ['show 2', 'show 3'] },
    { name: 'Muki', _id: 'w102', imgSrc: '../../assets/imgs/netflix-avatar.png', favoriteShows: ['show 3'] },
    { name: 'Shuki', _id: 'w103', imgSrc: '../../assets/imgs/netflix-avatar.png', favoriteShows: ['show 1', 'show 3'] }
  ]

  selected!: Watcher | undefined
  // selected!: object 

  onSelect(watcherId: string | null): void {
    const watcher = this.watchers.filter(w => w._id === watcherId)
    this.selected = watcher[0]
  }

  removeWatcher(watcherId: string): void {
    console.log(watcherId)
    this.watchers = this.watchers.filter(w => w._id !== watcherId)
  }

  onAddWatcher(): void {
    const name: string | null = prompt('name?')
    const watcher: Watcher = {
      name: name ? name : '',
      _id: 'w' + Math.floor(Math.random() / 1000),
      imgSrc: '../../assets/imgs/netflix-avatar.png',
      favoriteShows: ['show 2', 'show 3']
    }
    this.watchers = [...this.watchers, watcher]
  }

  onEditWatcher(watcher: Watcher) {
    const name: any = prompt('name?')

    let newWatcher: Watcher = { ...watcher, name }
    this.watchers = this.watchers.map(w => w._id !== newWatcher._id ? w : newWatcher)
  }

}