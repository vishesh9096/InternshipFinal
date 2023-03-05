import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { ArrowLeftIcon,  BellIcon,  BriefcaseIcon,  ChatBubbleLeftIcon, EllipsisVerticalIcon, HomeIcon, MagnifyingGlassIcon, UserIcon } from 'react-native-heroicons/solid';
import { TextInput } from 'react-native-paper';
import {BookmarkIcon} from 'react-native-heroicons/outline'
import { ScrollView } from 'react-native';

const JobsScreen = () => {

    const navigation = useNavigation();

  useLayoutEffect(()=>
    navigation.setOptions({
        headerShown: false,
    })
    )
  return (
    <View className="h-full">
      <View className="pb-8">
      <View className="pt-16 pb-4 flex-row bg-white items-center pl-5 justify-between  ">
        <TouchableOpacity>
          <ArrowLeftIcon color={"#244b65"} size={30}/>
        </TouchableOpacity >
        <Text className="text-xl pl-4">Jobs</Text>
        <View className="flex-row items-center gap-x-2">
        <TouchableOpacity onPress={()=>{navigation.navigate("Chat")}}>
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

      <View className="flex-row items-center justify-center pb-4 pt-8 gap-x-28">
        <View className="flex-row items-center">
        <BookmarkIcon size={30} color={"#ADD8E6"}/>
        <Text className="text-gray-500">Applied Jobs</Text>
        </View>
        <View className="flex-row items-center">
        <BookmarkIcon size={30} color={"#ADD8E6"}/>
        <Text className="text-gray-500">Discover Jobs</Text>
        </View>
      </View>

      <View className="h-0.5 w-full bg-gray-200"></View>

      <View className="pt-6  pb-2 px-4">
      <Text className="text-xl font-bold text-[#244b65]">Recommended for you</Text>
      </View>

    <ScrollView className="pt-2 mx-5 gap-y-4">

        <TouchableOpacity className="w-full h-40 rounded-2xl  bg-white"
        onPress={()=>{navigation.navigate("JobDetails")}}>
            <View className="flex-row pt-4 items-center">
                <View className="pl-4 ">
                        <Image className="w-16 h-16 rounded-xl" source={{uri:"https://htmlcolorcodes.com/assets/images/colors/light-gray-color-solid-background-1920x1080.png"}}/>
                </View>
                    <View className="pl-4 ">
                        <View className="flex-row items-center">
                        <Text className="text-lg font-semibold  pr-40">Job Role</Text>
                        <BookmarkIcon color={"#244b65"}/> 
                        </View>

                        <Text className="text-gray-500">Company Name</Text>
                        <View className="flex-row items-center gap-x-4">
                        <Text className="text-gray-500 text-xs">Location of Office</Text>
                        <Text className="text-gray-500 text-xs">8 hours ago</Text>
                        </View>
                    </View>
              </View>

              <View className="pt-3 flex-row items-center justify-center gap-x-10">
                <Text className="text-gray-300 text-xs">Your profile matches this job</Text>
                <Text className="text-gray-300 text-xs">Actively Recurting</Text>
              </View>

              <View className="flex-row items-center justify-start pl-5 gap-x-4 pt-3">
                <View className="bg-gray-200 h-7 w-20 rounded-lg">
                    <Text className="text-center pt-1 text-gray-600 font-bold">Part Time</Text>
                </View>
                <View className="bg-gray-200 h-7 w-20 rounded-lg">
                    <Text className="text-center pt-1 text-gray-600 font-bold">Remote</Text>
                </View>
                <View className="bg-gray-200 h-7 w-20 rounded-lg">
                    <Text className="text-center pt-1 text-gray-600 font-bold">Hybrid</Text>
                </View>
              </View>


        </TouchableOpacity>

        <TouchableOpacity className="w-full h-40 rounded-2xl  bg-white">
            <View className="flex-row pt-4 items-center">
                <View className="pl-4 ">
                        <Image className="w-16 h-16 rounded-xl" source={{uri:"https://htmlcolorcodes.com/assets/images/colors/light-gray-color-solid-background-1920x1080.png"}}/>
                </View>
                    <View className="pl-4 ">
                        <View className="flex-row items-center">
                        <Text className="text-lg font-semibold  pr-40">Job Role</Text>
                        <BookmarkIcon color={"#244b65"}/> 
                        </View>

                        <Text className="text-gray-500">Company Name</Text>
                        <View className="flex-row items-center gap-x-4">
                        <Text className="text-gray-500 text-xs">Location of Office</Text>
                        <Text className="text-gray-500 text-xs">8 hours ago</Text>
                        </View>
                    </View>
              </View>

              <View className="pt-3 flex-row items-center justify-center gap-x-10">
                <Text className="text-gray-300 text-xs">Your profile matches this job</Text>
                <Text className="text-gray-300 text-xs">Actively Recurting</Text>
              </View>

              <View className="flex-row items-center justify-start pl-5 gap-x-4 pt-3">
                <View className="bg-gray-200 h-7 w-20 rounded-lg">
                    <Text className="text-center pt-1 text-gray-600 font-bold">Part Time</Text>
                </View>
                <View className="bg-gray-200 h-7 w-20 rounded-lg">
                    <Text className="text-center pt-1 text-gray-600 font-bold">Remote</Text>
                </View>
                <View className="bg-gray-200 h-7 w-20 rounded-lg">
                    <Text className="text-center pt-1 text-gray-600 font-bold">Hybrid</Text>
                </View>
              </View>


        </TouchableOpacity>

        <TouchableOpacity className="w-full h-40 rounded-2xl  bg-white">
            <View className="flex-row pt-4 items-center">
                <View className="pl-4 ">
                        <Image className="w-16 h-16 rounded-xl" source={{uri:"https://htmlcolorcodes.com/assets/images/colors/light-gray-color-solid-background-1920x1080.png"}}/>
                </View>
                    <View className="pl-4 ">
                        <View className="flex-row items-center">
                        <Text className="text-lg font-semibold  pr-40">Job Role</Text>
                        <BookmarkIcon color={"#244b65"}/> 
                        </View>

                        <Text className="text-gray-500">Company Name</Text>
                        <View className="flex-row items-center gap-x-4">
                        <Text className="text-gray-500 text-xs">Location of Office</Text>
                        <Text className="text-gray-500 text-xs">8 hours ago</Text>
                        </View>
                    </View>
              </View>

              <View className="pt-3 flex-row items-center justify-center gap-x-10">
                <Text className="text-gray-300 text-xs">Your profile matches this job</Text>
                <Text className="text-gray-300 text-xs">Actively Recurting</Text>
              </View>

              <View className="flex-row items-center justify-start pl-5 gap-x-4 pt-3">
                <View className="bg-gray-200 h-7 w-20 rounded-lg">
                    <Text className="text-center pt-1 text-gray-600 font-bold">Part Time</Text>
                </View>
                <View className="bg-gray-200 h-7 w-20 rounded-lg">
                    <Text className="text-center pt-1 text-gray-600 font-bold">Remote</Text>
                </View>
                <View className="bg-gray-200 h-7 w-20 rounded-lg">
                    <Text className="text-center pt-1 text-gray-600 font-bold">Hybrid</Text>
                </View>
              </View>


        </TouchableOpacity>

        <TouchableOpacity className="w-full h-40 rounded-2xl  bg-white">
            <View className="flex-row pt-4 items-center">
                <View className="pl-4 ">
                        <Image className="w-16 h-16 rounded-xl" source={{uri:"https://htmlcolorcodes.com/assets/images/colors/light-gray-color-solid-background-1920x1080.png"}}/>
                </View>
                    <View className="pl-4 ">
                        <View className="flex-row items-center">
                        <Text className="text-lg font-semibold  pr-40">Job Role</Text>
                        <BookmarkIcon color={"#244b65"}/> 
                        </View>

                        <Text className="text-gray-500">Company Name</Text>
                        <View className="flex-row items-center gap-x-4">
                        <Text className="text-gray-500 text-xs">Location of Office</Text>
                        <Text className="text-gray-500 text-xs">8 hours ago</Text>
                        </View>
                    </View>
              </View>

              <View className="pt-3 flex-row items-center justify-center gap-x-10">
                <Text className="text-gray-300 text-xs">Your profile matches this job</Text>
                <Text className="text-gray-300 text-xs">Actively Recurting</Text>
              </View>

              <View className="flex-row items-center justify-start pl-5 gap-x-4 pt-3">
                <View className="bg-gray-200 h-7 w-20 rounded-lg">
                    <Text className="text-center pt-1 text-gray-600 font-bold">Part Time</Text>
                </View>
                <View className="bg-gray-200 h-7 w-20 rounded-lg">
                    <Text className="text-center pt-1 text-gray-600 font-bold">Remote</Text>
                </View>
                <View className="bg-gray-200 h-7 w-20 rounded-lg">
                    <Text className="text-center pt-1 text-gray-600 font-bold">Hybrid</Text>
                </View>
              </View>


        </TouchableOpacity>

        <View className="w-full h-40 rounded-2xl  bg-white">
            <View className="flex-row pt-4 items-center">
                <View className="pl-4 ">
                        <Image className="w-16 h-16 rounded-xl" source={{uri:"https://htmlcolorcodes.com/assets/images/colors/light-gray-color-solid-background-1920x1080.png"}}/>
                </View>
                    <View className="pl-4 ">
                        <View className="flex-row items-center">
                        <Text className="text-lg font-semibold  pr-40">Job Role</Text>
                        <BookmarkIcon color={"#244b65"}/> 
                        </View>

                        <Text className="text-gray-500">Company Name</Text>
                        <View className="flex-row items-center gap-x-4">
                        <Text className="text-gray-500 text-xs">Location of Office</Text>
                        <Text className="text-gray-500 text-xs">8 hours ago</Text>
                        </View>
                    </View>
              </View>

              <View className="pt-3 flex-row items-center justify-center gap-x-10">
                <Text className="text-gray-300 text-xs">Your profile matches this job</Text>
                <Text className="text-gray-300 text-xs">Actively Recurting</Text>
              </View>

              <View className="flex-row items-center justify-start pl-5 gap-x-4 pt-3">
                <View className="bg-gray-200 h-7 w-20 rounded-lg">
                    <Text className="text-center pt-1 text-gray-600 font-bold">Part Time</Text>
                </View>
                <View className="bg-gray-200 h-7 w-20 rounded-lg">
                    <Text className="text-center pt-1 text-gray-600 font-bold">Remote</Text>
                </View>
                <View className="bg-gray-200 h-7 w-20 rounded-lg">
                    <Text className="text-center pt-1 text-gray-600 font-bold">Hybrid</Text>
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

export default JobsScreen