/* eslint-disable no-undef */
jest.mock('react-native-device-info', () => {
  return {
    getVersion: () => '2.10.0',
  };
});

jest.mock('react-native-config', () => {
  return {};
});
