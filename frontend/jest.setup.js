jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock')
);

jest.mock('react-native-gesture-handler', () => {
  const React = require('react');
  const { View } = require('react-native');
  return {
    Swipeable: (props) => React.createElement(View, props, props.children),
    DrawerLayout: (props) => React.createElement(View, props, props.children),
    State: {},
    ScrollView: (props) => React.createElement(View, props, props.children),
    Slider: (props) => React.createElement(View, props, props.children),
    Switch: (props) => React.createElement(View, props, props.children),
    TextInput: (props) => React.createElement(View, props, props.children),
    ToolbarAndroid: (props) => React.createElement(View, props, props.children),
    ViewPagerAndroid: (props) => React.createElement(View, props, props.children),
    DrawerLayoutAndroid: (props) => React.createElement(View, props, props.children),
    WebView: (props) => React.createElement(View, props, props.children),
    NativeViewGestureHandler: (props) => React.createElement(View, props, props.children),
    TapGestureHandler: (props) => React.createElement(View, props, props.children),
    FlingGestureHandler: (props) => React.createElement(View, props, props.children),
    ForceTouchGestureHandler: (props) => React.createElement(View, props, props.children),
    LongPressGestureHandler: (props) => React.createElement(View, props, props.children),
    PanGestureHandler: (props) => React.createElement(View, props, props.children),
    PinchGestureHandler: (props) => React.createElement(View, props, props.children),
    RotationGestureHandler: (props) => React.createElement(View, props, props.children),
    Directions: {},
  };
});

// Mock react-native-reanimated
jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock');
  Reanimated.useSharedValue = jest.fn;
  Reanimated.useAnimatedStyle = jest.fn;
  Reanimated.withTiming = jest.fn;
  Reanimated.withSpring = jest.fn;
  return Reanimated;
});
