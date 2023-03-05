import { View, Text, TextInput, Image, SafeAreaView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import { ArrowLeftIcon, BellIcon, BriefcaseIcon, ChatBubbleLeftIcon, EllipsisVerticalIcon, HomeIcon, MagnifyingGlassIcon, UserIcon } from 'react-native-heroicons/solid';
import { ScrollView } from 'react-native';

const NotifyScreen = () => {
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
        <Text className="text-xl pl-4">Notifiactions</Text>
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

    <ScrollView className="mx-4 pt-4  gap-y-4">
        <TouchableOpacity className="h-20 flex-row rounded-2xl pb-3 items-center  bg-white  w-full">
        <View className="pl-3 pr-3 pt-3">
                <Image className="w-14 h-14 rounded-xl" source={{uri:"https://htmlcolorcodes.com/assets/images/colors/light-gray-color-solid-background-1920x1080.png"}}/>
        </View>
        <View className="pr-24 pt-2">
            <Text className="text-xs text-gray-500">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam,</Text>
        </View>

        </TouchableOpacity>

        <TouchableOpacity className="h-20 flex-row rounded-2xl pb-3 items-center  bg-white  w-full">
        <View className="pl-3 pr-3 pt-3">
                <Image className="w-14 h-14 rounded-xl" source={{uri:"https://htmlcolorcodes.com/assets/images/colors/light-gray-color-solid-background-1920x1080.png"}}/>
        </View>
        <View className="pr-24 pt-2">
            <Text className="text-xs text-gray-500">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam,</Text>
        </View>

        </TouchableOpacity>

        <TouchableOpacity className="h-20 flex-row rounded-2xl pb-3 items-center  bg-white  w-full">
        <View className="pl-3 pr-3 pt-3">
                <Image className="w-14 h-14 rounded-xl" source={{uri:"https://htmlcolorcodes.com/assets/images/colors/light-gray-color-solid-background-1920x1080.png"}}/>
        </View>
        <View className="pr-24 pt-2">
            <Text className="text-xs text-gray-500">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam,</Text>
        </View>

        </TouchableOpacity>

        <TouchableOpacity className="h-20 flex-row rounded-2xl pb-3 items-center  bg-white  w-full">
        <View className="pl-3 pr-3 pt-3">
                <Image className="w-14 h-14 rounded-xl" source={{uri:"https://htmlcolorcodes.com/assets/images/colors/light-gray-color-solid-background-1920x1080.png"}}/>
        </View>
        <View className="pr-24 pt-2">
            <Text className="text-xs text-gray-500">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam,</Text>
        </View>

        </TouchableOpacity>



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

export default NotifyScreen