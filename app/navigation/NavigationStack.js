import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';
import { navigationRef } from './NavigationService';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AppIntro from 'app/screens/AppIntro';
import Login from 'app/screens/Login';
import OTP from 'app/screens/OTP';
import Boarding from 'app/screens/Boarding';
import JobList from 'app/screens/JobList';
import MyJobs from 'app/screens/MyJobs';
import JobDetail from 'app/screens/JobDetail';
import FinalScreen from 'app/screens/FinalScreen';
import SplashScreen from 'react-native-splash-screen';
import images from '../config/images';
import { Image, Text, Alert } from 'react-native';
import Notifications from '../screens/Notifications';
import { TransitionPresets } from '@react-navigation/stack';
import messaging from '@react-native-firebase/messaging';
import PushNotificationIOS from '@react-native-community/push-notification-ios';
var PushNotification = require('react-native-push-notification');

const AppIntroStack = createStackNavigator();
const LoginStack = createStackNavigator();
const BoardingStack = createStackNavigator();
const JobTabNavigator = createBottomTabNavigator();
const JobStack = createStackNavigator();
const MyJobStack = createStackNavigator();

const homeOptions = {
  title: 'My home',
  headerStyle: {
    backgroundColor: '#f4511e',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};

const LoginStackScreen = () => (
  <LoginStack.Navigator>
    <LoginStack.Screen
      name="Login"
      component={Login}
      options={{
        headerShown: false,
      }}
    />
    <LoginStack.Screen
      name="OTP"
      component={OTP}
      options={{
        headerShown: false,
      }}
    />
  </LoginStack.Navigator>
);

function getTabBarVisible(route) {
  const routeName = route.state
    ? route.state.routes[route.state.index].name
    : route.params?.screen || 'JobList' || 'MyJobs' || 'Notifications';

  if (
    routeName === 'JobList' ||
    routeName === 'MyJobs' ||
    routeName === 'Notifications'
  ) {
    return true;
  }
  return false;
}

const JobStackScreen = () => (
  <JobStack.Navigator>
    <JobStack.Screen
      name="JobList"
      component={JobList}
      options={{
        headerShown: false,
        ...TransitionPresets.SlideFromRightIOS,
      }}
    />
    <JobStack.Screen
      name="JobDetail"
      component={JobDetail}
      options={{
        headerShown: false,
        ...TransitionPresets.SlideFromRightIOS,
      }}
    />
  </JobStack.Navigator>
);

const MyJobStackScreen = () => (
  <MyJobStack.Navigator>
    <MyJobStack.Screen
      name="MyJobs"
      component={MyJobs}
      options={{
        headerShown: false,
        ...TransitionPresets.SlideFromRightIOS,
      }}
    />
    <JobStack.Screen
      name="JobDetail"
      component={JobDetail}
      options={{
        headerShown: false,
        ...TransitionPresets.SlideFromRightIOS,
      }}
    />
    <MyJobStack.Screen
      name="FinalScreen"
      component={FinalScreen}
      options={{
        headerShown: false,
        ...TransitionPresets.SlideFromRightIOS,
      }}
    />
  </MyJobStack.Navigator>
);

const JobTabNavigatorScreen = () => (
  <JobTabNavigator.Navigator
    screenOptions={({ route }) => ({
      tabBarLabel: ({ focused }) => {
        var text;
        var style = {
          fontFamily: focused ? 'Lato-Black' : 'Lato-Regular',
          fontSize: 13,
          marginBottom: 5,
        };
        switch (route.name) {
          case 'All Jobs':
            text = 'Explore Jobs';
            break;
          case 'My Jobs':
            text = 'My Jobs';
            break;
          default:
            text = 'Notifications';
            break;
        }

        return <Text style={style}>{text}</Text>;
      },
      tabBarIcon: ({ focused, color, size }) => {
        var iconName;
        switch (route.name) {
          case 'All Jobs':
            iconName = images.allJobs.allJobs;
            break;
          case 'My Jobs':
            iconName = images.allJobs.myJobs;
            break;
          default:
            iconName = images.allJobs.notification;
            break;
        }
        return (
          <Image
            source={iconName}
            resizeMode={'contain'}
            style={{ tintColor: focused ? '#ffc400' : '#0f0a40' }}
          />
        );
      },
    })}
    tabBarOptions={{
      style: {
        backgroundColor: '#FFFFFF',
      },
      activeTintColor: '#0f0a40',
      inactiveTintColor: '#0f0a40',
      showLabel: true,
    }}>
    <JobTabNavigator.Screen
      name="All Jobs"
      component={JobStackScreen}
      options={({ route }) => ({
        tabBarVisible: getTabBarVisible(route),
      })}
    />
    <JobTabNavigator.Screen
      name="My Jobs"
      component={MyJobStackScreen}
      options={({ route }) => ({
        tabBarVisible: getTabBarVisible(route),
      })}
    />
    <JobTabNavigator.Screen
      name="Notifications"
      component={Notifications}
      options={({ route }) => ({
        tabBarVisible: getTabBarVisible(route),
      })}
    />
  </JobTabNavigator.Navigator>
);

const RootStack = createStackNavigator();
const RootStackScreen = ({ isAppIntro, otpVerified, profileVerified }) => {
  return (
    <RootStack.Navigator headerMode="none">
      {!isAppIntro ? (
        <RootStack.Screen
          name="AppIntro"
          component={AppIntro}
          options={{
            animationEnabled: false,
          }}
        />
      ) : !otpVerified ? (
        <RootStack.Screen
          name="Auth"
          component={LoginStackScreen}
          options={{
            animationEnabled: false,
          }}
        />
      ) : !profileVerified ? (
        <BoardingStack.Screen
          name="Boarding"
          component={Boarding}
          options={{
            headerShown: false,
          }}
        />
      ) : (
        <RootStack.Screen
          name="JobTab"
          component={JobTabNavigatorScreen}
          options={{
            animationEnabled: false,
          }}
        />
      )}
    </RootStack.Navigator>
  );
};

export default function App() {
  const isAppIntro = useSelector(state => state.appIntroReducer.isAppIntro);
  const otpVerified = useSelector(state => state.loginReducer.otpVerified);
  const profileVerified = useSelector(
    state => state.createProfileReducer.profileCreated,
  );
  React.useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
    // Assume a message-notification contains a "type" property in the data payload of the screen to open
    PushNotification.configure({
      // (optional) Called when Token is generated (iOS and Android)
      onRegister: function(token) {
        console.log('TOKEN:', token);
      },

      // (required) Called when a remote is received or opened, or local notification is opened
      onNotification: function(notification) {
        console.warn('NOTIFICATION:', notification);
        // if (notification.foreground) {
        //   Alert.alert(
        //     notification.data.jobTitle,
        //     notification.data.body,
        //     [
        //       {
        //         text: 'Cancel',
        //         onPress: () => console.log('Cancel Pressed'),
        //         style: 'cancel',
        //       },
        //       { text: 'OK', onPress: () => console.log('OK Pressed') },
        //     ],
        //     { cancelable: false },
        //   );
        // }

        // process the notification

        // (required) Called when a remote is received or opened, or local notification is opened
        notification.finish(PushNotificationIOS.FetchResult.NoData);
      },

      // IOS ONLY (optional): default: all - Permissions to register.
      permissions: {
        alert: true,
        badge: true,
        sound: true,
      },

      // Should the initial notification be popped automatically
      // default: true
      popInitialNotification: true,

      /**
       * (optional) default: true
       * - Specified if permissions (ios) and token (android and ios) will requested or not,
       * - if not, you must call PushNotificationsHandler.requestPermissions() later
       * - if you are not using remote notification or do not have Firebase installed, use this:
       *     requestPermissions: Platform.OS === 'ios'
       */
      requestPermissions: true,
    });
    messaging().onNotificationOpenedApp(async remoteMessage => {
      console.log('REMOTEMESSAGEEEEEE', remoteMessage);
      // navigation.navigate(remoteMessage.data.type);
    });

    messaging().onMessage(async message => {
      console.log('MESSAGEEEEEEEEEE', message);
    });

    // Check whether an initial notification is available
    messaging()
      .getInitialNotification()
      .then(async remoteMessage => {
        if (remoteMessage) {
          console.log('REMOTEEEEEEEEEEEEE', remoteMessage);
        }
      });
  }, []);

  return (
    <NavigationContainer ref={navigationRef}>
      <RootStackScreen
        isAppIntro={isAppIntro}
        otpVerified={otpVerified}
        profileVerified={profileVerified}
      />
    </NavigationContainer>
  );
}