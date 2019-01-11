class Age {
  constructor(userAge) {
      this.userAge = userAge;
      this.mercuryYears = 0;
    }
  calculateMercuryYears() {
    this.mercuryYears = Math.round(this.userAge/0.24);
    return this.mercuryYears;
  }

  calculateVenusYears() {
    this.venusYears = Math.round(this.userAge/0.62);
    return this.venusYears;
  }
  }

export { Age };
