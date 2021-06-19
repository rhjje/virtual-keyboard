const renderTextarea = () => {
  const container = document.getElementById('app');
  container.innerHTML += '<textarea class="textarea" placeholder="Start typing"></textarea>';
};

export default renderTextarea;
