import {
  NativeModules,
  NativeEventEmitter,
  NativeAppEventEmitter,
} from 'react-native';

const { StarNative } = NativeModules;
const StarNativeEmitter = new NativeAppEventEmitter(StarNative);

export default {
  exampleMethod() {
    return StarNative.exampleMethod();
  },
  emitter: StarNativeEmitter,
  EXAMPLE_CONSTANT: StarNative.EXAMPLE_CONSTANT,
};
