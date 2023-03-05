import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import KeyboardAvoidingComponent from './screens/KeyboardAvoidingComponent';
import RegisterScreen from './screens/RegisterScreen';
import CreateScreen from './screens/CreateScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import JobsScreen from './screens/JobsScreen';
import NotifyScreen from './screens/NotifyScreen';
import InterviewScreen from './screens/InterviewScreen';
import ChatScreen from './screens/ChatScreen';
import BrowseJobsScreen from './screens/BrowseJobsScreen';
import SearchScreen from './screens/SearchScreen';
import JobDetailsScreen from './screens/JobDetailsScreen';

const Stack = createNativeStackNavigator();



export default function App() {
  return (
    <NavigationContainer>
    <TailwindProvider>
    <Stack.Navigator>
    <Stack.Screen name="Login" component={LoginScreen}/>
    <Stack.Screen name="JobDetails" component={JobDetailsScreen}/>
    <Stack.Screen name="Search" component={SearchScreen}/>
    <Stack.Screen name="BrowseJobs" component={BrowseJobsScreen}/>
    <Stack.Screen name="Home" component={HomeScreen}/>
    <Stack.Screen name="Jobs" component={JobsScreen}/>
    <Stack.Screen name="Notify" component={NotifyScreen}/>
    <Stack.Screen name="Interview" component={InterviewScreen}/>
    <Stack.Screen name="Create" component={CreateScreen}/>
    <Stack.Screen name="Register" component={RegisterScreen}/>
    
    <Stack.Screen name="Chat" component={ChatScreen}/>

    
    
    
    
    
    

        
      </Stack.Navigator>

    </TailwindProvider>
    </NavigationContainer>
  );
}


