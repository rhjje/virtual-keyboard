export default class MainKey {
  constructor(main, side, mainRus, sideRus) {
    this.main = main;
    this.side = side;
    this.mainRus = mainRus;
    this.sideRus = sideRus;
  }

  render() {
    return `
      <div class="key">
        <span class="side-key">${this.side}</span>
        <span class="main-key">${this.main}</span>
        <span class="side-key-rus disabled">${this.sideRus}</span>
        <span class="main-key-rus disabled">${this.mainRus}</span>
      </div>`;
  }
}
