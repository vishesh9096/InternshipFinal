import { View, Text } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../HomeScreen';
import { BellIcon, BriefcaseIcon, HomeIcon, UserIcon } from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';
import JobsScreen from '../JobsScreen';
import NotifyScreen from '../NotifyScreen';
import InterviewScreen from '../InterviewScreen';



const Tab = createBottomTabNavigator()
const BottomTabScreen = () => {
    const navigation = useNavigation();

    useLayoutEffect(()=>
    navigation.setOptions({
        headerShown: false,
    })
    
    )
  return (
    <Tab.Navigator initialRouteName='HomeTab' screenOptions={{headerShown : false , tabBarStyle:{paddingTop:8 ,height:70 ,paddingBottom:20}  }}  >
       
       <Tab.Screen name="Home" component={HomeScreen}
        options={{ title:"Home", tabBarActiveTintColor:"#244b65",tabBarLabelStyle:{fontSize:10},
        tabBarIcon:({size,color})=>(
          <HomeIcon size={28} color={color}/>
        )
      }}
      />


<Tab.Screen name="Jobs" component={JobsScreen}
        options={{ title:"Jobs", tabBarActiveTintColor:"#244b65",tabBarLabelStyle:{fontSize:10},
        tabBarIcon:({size,color})=>(
          <BriefcaseIcon size={28} color={color}/>
        )
      }}
      />

<Tab.Screen name="Notify" component={NotifyScreen}
        options={{ title:"Notifications", tabBarActiveTintColor:"#244b65",tabBarLabelStyle:{fontSize:10},
        tabBarIcon:({size,color})=>(
          <BellIcon size={28} color={color}/>
        )
      }}
      />

<Tab.Screen name="Interviews" component={InterviewScreen}
        options={{ title:"Interviews", tabBarActiveTintColor:"#244b65",tabBarLabelStyle:{fontSize:10},
        tabBarIcon:({size,color})=>(
          <UserIcon size={28} color={color}/>
        )
      }}
      />







      

    </Tab.Navigator>
  )
}

export default BottomTabScreen