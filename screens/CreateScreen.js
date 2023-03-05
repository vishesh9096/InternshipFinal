import { useNavigation } from '@react-navigation/native';
import { ScrollView, TouchableOpacity} from 'react-native';
import React, { useLayoutEffect, useState, useRef  } from 'react';
import {
  View,
  KeyboardAvoidingView,
  TextInput,
  StyleSheet,
  Text,
  Platform,
  TouchableWithoutFeedback,
  Button,
  Keyboard,
  Image,
} from 'react-native';
import PhoneInput from "react-native-phone-number-input";
import RadioButtonGroup, { RadioButtonItem } from "expo-radio-button";





const CreateScreen = () => {
    const [current, setCurrent] = useState("test");
    state = {
        checked: 'first',
      };
    const navigation = useNavigation();
    const { checked } = this.state;
    

    const [radioButtons, setRadioButtons] = useState([
        {
            id: '1', // acts as primary key, should be unique and non-empty string
            label: 'on behalf of your company/business',
            value: 'option1'
        },
        {
            id: '2',
            label: 'as an individual/proprietor',
            value: 'option2'
        }
    ]);

    function onPressRadioButton(radioButtonsArray) {
        setRadioButtons(radioButtonsArray);
    }
    

  useLayoutEffect(()=>
    navigation.setOptions({
        headerShown: false,
    })
    )

    const [value, setValue] = useState("");
  const [valid, setValid] = useState(false);
  const phoneInput = useRef<PhoneInput>(null);
  return (
    
        <ScrollView className="bg-white px-8 pt-40">
            <View className=" flex-row ">
                <Text className="text-3xl text-[#244b65] font-semibold text-">Create Account</Text>
                <View className=" pb-1 pl-20  ">
                    <TouchableOpacity onPress={()=>{

                    }}>
                    <Text className="underline text-xs text-blue-500">Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{

                }}>
                    <Text className="underline text-xs text-blue-500">For jobseekers</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <Text className="pt-8">You want to register</Text>
            <View className="pt-2">
            <RadioButtonGroup
                containerStyle={{ marginBottom: 30 , justifyContent:'space-between' }}
                selected={current}
                onSelected={(value) => setCurrent(value)}
                radioBackground="blue"
                size={15}

            >

        <RadioButtonItem value="test2" label="as an individual/proprietor"  />

        <RadioButtonItem
          value="test"
          label={
            <Text className="" >on behalf of your company/business</Text>
          }
        />
      </RadioButtonGroup>
            </View>
            
            <View className="pt-4 pl-5">
                <View>
                <Text className="pl-2 font-semibold text-[#244b65]">Your Name</Text>
                <View className="pt-1">
                <TextInput placeholder='Enter full name' 
                className="bg-white text-xl pl-2 border  w-80 h-10 rounded-xl"  />

                </View>
                </View>


                <View className="pt-5">
                <Text className="pl-2 font-bold text-[#244b65]">Official email</Text>
                <View className="pt-1">
                <TextInput placeholder='Enter email-id' 
                className="bg-white text-xl pl-2 border  w-80 h-10 rounded-xl"  />
                </View>
                </View>


                


                <View className="pt-5">
                <Text className="pl-2 pb-1 font-bold text-[#244b65]">Phone no</Text>
                <View className="  ">
                <PhoneInput
                defaultValue={value} defaultCode="IN" onChangeFormattedText={(text) => {setValue(text); }}
                layout="first" autoFocus containerStyle={{ backgroundColor: 'white',borderWidth:0.5,borderColor:"gray",borderRadius:2,height:40,width:320 }} inputStyle={{borderWidth:0.5, backgroundColor: 'white' }} textContainerStyle={{borderWidth:0.1,backgroundColor:"white" ,paddingBottom:0,paddingTop:0 }}
                />
                </View>
                </View>

                
                
                
                


                <View className="pt-6 ">

                    <TouchableOpacity className="w-full h-9 flex items-center rounded-xl border border-blue-600 bg-blue-400">
                        <Text className="pt-1 text-white text-lg font-semibold">Continue</Text>

                    </TouchableOpacity>
                </View>
            </View>

            
            </ScrollView>
            
          
       
  );
};


export default CreateScreen;