
import './index.css';


function App() {

  // const handleGridItemClick = (event) => {
  //   const itemName = event.target.textContent;
  //   console.log(itemName);
  // };

  const hoverOverItem = (event) => {
    if (event.target.classList.contains('grid-item')) {
      event.target.style.backgroundColor = 'blue';
    }
  };

  const revert = (event) => {
    if (event.target.classList.contains('grid-item')) {
      event.target.style.backgroundColor = 'white';
    }
    
  };

  return (
    <div class="grid-container" onMouseOver={hoverOverItem} onMouseOut={revert}>
      <div name="box1" class="grid-item">1</div>
      <div class="grid-item">2</div>
      <div class="grid-item">3</div>
      <div class="grid-item">4</div>
      <div class="grid-item">5</div>
      <div class="grid-item">6</div>
      <div class="grid-item">7</div>
      <div class="grid-item">8</div>
      <div class="grid-item">9</div>
      <div class="grid-item">10</div>
      <div class="grid-item">11</div>
      <div class="grid-item">12</div>
      <div class="grid-item">13</div>
      <div class="grid-item">14</div>
      <div class="grid-item">15</div>
      <div class="grid-item">16</div>
      <div class="grid-item">17</div>
      <div class="grid-item">18</div>
      <div class="grid-item">19</div>
      <div class="grid-item">20</div>
      <div class="grid-item">21</div>
      <div class="grid-item">22</div>
      <div class="grid-item">23</div>
      <div class="grid-item">24</div>
      <div class="grid-item">25</div>
    </div>
  );
}

export default App;
