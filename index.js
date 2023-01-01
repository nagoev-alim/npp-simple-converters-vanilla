// ⚡️ Import Styles
import './style.scss';
import feather from 'feather-icons';
import { showNotification } from './modules/showNotification.js';
import { capitalStr } from './modules/capitalStr.js';

// ⚡️ Render Skeleton
const data = [
  {
    name: 'weight',
    values: ['pounds', 'ounces', 'stones', 'kilograms', 'grams'],
  },
  {
    name: 'temperature',
    values: ['fahrenheit', 'celsius', 'kelvin'],
  },
  {
    name: 'length',
    values: ['feet', 'inches', 'yards', 'miles', 'meters', 'cm', 'kilometers'],
  },
  {
    name: 'speed',
    values: ['MPH', 'KPH', 'Knots', 'Mach'],
  },
];
document.querySelector('#app').innerHTML = `
<div class='app-container'>
  <div class='converters'>
  <h2>Converters</h2>
  <div class='converters__container'>
    ${data.map(({ name, values }) => `
      <section class='converters__item ${name}-converters'>
        <h3>${capitalStr(name)} Converter</h3>
        <p>Type a value in any of the fields to convert between ${name} measurements:</p>
        <form>
        ${values.map(item => `
          <label>
            <span>${capitalStr(item)}</span>
            <input type='number' placeholder='${capitalStr(item)}' data-${name}='${item.toLowerCase()}'>
          </label>
        `).join('')}
        </form>
      </section>
    `).join('')}
  </div>
</div>

  <a class='app-author' href='https://github.com/nagoev-alim' target='_blank'>${feather.icons.github.toSvg()}</a>
</div>
`;

// ⚡️Functions
/**
 * @function weightConverter - Weight fields change event handler
 * @param target
 */
const weightConverter = ({ target }) => {
  const value = parseFloat(target.value);
  const pounds = document.querySelector('[data-weight="pounds"]');
  const ounces = document.querySelector('[data-weight="ounces"]');
  const stones = document.querySelector('[data-weight="stones"]');
  const kilograms = document.querySelector('[data-weight="kilograms"]');
  const grams = document.querySelector('[data-weight="grams"]');

  switch (target.dataset.weight) {
    case 'pounds':
      kilograms.value = (value / 2.2046).toFixed(2);
      ounces.value = (value * 16).toFixed(2);
      grams.value = (value / 0.0022046).toFixed();
      stones.value = (value * 0.071429).toFixed(3);
      break;
    case 'ounces':
      pounds.value = (value * 0.062500).toFixed(4);
      kilograms.value = (value / 35.274).toFixed(4);
      grams.value = (value / 0.035274).toFixed(1);
      stones.value = (value * 0.0044643).toFixed(4);
      break;
    case 'stones':
      pounds.value = (value * 14).toFixed(1);
      kilograms.value = (value / 0.15747).toFixed(1);
      ounces.value = (value * 224).toFixed();
      grams.value = (value / 0.00015747).toFixed();
      break;
    case 'kilograms':
      pounds.value = (value * 2.2046).toFixed(2);
      ounces.value = (value * 35.274).toFixed(2);
      grams.value = (value * 1000).toFixed();
      stones.value = (value * 0.1574).toFixed(3);
      break;
    case 'grams':
      pounds.value = (value * 0.0022046).toFixed(4);
      kilograms.value = (value / 1000).toFixed(4);
      ounces.value = (value * 0.035274).toFixed(3);
      stones.value = (value * 0.00015747).toFixed(5);
      break;
    default:
      break;
  }
};

/**
 * @function temperatureConverter - Temperature fields change event handler
 * @param target
 */
const temperatureConverter = ({ target }) => {
  const value = parseFloat(target.value);
  const fahrenheit = document.querySelector('[data-temperature="fahrenheit"]');
  const celsius = document.querySelector('[data-temperature="celsius"]');
  const kelvin = document.querySelector('[data-temperature="kelvin"]');

  switch (target.dataset.temperature) {
    case 'fahrenheit':
      celsius.value = ((value - 32) / 1.8).toFixed(2);
      kelvin.value = (((value - 32) / 1.8) + 273.15).toFixed(2);
      break;
    case 'celsius':
      fahrenheit.value = ((value * 1.8) + 32).toFixed(2);
      kelvin.value = ((value) + 273.15).toFixed(2);
      break;
    case 'kelvin':
      fahrenheit.value = (((value - 273.15) * 1.8) + 32).toFixed(2);
      celsius.value = ((value) - 273.15).toFixed(2);
      break;
    default:
      break;
  }
};

/**
 * @function lengthConverter - Length fields change event handler
 * @param target
 */
