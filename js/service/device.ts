import DeviceInfo from 'react-native-device-info';

const Device = {
  getVersion: () => {
    return DeviceInfo.getVersion();
  },

  getBuildNumber: () => {
    return DeviceInfo.getBuildNumber();
  },

  isLocationEnabled: () => {
    return DeviceInfo.isLocationEnabled();
  },

  isSimulator: () => {
    return DeviceInfo.isEmulator();
  },
  hasNotch: () => {
    return DeviceInfo.hasNotch();
  },
};
export default Device;
