import { View, Text, TouchableOpacity, TextInput, Image, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeftIcon, ArrowPathIcon, BellIcon, BookmarkIcon, BriefcaseIcon, ChatBubbleLeftIcon, EllipsisVerticalIcon, HomeIcon, MagnifyingGlassIcon, MapPinIcon, UserIcon } from 'react-native-heroicons/solid';

const BrowseJobsScreen = () => {
    const navigation = useNavigation();

  useLayoutEffect(()=>
    navigation.setOptions({
        headerShown: false,
    })
    )
  return (
    <View className="h-full">
        <View className="pb-4">
        <View className="pt-16 pb-4 flex-row bg-white items-center pl-5 justify-between  ">
        <TouchableOpacity>
          <ArrowLeftIcon color={"#244b65"} size={30}/>
        </TouchableOpacity >
        <Text className="text-xl pl-4 ">Browse Jobs</Text>
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

      <View className="px-4">
      <TextInput 
            
            
             className="text-2xl pl-12  bg-white shadow-xl shadow-black rounded-lg w-full h-12 "  />
      <View className="absolute left-6 top-2">
      <MagnifyingGlassIcon color={"#D3D3D3"} size={30}/>
      </View>

        <View className="pt-4 flex-row items-center space-x-1">
            <TouchableOpacity className="bg-[#53a9dc] rounded-2xl  h-9">
                <Text className=" px-4 font-semibold pt-2 text-white text-center ">
                    Jobs
                </Text>
            </TouchableOpacity>

            <TouchableOpacity className="bg-white rounded-2xl h-9">
                <Text className="px-4 font-semibold pt-2 text-gray-500 text-center ">
                    Salaries
                </Text>
            </TouchableOpacity>

            <TouchableOpacity className="bg-white rounded-2xl  h-9">
                <Text className=" px-4 font-semibold pt-2 text-gray-500 text-center ">
                Companies
                </Text>
            </TouchableOpacity>

            <TouchableOpacity className="bg-white rounded-2xl  h-9">
                <Text className=" px-4 font-semibold pt-2 text-gray-500 text-center ">
                Working Hours
                </Text>
            </TouchableOpacity>


        </View>
      </View>

      <Text className="text-xl px-5 pt-6 font-semibold text-[#244b65] pb-4">5 Developer Jobs</Text>
      <ScrollView className="px-4 gap-y-4 ">

            

            <View className="bg-white border    border-gray-100 shadow-sm shadow-black rounded-2xl  w-full h-48">
              <View className="flex-row pt-4 items-center">
              <View className="pl-4 ">
                <Image className="w-16 h-16 rounded-xl" source={{uri:"https://htmlcolorcodes.com/assets/images/colors/light-gray-color-solid-background-1920x1080.png"}}/>
              </View>
              <View className="pl-4 ">
                <View className="flex-row items-center ">
                <Text className="text-lg font-semibold  pr-44">Job Role</Text>
                <BookmarkIcon color={"#d3d3d3"}/> 
                </View>
                <Text className="text-gray-500">Company Name</Text>
              </View>
              </View>
              <View className="flex-row items-center space-x-8 px-5 pt-4">
                <View className="flex-row items-center space-x-2">
                <MapPinIcon color={"#D3D3D3"} size={25}/>
                <Text className="text-gray-500">Location of office</Text>
                </View>
                <View className="flex-row items-center space-x-2">
                    <ArrowPathIcon color={"#D3D3D3"} size={25}/>
                    <Text className="text-gray-500">Actively recurting</Text>
                </View>

              </View>
              <View className="flex-row items-center px-4 space-x-7 pt-4">
              <TouchableOpacity className="bg-[#ececec] rounded-lg  h-6">
                <Text className="text-xs px-4 font-semibold pt-1  text-center ">
                Part Time
                </Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-[#ececec] rounded-lg  h-6">
                <Text className="text-xs px-4 font-semibold pt-1  text-center ">
                Remote
                </Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-[#ececec] rounded-lg  h-6">
                <Text className="text-xs px-4 font-semibold pt-1  text-center ">
                Hybrid
                </Text>
            </TouchableOpacity>

              </View>
          
          </View>

          <View className="bg-white border    border-gray-100 shadow-sm shadow-black rounded-2xl  w-full h-48">
              <View className="flex-row pt-4 items-center">
              <View className="pl-4 ">
                <Image className="w-16 h-16 rounded-xl" source={{uri:"https://htmlcolorcodes.com/assets/images/colors/light-gray-color-solid-background-1920x1080.png"}}/>
              </View>
              <View className="pl-4 ">
                <View className="flex-row items-center ">
                <Text className="text-lg font-semibold  pr-44">Job Role</Text>
                <BookmarkIcon color={"#d3d3d3"}/> 
                </View>
                <Text className="text-gray-500">Company Name</Text>
              </View>
              </View>
              <View className="flex-row items-center space-x-8 px-5 pt-4">
                <View className="flex-row items-center space-x-2">
                <MapPinIcon color={"#D3D3D3"} size={25}/>
                <Text className="text-gray-500">Location of office</Text>
                </View>
                <View className="flex-row items-center space-x-2">
                    <ArrowPathIcon color={"#D3D3D3"} size={25}/>
                    <Text className="text-gray-500">Actively recurting</Text>
                </View>

              </View>
              <View className="flex-row items-center px-4 space-x-7 pt-4">
              <TouchableOpacity className="bg-[#ececec] rounded-lg  h-6">
                <Text className="text-xs px-4 font-semibold pt-1  text-center ">
                Part Time
                </Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-[#ececec] rounded-lg  h-6">
                <Text className="text-xs px-4 font-semibold pt-1  text-center ">
                Remote
                </Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-[#ececec] rounded-lg  h-6">
                <Text className="text-xs px-4 font-semibold pt-1  text-center ">
                Hybrid
                </Text>
            </TouchableOpacity>

              </View>
          
          </View>


          <View className="bg-white border    border-gray-100 shadow-sm shadow-black rounded-2xl  w-full h-48">
              <View className="flex-row pt-4 items-center">
              <View className="pl-4 ">
                <Image className="w-16 h-16 rounded-xl" source={{uri:"https://htmlcolorcodes.com/assets/images/colors/light-gray-color-solid-background-1920x1080.png"}}/>
              </View>
              <View className="pl-4 ">
                <View className="flex-row items-center ">
                <Text className="text-lg font-semibold  pr-44">Job Role</Text>
                <BookmarkIcon color={"#d3d3d3"}/> 
                </View>
                <Text className="text-gray-500">Company Name</Text>
              </View>
              </View>
              <View className="flex-row items-center space-x-8 px-5 pt-4">
                <View className="flex-row items-center space-x-2">
                <MapPinIcon color={"#D3D3D3"} size={25}/>
                <Text className="text-gray-500">Location of office</Text>
                </View>
                <View className="flex-row items-center space-x-2">
                    <ArrowPathIcon color={"#D3D3D3"} size={25}/>
                    <Text className="text-gray-500">Actively recurting</Text>
                </View>

              </View>
              <View className="flex-row items-center px-4 space-x-7 pt-4">
              <TouchableOpacity className="bg-[#ececec] rounded-lg  h-6">
                <Text className="text-xs px-4 font-semibold pt-1  text-center ">
                Part Time
                </Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-[#ececec] rounded-lg  h-6">
                <Text className="text-xs px-4 font-semibold pt-1  text-center ">
                Remote
                </Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-[#ececec] rounded-lg  h-6">
                <Text className="text-xs px-4 font-semibold pt-1  text-center ">
                Hybrid
                </Text>
            </TouchableOpacity>

              </View>
          
          </View>

          

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

export default BrowseJobsScreen