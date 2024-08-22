
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
  let col2 = [];

  (() => {
    for (let i = 1; i <= 25; i++) {
      col.push(i);
    }
  })();

  function colRandom() {
    return (Math.floor(Math.random() * col.length))
  }

  (() => {
    for (let i = col.length; i > 0; i++) {
      col2.push(...col.splice(colRandom(), 1));
    }
  })();

  return (
    <>
      <div className="grid-container" onClick={handleSquareClick}>
        {col2.map((el, index) => {
          // check if the element in the array is odd or even. If odd add 2, otherwise add 1.
          // assign the resulting value to data-value.
          // This will give each element a matching data-value pair (3 & 3 or 5 & 5, etc)
          // Since we have an array of 1 - 25, the pair will be odds starting with 3.
          const pair = el % 2 === 1 ? el + 2 : el + 1;
          return (
            <div
              id={`item-${index}`}
              data-value={pair}
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
