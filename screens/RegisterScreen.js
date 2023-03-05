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
import RadioGroup from 'react-native-radio-buttons-group';
import Checkbox from 'expo-checkbox';




const RegisterScreen = () => {
    const navigation = useNavigation();
    const [isChecked, setChecked] = useState(false);
    const [radioButtons, setRadioButtons] = useState([
        {
            id: '1', // acts as primary key, should be unique and non-empty string
            label: 'Experienced',
            value: 'option1'
        },
        {
            id: '2',
            label: 'Fresher',
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
  const [showMessage, setShowMessage] = useState(false);
  const phoneInput = useRef<PhoneInput>(null);
  return (
    
        <ScrollView className="bg-white px-8 pt-16">
            <View className=" flex-row ">
                <Text className="text-3xl text-[#244b65] font-semibold text-">Register</Text>
                <View className=" pb-1 pl-36  ">
                    <TouchableOpacity onPress={()=>{

                    }}>
                    <Text className="underline text-xs text-blue-500">Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{

                }}>
                    <Text className="underline text-xs text-blue-500">For employees</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View className="pt-12">
                <View>
                <Text className="pl-2 font-semibold text-[#244b65]">Full Name</Text>
                <View className="pt-1">
                <TextInput placeholder='Enter full name' 
                className="bg-white text-xl pl-2 border  w-80 h-10 rounded-xl"  />

                </View>
                </View>


                <View className="pt-5">
                <Text className="pl-2 font-bold text-[#244b65]">Email Id</Text>
                <View className="pt-1">
                <TextInput placeholder='Enter email-id' 
                className="bg-white text-xl pl-2 border  w-80 h-10 rounded-xl"  />
                </View>
                </View>


                <View className="pt-5">
                <Text className="pl-2 font-bold text-[#244b65]">Password</Text>
                <View className="pt-1">
                <TextInput placeholder='Enter password' secureTextEntry={true}
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

                <View className="flex-row pb-4 pt-5 items-end">
                <View>
                <Text className="pl-2 pb-2  font-bold text-[#244b65]">Work Status:</Text>
                </View>
                <View >
                <RadioGroup 
                    radioButtons={radioButtons }    layout={"row"}
                    onPress={onPressRadioButton} 
                    />
                    </View>
                
                </View>
                <View className="w-88 border  h-9 flex-row items-center rounded-2xl">
                    <View className="h-9 bg-blue-400 w-32 flex items-center rounded-2xl">
                        <Text className="text-white font-bold pt-2 ">Upload Resume</Text>
                    </View>
                    <View className="flex-row items-center pl-2">
                        <Text className="text-gray-500 ">DOC,DOCx,PDF |</Text>

                        <Text className="text-gray-500 pl-2 ">Max 2GB</Text>
                    </View>

                </View>
                <Text className="text-gray-500 pt-1 text-xs">Recruiters give preference to candidates who have a resume</Text>

                <View className="pt-6 flex-row items-center gap-x-2">
                <Checkbox  value={isChecked} onValueChange={setChecked} />
                <Text >Send me important updates on</Text>
                <Image source={require('../assets/whatsapp.png')} className="h-6 w-6"/>
                </View>
                


                <View className="pt-6 ">
                    <Text className="text-xs pl-1 pb-3 ">By clicking you agree to Terms,Conditions & Privacy Policy</Text>
                    <TouchableOpacity className="w-full h-9 flex items-center rounded-xl border border-blue-600 bg-blue-400">
                        <Text className="pt-1 text-white text-lg font-semibold">Register</Text>

                    </TouchableOpacity>
                </View>
            </View>

            <View className="pt-4 ">
                <View className="flex-row items-center pl-2 w-full gap-x-6 ">
                    <View className="bg-gray-300 h-0.5 w-32"></View>
                    <Text className="text-gray-500">Or</Text>
                    <View className="bg-gray-300 h-0.5 w-32"></View>
                </View>

                <View className="pt-4">
                <TouchableOpacity className="w-full h-11 space-x-5 flex   bg-white rounded-xl border ">
                        <View className="flex-row gap-x-16 pl-3 pt-1 items-center">
                        <View className="">
                        <Image source={require('../assets/google.png')} className="h-6 w-6"/>
                        </View>
                        <View>
                        <Text className="pt-1  text-lg ">sign in with Google</Text>
                        </View>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            </ScrollView>
            
          
       
  );
};


export default RegisterScreen;