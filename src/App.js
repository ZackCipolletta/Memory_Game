
import './index.css';

function App() {

  const iconsArray = [
    '/Images//arturius.png',
    '/Images/case-2.0.png',
    '/Images/centurion.png',
    '/Images/coliostro.png',
    '/Images/crusher.png',
    '/Images/derrick.png',
    '/Images/doomray.png',
    '/Images/elias.png',
    '/Images/elram.png',
    '/Images/evo-suit.png',
  ];

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
      e.target.className = e.target.className + ' flipped';
      console.log("this is the item's classlist: ", e.target)
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

  function shuffleArray() {
    let array = [...iconsArray, ...iconsArray]; // Duplicate the iconsArray to create pairs
  
    // use Fisher-Yates shuffle algorithm to shuffle the array in place 
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)); // Get a random index from 0 to i
      [array[i], array[j]] = [array[j], array[i]];  // Swap elements at i and j
    }
  
    return array; // The original array is now shuffled
  }

  col = shuffleArray();

  return (
    <>
      <div className="grid-container" onClick={handleSquareClick}>
        {col.map((el, index) => {
          return (
            <div
              id={`item-${index}`}
              data-value={el}
              className="grid-item"
              key={index}
              style={{
                height: '200px', // Set the height of the div
                width: '200px', // Set the width of the div
                backgroundImage: `url(${el})`, // Path to your image
                backgroundSize: 'cover', // Adjust background image size
                backgroundPosition: 'center', // Center the background image
                backgroundRepeat: 'no-repeat', // Ensure the image doesn't repeat
              }}
            >
              {/* {el} */}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default App;
