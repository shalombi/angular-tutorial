import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'seasons',
  templateUrl: './seasons.component.html',
  styleUrls: ['./seasons.component.scss']
})
export class SeasonsComponent implements OnInit, OnDestroy {


  currentTime: null | string = null
  currentSeason: string = this.setSeason()
  darkMode: boolean = true
  // currentImg: string  = this.getSeasonImagePath(this.currentSeason)

  ngOnInit(): void {
    setInterval(() => {
      this.currentTime = this.getCurrentTime()

    }, 1000)
  }

  ngOnDestroy(): void {
  }

  setSeason(): string {
    const month: number = (new Date()).getMonth() + 1
    if (month > 9) return 'fall'
    if (month > 6) return 'summer'
    if (month > 3) return 'spring'
    return 'winter'
  }

  getSeasonImagePath(currentSeason: string): string {
    return `../../assets/imgs/${currentSeason}.jpeg`;
  }


  getCurrentTime(): string {
    const now = new Date()
    const hours: string = now.getHours().toString().padStart(2, '0');
    const minutes: string = now.getMinutes().toString().padStart(2, '0');
    const seconds: string = now.getSeconds().toString().padStart(2, '0');

    return `${hours}:${minutes}:${seconds}`
  }

  toggleIsDarkMode(): void {
    this.darkMode = !this.darkMode
  }

}
