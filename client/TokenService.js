import { AsyncStorage } from 'react-native';

const TokenService = {
  async save(token) {
    await AsyncStorage.setItem('@ChadApp:authToken', token.token);
  },
  read() {
    // console.log(window.localStorage.getItem('authToken'))
    return AsyncStorage.getItem('@ChadApp:authToken');
  },
  async destroy() {
    await AsyncStorage.removeItem('@ChadApp:authToken');
  }
};

export default TokenService;
