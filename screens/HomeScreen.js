import { View, Text, TextInput, Image } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native';
import { BellIcon, BookmarkIcon, BriefcaseIcon, CalendarIcon, ChatBubbleLeftIcon, EllipsisVerticalIcon, HomeIcon, MagnifyingGlassIcon, PlayIcon, ShoppingBagIcon, SparklesIcon, StarIcon, UserIcon } from "react-native-heroicons/solid";
import { ScrollView } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(()=>
    navigation.setOptions({
        headerShown: false,
    })
    )
    const Tab = createBottomTabNavigator();
  return (
<View className="h-full">

      {/* header */}

      <View className="pt-16 pb-4 flex-row bg-white items-center pl-5 justify-between  ">
        <TouchableOpacity>
          <View className="h-10 w-10  bg-[#D3D3D3] rounded-lg">
          <View className="h-4 w-4 rounded-full  bg-green-500 absolute right-0">
            <Text className="text-center"></Text>
          </View>
          </View>
        </TouchableOpacity >
        <Text className="text-xl pl-4">Home</Text>
        <View className="flex-row items-center gap-x-2">
        <TouchableOpacity onPress={()=>{navigation.navigate("Chat")}}>
        <ChatBubbleLeftIcon color={"#D3D3D3"} size={30}/>
        </TouchableOpacity>
        <TouchableOpacity>
          <EllipsisVerticalIcon  size={30} color={"#244b65"}/>
        </TouchableOpacity>
        </View>
      </View>

      <ScrollView className="px-6 pt-4">
      <View className="pb-6">
        <Text className="text-lg">Hi, Akriti Patel</Text>
        <Text className="text-xl font-bold text-[#244b65] pt-1">Search for your dream job here</Text>
      </View>

      <View className="">
        <TextInput placeholder='Search Jobs' 
        className="bg-white text-xl pl-12 pb-1   w-full h-12 rounded-xl"  />
        <TouchableOpacity onPress={()=>{navigation.navigate("Search")}} className="absolute top-2 left-2">
          <MagnifyingGlassIcon size={30} color={"#D3D3D3"}/>
        </TouchableOpacity>
      </View>

      <View className="pt-4">
        <Text className="text-lg font-bold text-[#244b65]">Companies Hiring</Text>
        <ScrollView horizontal={true} className="pt-3 gap-x-4">

          {/* Company Card */}
          <View className="bg-white shadow-md shadow-gray rounded-2xl pt-4 w-40 border flex items-center border-gray-500  h-56">
            <Image className="  w-24  h-24" source={{uri:"https://cdn-icons-png.flaticon.com/512/732/732217.png"}}/>
            <Text className="text-gray-500 pt-3 text-lg font-semibold">NPS LIMITED</Text>
            <View className="flex-row pt-2 pb-2 items-center ">
              <StarIcon color={"#FCC201"} size={20}/>
              <Text className='text-gray-500 pl-1'>4.5</Text>
              <Text className="text-xs pl-3 text-gray-500">2.9K+ reviews</Text>
            </View>
            <TouchableOpacity className="bg-gray-200  rounded-xl">
              <Text className="py-0.5 px-2">View Jobs</Text>
            </TouchableOpacity>
          </View>

          <View className="bg-white shadow-md shadow-gray rounded-2xl pt-4 w-40 border flex items-center border-gray-500  h-56">
            <Image className="  w-24  h-24" source={{uri:"https://cdn-icons-png.flaticon.com/512/732/732229.png"}}/>
            <Text className="text-gray-500 pt-3 text-lg font-semibold">NIKE INDIA</Text>
            <View className="flex-row pt-2 pb-2 items-center ">
              <StarIcon color={"#FCC201"} size={20}/>
              <Text className='text-gray-500 pl-1'>4.9</Text>
              <Text className="text-xs pl-3 text-gray-500">20.9K+ reviews</Text>
            </View>
            <TouchableOpacity className="bg-gray-200  rounded-xl">
              <Text className="py-0.5 px-2">View Jobs</Text>
            </TouchableOpacity>
          </View>

          <View className="bg-white  shadow-md shadow-gray rounded-2xl pt-4 w-40 border flex items-center border-gray-500  h-56">
            <Image className="  w-24  h-24" source={{uri:"https://cdn-icons-png.flaticon.com/512/5969/5969050.png"}}/>
            <Text className="text-gray-500 pt-3 text-lg font-semibold">ASUS</Text>
            <View className="flex-row pt-2 pb-2 items-center ">
              <StarIcon color={"#FCC201"} size={20}/>
              <Text className='text-gray-500 pl-1'>3.5</Text>
              <Text className="text-xs pl-3 text-gray-500">2.2K+ reviews</Text>
            </View>
            <TouchableOpacity className="bg-gray-200  rounded-xl"
            
            >
              <Text className="py-0.5 px-2">View Jobs</Text>
            </TouchableOpacity>
          </View>

          {/* Company Card */}

        </ScrollView>
      </View>

      <View className="pt-4 flex-row items-center pb-2 justify-between">
      <Text className="text-xl font-bold text-[#244b65]">Hot Jobs</Text>
      <TouchableOpacity className="">
      <Text className="text-blue-500">View All</Text>
      </TouchableOpacity>
      </View>

      {/* Job List */}
      <View className="gap-y-4  ">
        
          <View className="bg-white border flex-row items-center border-gray-100 shadow-sm shadow-black rounded-2xl  w-full h-24">
              <View className="pl-4 ">
                <Image className="w-16 h-16 rounded-xl" source={{uri:"https://htmlcolorcodes.com/assets/images/colors/light-gray-color-solid-background-1920x1080.png"}}/>
              </View>
              <View className="pl-4 ">
                <View className="flex-row items-center">
                <Text className="text-lg font-semibold pb-1 pr-40">Job Role</Text>
                <BookmarkIcon color={"#244b65"}/> 
                </View>
                <Text className="text-gray-500">5-10 years</Text>
                <Text className="text-gray-500">Company Name</Text>
              </View>
          </View>

          <View className="bg-white border flex-row items-center border-gray-100 shadow-sm shadow-black rounded-2xl  w-full h-24">
              <View className="pl-4 ">
                <Image className="w-16 h-16 rounded-xl" source={{uri:"https://htmlcolorcodes.com/assets/images/colors/light-gray-color-solid-background-1920x1080.png"}}/>
              </View>
              <View className="pl-4 ">
                <View className="flex-row items-center">
                <Text className="text-lg font-semibold pb-1 pr-40">Job Role</Text>
                <BookmarkIcon color={"#244b65"}/> 
                </View>
                <Text className="text-gray-500">5-10 years</Text>
                <Text className="text-gray-500">Company Name</Text>
              </View>
          </View>

          <View className="bg-white border flex-row items-center border-gray-100 shadow-sm shadow-black rounded-2xl  w-full h-24">
              <View className="pl-4 ">
                <Image className="w-16 h-16 rounded-xl" source={{uri:"https://htmlcolorcodes.com/assets/images/colors/light-gray-color-solid-background-1920x1080.png"}}/>
              </View>
              <View className="pl-4 ">
                <View className="flex-row items-center">
                <Text className="text-lg font-semibold pb-1 pr-40">Job Role</Text>
                <BookmarkIcon color={"#244b65"}/> 
                </View>
                <Text className="text-gray-500">5-10 years</Text>
                <Text className="text-gray-500">Company Name</Text>
              </View>
          </View>

          <View className="bg-white border flex-row items-center border-gray-100 shadow-sm shadow-black rounded-2xl  w-full h-24">
              <View className="pl-4 ">
                <Image className="w-16 h-16 rounded-xl" source={{uri:"https://htmlcolorcodes.com/assets/images/colors/light-gray-color-solid-background-1920x1080.png"}}/>
              </View>
              <View className="pl-4 ">
                <View className="flex-row items-center">
                <Text className="text-lg font-semibold pb-1 pr-40">Job Role</Text>
                <BookmarkIcon color={"#244b65"}/> 
                </View>
                <Text className="text-gray-500">5-10 years</Text>
                <Text className="text-gray-500">Company Name</Text>
              </View>
          </View>

          <View className="bg-white border flex-row items-center border-gray-100 shadow-sm shadow-black rounded-2xl  w-full h-24">
              <View className="pl-4 ">
                <Image className="w-16 h-16 rounded-xl" source={{uri:"https://htmlcolorcodes.com/assets/images/colors/light-gray-color-solid-background-1920x1080.png"}}/>
              </View>
              <View className="pl-4 ">
                <View className="flex-row items-center">
                <Text className="text-lg font-semibold pb-1 pr-40">Job Role</Text>
                <BookmarkIcon color={"#244b65"}/> 
                </View>
                <Text className="text-gray-500">5-10 years</Text>
                <Text className="text-gray-500">Company Name</Text>
              </View>
          </View>




      </View>

      <View className="h-44"></View>

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

export default HomeScreen