export class Clock {
  dailyMin = 24 * 60;

  constructor(hr, min) {
    !isNaN(hr) ? (this.hr = hr) : (this.hr = 0);
    !isNaN(min) ? (this.min = min) : (this.min = 0);
    this.totalTimeMin = this.hr * 60 + this.min;
    this.updateTime();
  }

  updateTime() {
    this.daytimeMin = ((this.totalTimeMin % this.dailyMin) + this.dailyMin) % this.dailyMin;
    this.currentHourStr = Math.floor(this.daytimeMin / 60)
      .toString()
      .padStart(2, "0");
    this.currentMinStr = (this.daytimeMin % 60).toString().padStart(2, "0");
  }

  toString() {
    return `${this.currentHourStr}:${this.currentMinStr}`;
  }

  plus(minutesAdded) {
    this.totalTimeMin += minutesAdded;
    this.updateTime();
    return this;
  }

  minus(minutesSubtracted) {
    this.totalTimeMin -= minutesSubtracted;
    this.updateTime();
    return this;
  }

  equals(clockObjToCompareAgainst) {
    this.updateTime();
    clockObjToCompareAgainst.updateTime();
    return this.daytimeMin === clockObjToCompareAgainst.daytimeMin;
  }
}