const lengthConverter = ({ target }) => {
  const value = parseFloat(target.value);
  const feet = document.querySelector('[data-length="feet"]');
  const inches = document.querySelector('[data-length="inches"]');
  const yards = document.querySelector('[data-length="yards"]');
  const miles = document.querySelector('[data-length="miles"]');
  const meters = document.querySelector('[data-length="meters"]');
  const cm = document.querySelector('[data-length="cm"]');
  const kilometers = document.querySelector('[data-length="kilometers"]');

  switch (target.dataset.length) {
    case 'feet':
      meters.value = (value / 3.2808).toFixed(2);
      inches.value = (value * 12).toFixed(2);
      cm.value = (value / 0.032808).toFixed();
      yards.value = (value * 0.33333).toFixed(2);
      kilometers.value = (value / 3280.8).toFixed(5);
      miles.value = (value * 0.00018939).toFixed(5);
      break;
    case 'inches':
      feet.value = (value * 0.083333).toFixed(3);
      meters.value = (value / 39.370).toFixed(3);
      cm.value = (value / 0.39370).toFixed(2);
      yards.value = (value * 0.027778).toFixed(3);
      kilometers.value = (value / 39370).toFixed(6);
      miles.value = (value * 0.000015783).toFixed(6);
      break;
    case 'yards':
      feet.value = (value * 3).toFixed();
      meters.value = (value / 1.0936).toFixed(2);
      inches.value = (value * 36).toFixed();
      cm.value = (value / 0.010936).toFixed();
      kilometers.value = (value / 1093.6).toFixed(5);
      miles.value = (value * 0.00056818).toFixed(5);
      break;
    case 'miles':
      feet.value = (value * 5280).toFixed();
      meters.value = (value / 0.00062137).toFixed();
      inches.value = (value * 63360).toFixed();
      cm.value = (value / 0.0000062137).toFixed();
      yards.value = (value * 1760).toFixed();
      kilometers.value = (value / 0.62137).toFixed(2);
      break;
    case 'meters':
      feet.value = (value * 3.2808).toFixed(2);
      inches.value = (value * 39.370).toFixed(2);
      cm.value = (value / 0.01).toFixed();
      yards.value = (value * 1.0936).toFixed(2);
      kilometers.value = (value / 1000).toFixed(5);
      miles.value = (value * 0.00062137).toFixed(5);
      break;
    case 'cm':
      feet.value = (value * 0.032808).toFixed(3);
      meters.value = (value / 100).toFixed(3);
      inches.value = (value * 0.39370).toFixed(2);
      yards.value = (value * 0.010936).toFixed(3);
      kilometers.value = (value / 100000).toFixed(6);
      miles.value = (value * 0.0000062137).toFixed(6);
      break;
    case 'kilometers':
      feet.value = (value * 3280.8).toFixed();
      meters.value = (value * 1000).toFixed();
      inches.value = (value * 39370).toFixed();
      cm.value = (value * 100000).toFixed();
      yards.value = (value * 1093.6).toFixed();
      miles.value = (value * 0.62137).toFixed(2);
      break;
    default:
      break;
  }
};

/**
 * @function speedConverter - Speed fields change event handler
 * @param target
 */
const speedConverter = ({ target }) => {
  const value = parseFloat(target.value);
  const mph = document.querySelector('[data-speed="mph"]');
  const kph = document.querySelector('[data-speed="kph"]');
  const knots = document.querySelector('[data-speed="knots"]');
  const mach = document.querySelector('[data-speed="mach"]');

  switch (target.dataset.speed) {
    case 'mph':
      kph.value = (value * 1.609344).toFixed(2);
      knots.value = (value / 1.150779).toFixed(2);
      mach.value = (value / 761.207).toFixed(4);
      break;
    case 'kph':
      mph.value = (value / 1.609344).toFixed(2);
      knots.value = (value / 1.852).toFixed(2);
      mach.value = (value / 1225.044).toFixed(5);
      break;
    case 'knots':
      mph.value = (value * 1.150779).toFixed(2);
      kph.value = (value * 1.852).toFixed(2);
      mach.value = (value / 661.4708).toFixed(4);
      break;
    case 'mach':
      mph.value = (value * 761.207).toFixed();
      kph.value = (value * 1225.044).toFixed();
      knots.value = (value * 661.4708).toFixed();
      break;
    default:
      break;
  }
};

//⚡️Events
data.forEach(({ name, values }) => {
  document.querySelectorAll(`[data-${name}]`).forEach(value => {
    switch (name) {
      case 'weight':
        value.addEventListener('input', weightConverter);
        value.addEventListener('change', weightConverter);
        break;
      case 'temperature':
        value.addEventListener('input', temperatureConverter);
        value.addEventListener('change', temperatureConverter);
        break;
      case 'length':
        value.addEventListener('input', lengthConverter);
        value.addEventListener('change', lengthConverter);
        break;
      case 'speed':
        value.addEventListener('input', speedConverter);
        value.addEventListener('change', speedConverter);
        break;
      default:
        break;
    }
  });
});
