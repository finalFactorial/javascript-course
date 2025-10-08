'use strict';

console.log('=== MAPTY: OOP Foundation ===');

class Workout {
  date = new Date();
  id = (Date.now() + '').slice(-10);
  clicks = 0;

  constructor(coords, distance, duration) {
    this.coords = coords;
    this.distance = distance;
    this.duration = duration;
  }

  _setDescription() {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on 
        ${months[this.date.getMonth()]} ${this.date.getDate()}`;
  }

  click() {
    this.clicks++;
  }
}

const testWorkout = new Workout([40.7128, -74.006], 5.2, 24);
console.log('Test workout: ', testWorkout);

class Running extends Workout {
  type = 'running';

  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);

    this.cadence = cadence;
    this.calcPace();
    this._setDescription();
  }

  calcPace() {
    this.pace = this.duration / this.distance;

    return this.pace;
  }
}

class Cycling extends Workout {
  type = 'cycling';

  constructor(coords, distance, duration, elevationGain) {
    super(coords, distance, duration);

    this.elevationGain = elevationGain;
    this.calcSpeed();
    this._setDescription();
  }

  calcSpeed() {
    this.speed = this.distance / (this.duration / 60);

    return this.speed;
  }
}

// Create a running workout
const run1 = new Running([39.7392, -104.9903], 5.2, 24, 178);
console.log('Running workout:', run1);
console.log('Running pace:', run1.pace.toFixed(1), 'min/km');
console.log('Running description:', run1.description);

// Create a cycling workout
const cycling1 = new Cycling([39.7392, -104.9903], 27, 95, 523);
console.log('Cycling workout:', cycling1);
console.log('Cycling speed:', cycling1.speed.toFixed(1), 'km/h');
console.log('Cycling description:', cycling1.description);

// Test inheritance - both have click method from Workout
run1.click();
cycling1.click();
console.log('Run clicks:', run1.clicks);
console.log('Cycling clicks:', cycling1.clicks);

// if (navigator.geolocation) {
//   navigator.geolocation.getCurrentPosition(
//     function (position) {
//       // Success callback - user granted permission
//       const { latitude } = position.coords;
//       const { longitude } = position.coords;
//       console.log(`User location: ${latitude}, ${longitude}`);
//     },
//     function () {
//       // Error callback - user denied permission or other error
//       alert('Could not get your position');
//     }
//   );
// }

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

class App {
    #map;
    #mapZoomLevel = 13;
    #mapEvent;
    #workouts = [];

    constructor() {
        console.log('App starting');
        
        this._getLocalStorage();
        this._getPosition();
        form.addEventListener('submit', this._newWorkout.bind(this));
        inputType.addEventListener('change', this._toggleElevationField);
        containerWorkouts.addEventListener('click', this._moveToPopup.bind(this));
        document.addEventListener('keydown', this._handleKeyDown.bind(this)); 
    }

    _handleKeyDown(e) {
      if (e.key === 'Escape' && !form.classList.contains('hidden')) {
        this._hideForm();
        console.log('Form closed with Escape Key');
      };
    }

    _moveToPopup(e) {
      const workoutEl = e.target.closest('.workout');

      if (!workoutEl) return;

      const workout = this.#workouts.find(
        work => work.id === workoutEl.dataset.id
      );

      this.#map.setView(workout.coords, this.#mapZoomLevel, {
        animate: true,
        pan: {
          duration: 1,
        },
      });

      console.log(`Navigated to ${workout.type} workout at`, workout.coords);
    }

    _getPosition() {
        if (navigator.geolocation) {
            console.log('🔍 Requesting user location...');
            navigator.geolocation.getCurrentPosition(
                this._loadMap.bind(this),
                this._handleLocationError.bind(this),
                {
                    timeout: 10000,
                    enableHighAccuracy: true,
                    maximumAge: 600000,
                }
            );
        } else {
            alert('❌ Geolocation is not supported by this browser');
            this._loadDefaultMap();
        }
    }

    _handleLocationError(error) {
        console.error('Geolocation error:', error);

        let message = 'Could not get your position. ';

        switch (error.code) {
        case error.PERMISSION_DENIED:
            message +=
            'Location access was denied. Please enable location services and refresh the page.';
            break;
        case error.POSITION_UNAVAILABLE:
            message += 'Location information is unavailable.';
            break;
        case error.TIMEOUT:
            message += 'Location request timed out.';
            break;
        default:
            message += 'An unknown error occurred.';
            break;
        }

        alert(`📍 ${message}`);
        this._loadDefaultMap();
    }

    _loadMap(position) {
        const { latitude, longitude } = position.coords;
        console.log('Loading map at coordinates: ', latitude, longitude);

        const coords = [latitude, longitude];

        this.#map = L.map('map').setView(coords, this.#mapZoomLevel);

        L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
            attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(this.#map);

        L.marker(coords).addTo(this.#map).bindPopup('You are here!').openPopup();

        // this.#map.on('click', function (mapEvent) {
        this.#map.on('click', (mapEvent) => {
            console.log('Map clicked!', mapEvent);

            const { lat, lng } = mapEvent.latlng;

            console.log(`Map clicked at: ${lat.toFixed(4)}, ${lng.toFixed(4)}`);

            L.marker([lat, lng])
            .addTo(this.#map)
            .bindPopup(
                `Workout location<br>Lat: ${lat.toFixed(4)}, ${lng.toFixed(4)}`
            )
            .openPopup();
        });

        this.#map.on('click', this._showForm.bind(this));

        this._renderStoredWorkouts();

        console.log('Map loaded succesfully at user location');
    }

    _loadDefaultMap() {
        console.log('Loading default map location around Manila');

        const defaultCoords = [14.604, 120.994];

        this.#map = L.map('map').setView(defaultCoords, 13);

        L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
            attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(this.#map);

        L.marker([lat, lng])
            .addTo(this.#map)
            .bindPopup(`Workout location<br>Lat: ${lat.toFixed(4)}, ${lng.toFixed(4)}`)
            .openPopup();

        console.log('Default map loaded succesfully');
    }

    _renderStoredWorkouts() {
      this.#workouts.forEach(workout => {
        this._renderWorkoutMarker(workout);
        this._renderWorkout(workout);
      })

      if (this.#workouts.length > 0) {
        console.log(`Rendered ${this.#workouts.length} stored workouts`);
      }
    }

