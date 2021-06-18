const renderTextarea = () => {
  const container = document.getElementById('app');
  container.innerHTML += '<textarea class="textarea" placeholder="Click here"></textarea>';
};

export default renderTextarea;
