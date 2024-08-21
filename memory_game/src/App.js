
import './index.css';


function App() {

  let values = [];

  const handleSquareClick = (e) => {
    // if values array is empty add the value to the array
    if (values.length === 0) {
      changeColor(e);
    } else if (values.length === 1) {
      // if array is not empty, check value of clicked square against value in array
      verifyValue(e);
    };
  };

  const changeColor = (e) => {
    // if square has been marked 'done' do nothing otherwise chang the square to blue
    if (!e.target.classList.contains('done')) {
      e.target.style.backgroundColor = 'blue';
    };
    addValue(e);
  };

  // if the id of the element in the values array matches the newly clicked square
  // do nothing, otherwise add it to the array. This prevents a square from matching
  // to itself.
  const verifyValue = (e) => {
    if (values[0].id !== e.target.id) {
      changeColor(e);
    }
  };

  // add the new value to the array. If there are 2 items in the array, call checkValue function
  const addValue = (e) => {
    values.push(e.target);
    if (values.length === 2) {
      checkValue();
    }
  };


  // if the data-value of both elements in the array match, change their class name
  // to 'done' and update background color to green then call resetValues function
  const checkValue = () => {
    if (values[0].getAttribute('data-value') === values[1].getAttribute('data-value')) {
      values.forEach((el) => el.className = `${el.className} done`);
      values.forEach((el) => el.style.backgroundColor = 'green');
      resetValues();
    }
    // if data-values do not match, wait 1 second then call reset colors
    else {
      setTimeout(resetColors, 1000);
    }
  };

  // reset background colors of each element in array back to original color
  // then call reset values function
  const resetColors = () => {
    values.forEach((el) => el.style.backgroundColor = 'purple');
    resetValues();
  };

  // reset values to an empty array
  const resetValues = () => {
    values = [];
  };

  let col = [];

  (() => {
    for (let i = 1; i <= 25; i++) {
      col.push(i);
    }
  })();

  return (
    <>
      <div className="grid-container" onClick={handleSquareClick}   >
        <div id='1' data-value='2' className="grid-item">2</div>
        <div id='2' data-value='2' className="grid-item">2</div>
        <div id='3' data-value='4' className="grid-item">4</div>
        <div id='4' data-value='4' className="grid-item">4</div>
        <div id='5' data-value='5' className="grid-item">5</div>
        <div id='6' data-value='6' className="grid-item">6</div>
        <div id='7' data-value='7' className="grid-item">7</div>
        <div id='8' data-value='8' className="grid-item">8</div>
        <div id='9' data-value='9' className="grid-item">9</div>
        <div id='10' data-value='10' className="grid-item">10</div>
        <div id='11' data-value='11' className="grid-item">11</div>
        <div id='12' data-value='12' className="grid-item">12</div>
        <div id='13' data-value='13' className="grid-item">13</div>
        <div id='14' data-value='14' className="grid-item">14</div>
        <div id='15' data-value='15' className="grid-item">15</div>
        <div id='16' data-value='16' className="grid-item">16</div>
        <div id='17' data-value='17' className="grid-item">17</div>
        <div id='18' data-value='18' className="grid-item">18</div>
        <div id='19' data-value='19' className="grid-item">19</div>
        <div id='20' data-value='20' className="grid-item">20</div>
        <div id='21' data-value='21' className="grid-item">21</div>
        <div id='22' data-value='22' className="grid-item">22</div>
        <div id='23' data-value='23' className="grid-item">23</div>
        <div id='24' data-value='24' className="grid-item">24</div>
        <div id='25' data-value='25' className="grid-item">25</div>
      </div>

      <p></p>

      <div className="grid-container" onClick={handleSquareClick}>
        {col.map((el, index) => {
          let el2 = 0;
          if (el % 2 === 1) {
            el2 = el + 2;
          } else {
            el2 = el + 1;
          }
          return (
            <div
              id={`item-${index}`}
              data-value={el2}
              className="grid-item"
              key={index}
            >
              {el}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default App;