    _showForm(mapE) {
      this.#mapEvent = mapE;
      form.classList.remove('hidden');
      inputDistance.focus();
    }

    _toggleElevationField() {
      inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
      inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
    }

    _hideForm() {
      inputDistance.value =
      inputDuration.value =
      inputCadence.value =
      inputElevation.value = '';

      form.style.display = 'none';
      form.classList.add('hidden');
      setTimeout(() => (form.style.display = 'grid'), 1000);
    }

    _newWorkout(e) {
      const validInputs = (...inputs) => inputs.every(inp => Number.isFinite(inp));

      const allPositive = (...inputs) => inputs.every(inp => inp > 0);

      e.preventDefault();

      const type = inputType.value;
      const distance = +inputDistance.value;
      const duration = +inputDuration.value;
      const {lat, lng} = this.#mapEvent.latlng;
      let workout;

      console.log(`Creating ${type} workout:`, { distance, duration, lat, lng });

      if (type === 'running') {
        const cadence =+ inputCadence.value;

        if (
          !validInputs(distance, duration, cadence) || 
          !allPositive(distance, duration, cadence)
        ) 
          return alert('Inputs have to be positive numbers!!');

        workout = new Running([lat, lng], distance, duration, cadence);
      }

      if (type === 'cycling') {
        const elevation =+ inputElevation.value;

        if (
          !validInputs(distance, duration, elevation) || 
          !allPositive(distance, duration)
        ) 
          return alert('Inputs have to be positive numbers!!');

        workout = new Cycling([lat, lng], distance, duration, elevation);
      }

      console.log('Workout object created: ', workout);

      this.#workouts.push(workout);

      console.log("Total workouts: ", this.#workouts.length);
      console.log("All workouts: ", this.#workouts);

      this._renderWorkoutMarker(workout);

      this._renderWorkout(workout);

      this._setLocalStorage();

      this._hideForm();
      
      console.log("Workout creation complete!");
    }

    _renderWorkout(workout) {
      let html = `
        <li class="workout workout--${workout.type}" data-id="${workout.id}">
          <h2 class="workout__title">${workout.description}</h2>
          <div class="workout__details">
            <span class="workout__icon">
              ${workout.type === 'running' ? '🏃‍♀️' : '🚴'}
            </span>
            <span class="workout__value">${workout.distance}</span>
            <span class="workout__unit">km</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">⏱️</span>
            <span class="workout__value">${workout.duration}</span>
            <span class="workout__unit">min</span>
          </div>
      `;

      if (workout.type === 'running') 
        html += `
            <div class="workout__details">
              <span class="workout__icon">⚡</span>
              <span class="workout__value">${workout.pace.toFixed(1)}</span>
              <span class="workout__unit">min/km</span>
            </div>
            <div class="workout__details">
              <span class="workout__icon">🦶</span>
              <span class="workout__value">${workout.cadence}</span>
              <span class="workout__unit">spm</span>
            </div>
          </li>
        `;

      if (workout.type === 'cycling') 
        html += `
            <div class="workout__details">
              <span class="workout__icon">⚡</span>
              <span class="workout__value">${workout.speed.toFixed(1)}</span>
              <span class="workout__unit">km/h</span>
            </div>
            <div class="workout__details">
              <span class="workout__icon">⛰️</span>
              <span class="workout__value">${workout.elevationGain}</span>
              <span class="workout__unit">m</span>
            </div>
          </li>
        `;

      form.insertAdjacentHTML('afterend', html)
    }

    _renderWorkoutMarker(workout) {
      L.marker(workout.coords)
        .addTo(this.#map)
        .bindPopup(
          L.popup({
            maxWidth: 250,
            minWidth: 100,
            autoClose: false,
            closeOnClick: false,
            className: `${workout.type}-popup`,
          })
        )
        .setPopupContent(`${workout.type === 'running' ? '🏃‍♀️' : '🚴'} ${workout.description}`)
        .openPopup();
    }

    _setLocalStorage() {
      localStorage.setItem('workouts', JSON.stringify(this.#workouts));
      console.log('Workouts saved to the local storage');      
    }

    _getLocalStorage() {
      const data = localStorage.getItem('workouts');

      if (!data) return;

      const storedWorkouts = JSON.parse(data);

      console.log('Retrieve workouts from local storage', storedWorkouts);

      this.#workouts = storedWorkouts.map(workoutData => {
        let workout;

        if (workoutData.type === 'running')  {
          workout = new Running(
            workoutData.coords, 
            workoutData.distance,
            workoutData.duration,
            workoutData.cadence
          )
        }

        if (workoutData.type === 'cycling')  {
          workout = new Cycling(
            workoutData.coords, 
            workoutData.distance,
            workoutData.duration,
            workoutData.elevationGain
          )
        }        

        workout.data = new Date(workoutData.date);
        workout.id = workoutData.id;
        workout.clicks = workoutData.click;

        return workout;
      });

      console.log('Workouts restored as proper objects', this.#workouts);
    }
}

const app = new App();