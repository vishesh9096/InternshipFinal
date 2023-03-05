import { View, Text, Image } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import { ArrowLeftIcon, BellIcon, BriefcaseIcon, ChatBubbleLeftIcon, EllipsisVerticalIcon, HomeIcon, UserIcon } from 'react-native-heroicons/solid';
import { ScrollView } from 'react-native';

const ChatScreen = () => {
    const navigation = useNavigation();

  useLayoutEffect(()=>
    navigation.setOptions({
        headerShown: false,
    })
    )
  return (
    <View className="flex h-full">
    <View className="">
    <View className="pt-16 pb-4 flex-row bg-white items-center pl-5 justify-between  ">
        <TouchableOpacity>
          <ArrowLeftIcon color={"#244b65"} size={30}/>
        </TouchableOpacity >
        <Text className="text-xl pl-4">Messages</Text>
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

      <ScrollView className=" pt-8 gap-y-4 px-4">
        <View className="bg-white flex-row items-center rounded-xl  drop-shadow-xl shadow-black w-full h-20">
            <View className="p-3"><Image
            className="h-14 rounded-full w-14"
            source={{uri:"https://htmlcolorcodes.com/assets/images/colors/light-gray-color-solid-background-1920x1080.png"}}
            />
            </View>
            <View className="pr-28 ">
                <Text className='text-lg font-semibold text-[#244b65]'>Nikita Arora</Text>
                <Text className='text-xs   text-gray-500'>Lorem ipsum dolor sit amet, consectetuer adipisc- ing elit, sed diam nonummy</Text>
            </View>
            <View className="absolute flex justify-center bg-blue-400 right-4 bottom-4 h-5 w-5 rounded-full">
                <Text className="text-white font-bold text-center ">3</Text>
            </View>
        </View>
        
        

        <View className="bg-white flex-row items-center rounded-xl  drop-shadow-xl shadow-black w-full h-20">
            <View className="p-3"><Image
            className="h-14 rounded-full w-14"
            source={{uri:"https://htmlcolorcodes.com/assets/images/colors/light-gray-color-solid-background-1920x1080.png"}}
            />
            </View>
            <View className="pr-28 ">
                <Text className='text-lg font-semibold text-[#244b65]'>Nikita Arora</Text>
                <Text className='text-xs   text-gray-500'>Lorem ipsum dolor sit amet, consectetuer adipisc- ing elit, sed diam nonummy</Text>
            </View>
            <View className="absolute flex justify-center bg-blue-400 right-4 bottom-4 h-5 w-5 rounded-full">
                <Text className="text-white font-bold text-center ">3</Text>
            </View>
        </View><View className="bg-white flex-row items-center rounded-xl  drop-shadow-xl shadow-black w-full h-20">
            <View className="p-3"><Image
            className="h-14 rounded-full w-14"
            source={{uri:"https://htmlcolorcodes.com/assets/images/colors/light-gray-color-solid-background-1920x1080.png"}}
            />
            </View>
            <View className="pr-28 ">
                <Text className='text-lg font-semibold text-[#244b65]'>Nikita Arora</Text>
                <Text className='text-xs   text-gray-500'>Lorem ipsum dolor sit amet, consectetuer adipisc- ing elit, sed diam nonummy</Text>
            </View>
            <View className="absolute flex justify-center bg-blue-400 right-4 bottom-4 h-5 w-5 rounded-full">
                <Text className="text-white font-bold text-center ">3</Text>
            </View>
        </View><View className="bg-white flex-row items-center rounded-xl  drop-shadow-xl shadow-black w-full h-20">
            <View className="p-3"><Image
            className="h-14 rounded-full w-14"
            source={{uri:"https://htmlcolorcodes.com/assets/images/colors/light-gray-color-solid-background-1920x1080.png"}}
            />
            </View>
            <View className="pr-28 ">
                <Text className='text-lg font-semibold text-[#244b65]'>Nikita Arora</Text>
                <Text className='text-xs   text-gray-500'>Lorem ipsum dolor sit amet, consectetuer adipisc- ing elit, sed diam nonummy</Text>
            </View>
            <View className="absolute flex justify-center bg-blue-400 right-4 bottom-4 h-5 w-5 rounded-full">
                <Text className="text-white font-bold text-center ">3</Text>
            </View>
        </View><View className="bg-white flex-row items-center rounded-xl  drop-shadow-xl shadow-black w-full h-20">
            <View className="p-3"><Image
            className="h-14 rounded-full w-14"
            source={{uri:"https://htmlcolorcodes.com/assets/images/colors/light-gray-color-solid-background-1920x1080.png"}}
            />
            </View>
            <View className="pr-28 ">
                <Text className='text-lg font-semibold text-[#244b65]'>Nikita Arora</Text>
                <Text className='text-xs   text-gray-500'>Lorem ipsum dolor sit amet, consectetuer adipisc- ing elit, sed diam nonummy</Text>
            </View>
            <View className="absolute flex justify-center bg-blue-400 right-4 bottom-4 h-5 w-5 rounded-full">
                <Text className="text-white font-bold text-center ">3</Text>
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

export default ChatScreen