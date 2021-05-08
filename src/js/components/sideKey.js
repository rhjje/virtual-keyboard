export default class SideKey {
  constructor(content) {
    this.content = content;
  }

  render() {
    return `
      <div class="key ${this.content.toLowerCase()}">
        <span>${this.content}</span>
      </div>`;
  }
}
