
import './index.css';


function App() {

  let values = [];

  const changeColor = (e) => {
    if (values.length < 2) {
      if (!e.target.classList.contains('done')) {
        const currentColor = e.target.style.backgroundColor;
        e.target.style.backgroundColor = currentColor === 'blue' ? 'black' : 'blue';
        checkVals(e);
      }
    }
  };

  const checkVals = (e) => {
    if (values.length === 2) {
    }
    values.push(e.target);
    if (values.length === 2) {
      if (values[0].getAttribute('data-value') === values[1].getAttribute('data-value')) {
        values.forEach((el) => el.className = `${el.className} done`);
        values.forEach((el) => el.style.backgroundColor = 'green');
        resetValues();
      }
      else {
        setTimeout(resetColors, 1000);
      }
    }
    values.forEach((el) => console.log(el.getAttribute('data-value')));
  };

  const resetColors = () => {
    values.forEach((el) => el.style.backgroundColor = 'black');
    resetValues();
  };

  const resetValues = () => {
    values = [];
  };


  return (
    <div class="grid-container" onClick={changeColor}   >
      <div data-value='2' class="grid-item">2</div>
      <div data-value='2' class="grid-item">2</div>
      <div data-value='4' class="grid-item">4</div>
      <div data-value='4' class="grid-item">4</div>
      <div data-value='5' class="grid-item">5</div>
      <div data-value='6' class="grid-item">6</div>
      <div data-value='7' class="grid-item">7</div>
      <div data-value='8' class="grid-item">8</div>
      <div data-value='9' class="grid-item">9</div>
      <div data-value='10' class="grid-item">10</div>
      <div data-value='11' class="grid-item">11</div>
      <div data-value='12' class="grid-item">12</div>
      <div data-value='13' class="grid-item">13</div>
      <div data-value='14' class="grid-item">14</div>
      <div data-value='15' class="grid-item">15</div>
      <div data-value='16' class="grid-item">16</div>
      <div data-value='17' class="grid-item">17</div>
      <div data-value='18' class="grid-item">18</div>
      <div data-value='19' class="grid-item">19</div>
      <div data-value='20' class="grid-item">20</div>
      <div data-value='21' class="grid-item">21</div>
      <div data-value='22' class="grid-item">22</div>
      <div data-value='23' class="grid-item">23</div>
      <div data-value='24' class="grid-item">24</div>
      <div data-value='25' class="grid-item">25</div>
    </div>
  );
}

export default App;
