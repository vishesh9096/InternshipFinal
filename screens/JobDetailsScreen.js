import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { ArrowLeftIcon, ChatBubbleLeftIcon, EllipsisVerticalIcon } from 'react-native-heroicons/solid';

const JobDetailsScreen = () => {
    const navigation = useNavigation();

    useLayoutEffect(()=>
      navigation.setOptions({
          headerShown: false,
      })
      )
  return (
    <View className="h-full">

        <View className="">
        <View className="pt-16 pb-4 flex-row bg-white items-center pl-5 justify-between  ">
                <TouchableOpacity>
                <ArrowLeftIcon color={"#244b65"} size={30}/>
                </TouchableOpacity >
                <Text className="text-xl pl-4 ">Job Details</Text>
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


            <ScrollView className="mx-4 pt-4">
                <View className="pt-20 pb-6">
                <View className="bg-white w-full h-56 rounded-2xl">
                    <Text className="text-center text-xl font-bold text-[#244b65] pt-16">Marketing Analyst</Text>
                    <Text className="text-center  font-semibold text-gray-400 pt-2">Company Name</Text>
                    <View className="pt-5 px-5">
                    <View className="h-0.5 bg-gray-200 "></View>
                    </View>

                    <View className="flex-row items-center justify-center space-x-8 pt-4">
                        <View>
                            <Text className="text-center  text-gray-400 font-semibold">Location</Text>
                            <Text className="text-lg text-[#244b65] text-center">Hydrebad</Text>
                        </View>
                        <View className="w-0.5 h-10 bg-gray-200"></View>
                        <View>
                            <Text className="text-center  text-gray-400 font-semibold">Job type</Text>
                            <Text className="text-lg text-[#244b65] text-center">Remote</Text>
                        </View>
                        <View className="w-0.5 h-10 bg-gray-200"></View>
                        <View>
                            <Text className="text-center  text-gray-400 font-semibold">Salary</Text>
                            <Text className="text-lg text-[#244b65] text-center">60K </Text>
                        </View>
                    </View>

                </View>
                    <View className="w-28 h-28 rounded-2xl bg-gray-200 absolute top-4 left-36 pl-2 "></View>
                </View>

                <View className="w-full bg-white rounded-xl">
                    <Text className=" py-3 px-5 text-gray-400 ">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, 
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna 
                    aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud 
                    
                    </Text>

                </View>

                <Text className="py-4 text-[#244b65] text-xl font-bold pl-2">Responsibilities</Text>

                <View className="w-full bg-white rounded-xl">
                    <Text className=" py-3 px-5 text-gray-400 ">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, 
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna 
                    aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud 
                    
                    </Text>
                    <Text className=" py-3 px-5 text-gray-400 ">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, 
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna 
                    aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud 
                    
                    </Text>
                    <Text className=" py-3 px-5 text-gray-400 ">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, 
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna 
                    aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud 
                    
                    </Text>

                </View>

            </ScrollView>

            <View className="w-full h-24 absolute bg-white bottom-0">
                <View className="pt-5 px-8">
                <TouchableOpacity className="w-full h-14 bg-blue-400 rounded-3xl ">
                    <Text className="text-xl text-white font-bold text-center pt-3">APPLY NOW</Text>
                </TouchableOpacity>
                </View>

            </View>
    </View>
  )
}

export default JobDetailsScreen