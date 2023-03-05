import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { ArrowLeftIcon,  BellIcon,  BriefcaseIcon,  ChatBubbleLeftIcon, EllipsisVerticalIcon, HomeIcon, MagnifyingGlassIcon, UserIcon } from 'react-native-heroicons/solid';
import { TextInput } from 'react-native-paper';
import {BookmarkIcon} from 'react-native-heroicons/outline'
import { ScrollView } from 'react-native';

const InterviewScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(()=>
    navigation.setOptions({
        headerShown: false,
    })
    )
  return (
    <View className="h-full">
      <ScrollView>
      <View className="pb-8">
      <View className="pt-16 pb-4 flex-row bg-white items-center pl-5 justify-between  ">
        <TouchableOpacity>
          <ArrowLeftIcon color={"#244b65"} size={30}/>
        </TouchableOpacity >
        <Text className="text-xl pl-4">Interviews</Text>
        <View className="flex-row items-center gap-x-2">
        <TouchableOpacity  onPress={()=>{navigation.navigate("Chat")}}>
        <ChatBubbleLeftIcon color={"#D3D3D3"} size={30}/>
        </TouchableOpacity>
        <TouchableOpacity>
          <EllipsisVerticalIcon  size={30} color={"#244b65"}/>
        </TouchableOpacity>
        </View>
      </View>
      </View>

      
      <View className="mx-4">
        <TextInput placeholder='Search Jobs' 
        className="bg-white text-xl pl-12 pb-1 text-gray-200   w-full h-12 rounded-xl"  />
        <View className="absolute top-2 left-2">
          <MagnifyingGlassIcon size={30} color={"#D3D3D3"}/>
        </View>
      </View>

      <Text className="text-center pt-4 text-gray-500">3 interviews to go</Text>

      <ScrollView horizontal={true} className="px-4  gap-x-5 pt-4">
        <TouchableOpacity className="bg-white h-48 rounded-2xl shadow-md flex items-center shadow-black w-40">
            <View className="pt-4">
              <Image 
              className="h-20 rounded-xl w-20"
              source={{uri:"https://htmlcolorcodes.com/assets/images/colors/light-gray-color-solid-background-1920x1080.png"}}/>
            </View>
            <View className="gap-y-0.5">
              <Text className="text-[#0A2647] pt-0.5  text-center text-xl">Job Role</Text>
              <Text className="text-[#0A2647] text-center  ">Company Name</Text>
              <Text className="text-gray-500 text-center ">Location of Office</Text>
              <Text className="text-gray-400 text-center text-xs">Interview </Text>

            </View>
        </TouchableOpacity>

        <TouchableOpacity className="bg-white h-48 rounded-2xl shadow-md flex items-center shadow-black w-40">
            <View className="pt-4">
              <Image 
              className="h-20 rounded-xl w-20"
              source={{uri:"https://htmlcolorcodes.com/assets/images/colors/light-gray-color-solid-background-1920x1080.png"}}/>
            </View>
            <View className="gap-y-0.5">
              <Text className="text-[#0A2647] pt-0.5  text-center text-xl">Job Role</Text>
              <Text className="text-[#0A2647] text-center  ">Company Name</Text>
              <Text className="text-gray-500 text-center ">Location of Office</Text>
              <Text className="text-gray-400 text-center text-xs">Interview </Text>

            </View>
        </TouchableOpacity>

        <TouchableOpacity className="bg-white h-48 rounded-2xl shadow-md flex items-center shadow-black w-40">
            <View className="pt-4">
              <Image 
              className="h-20 rounded-xl w-20"
              source={{uri:"https://htmlcolorcodes.com/assets/images/colors/light-gray-color-solid-background-1920x1080.png"}}/>
            </View>
            <View className="gap-y-0.5">
              <Text className="text-[#0A2647] pt-0.5  text-center text-xl">Job Role</Text>
              <Text className="text-[#0A2647] text-center  ">Company Name</Text>
              <Text className="text-gray-500 text-center ">Location of Office</Text>
              <Text className="text-gray-400 text-center text-xs">Interview </Text>

            </View>
        </TouchableOpacity>

      </ScrollView>

      <View className="w-full h-0.5 bg-gray-200"></View>

      <View className="px-2 pt-2 ">
        <Text className="pt-3 pl-3 text-xl text-[#0A2647] font-semibold">Enhance your interviewing skills</Text>
        <View className="px-1 pt-4">

          <View className=" bg-white flex-row justify-between items-center h-12 rounded-2xl">
            <View className="flex-row items-center gap-x-1">
              <View className="pl-2">
              <Image 
              className="h-7 w-7 rounded-lg"
              source={{uri:"https://htmlcolorcodes.com/assets/images/colors/light-gray-color-solid-background-1920x1080.png"}}
              /></View>
              <Text className=" text-[#0A2647] ">Role name •</Text>
              <Text className="text-xs pt-0.5 text-gray-500 ">23.3k interviews - </Text>
            </View>
            <View>
              <Text className="text-gray-500 pt-0.5 pr-4">Questions by Role</Text>
            </View>
          </View>

        </View>
        <View className="px-1 pt-4">

          <View className=" bg-white flex-row justify-between items-center h-12 rounded-2xl">
            <View className="flex-row items-center gap-x-1">
              <View className="pl-2">
              <Image 
              className="h-7 w-7 rounded-lg"
              source={{uri:"https://htmlcolorcodes.com/assets/images/colors/light-gray-color-solid-background-1920x1080.png"}}
              /></View>
              <Text className=" text-[#0A2647] ">Role name •</Text>
              <Text className="text-xs pt-0.5 text-gray-500 ">23.3k interviews - </Text>
            </View>
            <View>
              <Text className="text-gray-500 pt-0.5 pr-4">Questions by Role</Text>
            </View>
          </View>

        </View>
        <View className="px-1 pt-4">

          <View className=" bg-white flex-row justify-between items-center h-12 rounded-2xl">
            <View className="flex-row items-center gap-x-1">
              <View className="pl-2">
              <Image 
              className="h-7 w-7 rounded-lg"
              source={{uri:"https://htmlcolorcodes.com/assets/images/colors/light-gray-color-solid-background-1920x1080.png"}}
              /></View>
              <Text className=" text-[#0A2647] ">Role name •</Text>
              <Text className="text-xs pt-0.5 text-gray-500 ">23.3k interviews - </Text>
            </View>
            <View>
              <Text className="text-gray-500 pt-0.5 pr-4">Questions by Role</Text>
            </View>
          </View>

        </View>
        <View className="px-1 pt-4">

          <View className=" bg-white flex-row justify-between items-center h-12 rounded-2xl">
            <View className="flex-row items-center gap-x-1">
              <View className="pl-2">
              <Image 
              className="h-7 w-7 rounded-lg"
              source={{uri:"https://htmlcolorcodes.com/assets/images/colors/light-gray-color-solid-background-1920x1080.png"}}
              /></View>
              <Text className=" text-[#0A2647] ">Role name •</Text>
              <Text className="text-xs pt-0.5 text-gray-500 ">23.3k interviews - </Text>
            </View>
            <View>
              <Text className="text-gray-500 pt-0.5 pr-4">Questions by Role</Text>
            </View>
          </View>

        </View>

        





      
 </View>

 <View className="h-32"></View>
 </ScrollView>


 <View className="absolute bottom-0    space-x-16 justify-center  bg-white w-full pt-3    flex-row  h-20">
    
    <TouchableOpacity className="flex items-center"
    onPress={()=>{navigation.navigate("Home")}}
    >
      <HomeIcon size={36} color={"#0A2647"}/>

    </TouchableOpacity>
    <TouchableOpacity className="flex items-center" onPress={()=>{navigation.navigate("Jobs")}}>
      <BriefcaseIcon size={36} color={"#0A2647"}/>

    </TouchableOpacity>
    <TouchableOpacity className="flex items-center" onPress={()=>{navigation.navigate("Notify")}}>
      <BellIcon size={36} color={"#0A2647"}/>

    </TouchableOpacity>
    <TouchableOpacity onPress={()=>{
      navigation.navigate("Interview");
    }} className="flex items-center">
      <UserIcon size={36} color={"#0A2647"}/>

    </TouchableOpacity>
    
</View>
      



    </View>
  )
}

export default InterviewScreen