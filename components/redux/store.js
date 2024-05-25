import { createStore } from 'redux';
import rootReducer from './reducers'; // Создайте файл reducers.js для объединения всех ваших редюсеров

const store = createStore(rootReducer);

export default store;
