class Age {
  constructor(currentDate, userDOB) {
      this.currentDate = currentDate;
      this.birthDate = userDOB;
      this.userAge = 0;
      this.earthYears = 0;
      this.mercuryYears = 0;
      this.venusYears = 0;
      this.marsYears = 0;
      this.jupiterYears = 0;
      this.earthExpectancy = 0;
    }

  calculateEarthYears()
  {
    let earthYears = this.currentDate.getUTCFullYear() - this.birthDate.getUTCFullYear();
    let birthYear = this.birthDate.getUTCFullYear();
    console.log("birthYear:,", birthYear);
    this.userAge = earthYears;
    return earthYears;
  }

  calculateMercuryYears() {
    this.mercuryYears = Math.round(this.userAge/0.24);
    return this.mercuryYears;
  }

  calculateVenusYears() {
    this.venusYears = Math.round(this.userAge/0.62);
    return this.venusYears;
  }

  calculateMarsYears() {
    this.marsYears = Math.round(this.userAge/1.88);
    return this.marsYears;
  }

  calculateJupiterYears() {
    this.jupiterYears = Math.round(this.userAge/11.86);
    return this.jupiterYears;
  }

  lifeExpectancyInEarth(lifeSpan){
    let lifeExpectancy = lifeSpan - this.userAge;
    this.earthExpectancy =lifeExpectancy;
    return this.earthExpectancy;
  }

  lifeExpectancyInMercury(lifeSpan)
  {
    let lifeSpanMercuryYears = Math.round(lifeSpan/0.24);
    let remainingMercuryYears = lifeSpanMercuryYears - this.mercuryYears;
    console.log("remainingMercuryYears:",remainingMercuryYears);
    return remainingMercuryYears;
  }

  lifeExpectancyInVenus(lifeSpan)
  {
    let lifeSpanVenusYears = Math.round(lifeSpan/0.62);
    let remainingVenusYears = lifeSpanVenusYears - this.venusYears;
    console.log("remainingVenusYears:", lifeSpanVenusYears);
    return remainingVenusYears;
  }

  lifeExpectancyInMars(lifeSpan)
  {
    let lifeSpanMarsYears = Math.round(lifeSpan/1.88);
    let remainingMarsYears = lifeSpanMarsYears - this.marsYears;
    console.log("remainingMarsYears:", lifeSpanMarsYears);
    return remainingMarsYears;
  }

  lifeExpectancyInJupiter(lifeSpan)
  {
    let lifeSpanJupiterYears = Math.round(lifeSpan/11.86);
    let remainingJupiterYears = lifeSpanJupiterYears - this.jupiterYears;
    console.log("remainingJupiterYears:", lifeSpanJupiterYears);
    return remainingJupiterYears;
  }
}
export { Age };
