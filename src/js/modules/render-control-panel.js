const renderControlPanel = () => {
  const container = document.getElementById('app');
  container.innerHTML += `
    <div class="control-panel">
      <div class="control-panel__left">
        <div class="switch-keyboard">
          <label class="switch">
            <div class="switch__text">Off</div>
            <input type="checkbox">
            <div class="slider round"></div>
            <div class="switch__text">On</div>
          </label>
        </div>
        <div class="toggle-sound">
          <div class="sound"><img src="assets/icons/volume.svg"></div>
          <div class="microphone"><img class="off" src="assets/icons/microphone-off.svg"></div>
        </div>
      </div>
      <div class="dark-theme">
        <label class="switch">
          <div class="switch__text">Light</div>
          <input type="checkbox">
          <div class="slider round"></div>
          <div class="switch__text">Dark</div>
        </label>
      </div>    
    </div>`;
};

export default renderControlPanel;
