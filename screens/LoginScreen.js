import { View, Text, SafeAreaView, TextInput, TouchableOpacity, Image, KeyboardAvoidingView } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { SocialIcon } from 'react-native-elements'
import Svg from 'react-native-svg';



const LoginScreen = () => {
    const navigation = useNavigation();

  useLayoutEffect(()=>
    navigation.setOptions({
        headerShown: false,
        presentation:"fullScreenModal"

    })
    )


  return (


        <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        className="bg-gray-200 flex-1 pt-28  h-full ">
            <View className="mx-8 gap-y-2">
            <View className="pt-8 px-5 flex-row items-end justify-between">
                <Text className="text-3xl font-semibold text-">Login</Text>
                <View className=" pb-1  ">
                    <TouchableOpacity onPress={()=>{
                        navigation.navigate("Register")
                    }}>
                    <Text className="underline">Register here</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View className="pt-16 px-5">
                <View>
                <Text className="pl-2">E-mail Id/username</Text>
                <View className="pt-1">
                <TextInput placeholder='Enter user id or username' 
                className="bg-white text-xl pl-2 border  pt-2 pb-2 rounded-xl"  />

                </View>
                </View>


                <View className="pt-8">
                <Text className="pl-2">Password</Text>
                <View className="pt-1">
                <TextInput placeholder='Enter password' secureTextEntry={true}
                className="bg-white text-xl pl-2 border  py-2 rounded-xl"  />

                </View>
                <TouchableOpacity
                    className="absolute bottom-3 right-4">
                        <Text className="text-blue-500 font-semibold">Show</Text>
                </TouchableOpacity>
                </View>
                <TouchableOpacity>
                        <Text className="text-right pr-2 pt-1">Forget Password</Text>
                </TouchableOpacity>
                <View className="pt-8 ">
                    <TouchableOpacity 
                    onPress={()=>{navigation.navigate("Home")}}
                    className="w-full h-9 flex items-center  border border-blue-600 bg-blue-400">
                        <Text className="pt-1 text-white text-lg font-semibold">Login</Text>

                    </TouchableOpacity>
                    <TouchableOpacity><Text className="pt-2 text-center text-blue-500">Use OTP to login</Text></TouchableOpacity>
                </View>
            </View>

            <View className="pt-12 px-5">
                <View className="flex-row items-center w-full justify-between  ">
                    <View className="bg-gray-300 h-0.5 w-32"></View>
                    <Text className="text-gray-500">Or</Text>
                    <View className="bg-gray-300 h-0.5 w-32"></View>
                </View>

                <View className="pt-12">
                <TouchableOpacity className=" h-11 space-x-5 flex  w-full bg-white rounded-xl border ">
                        <View className="flex-row justify-evenly  pl-3 pt-1 items-center">
                        <View className="">
                        <Image source={require('../assets/google.png')} className="h-6 w-6"/>
                        </View>
                        <View className="">
                        <Text className="pt-1  text-lg    ">sign in with Google</Text>
                        </View>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            </View>
            

        </KeyboardAvoidingView>



    
  )
}

export default LoginScreen