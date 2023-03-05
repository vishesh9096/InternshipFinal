import { View, Text, TouchableOpacityBase, TextInput, StyleSheet } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import { ArrowLeftIcon, ChatBubbleLeftIcon, EllipsisVerticalIcon } from 'react-native-heroicons/solid';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';

const SearchScreen = () => {
    const navigation = useNavigation();

    useLayoutEffect(()=>
      navigation.setOptions({
          headerShown: false,
      })
      )
      const [value, setValue] = useState(null);


    const data = [
        { label: 'Packets', value: 'Packets' },
        { label: 'Kg', value: 'Kg' },
        { label: 'Servings', value: 'Serving' },
        { label: 'Litre', value: 'Litre' },
        { label: 'Slices', value: 'Slices' },
       
      ];
  return (
    <View className="h-full">
        <View className="pb-4">
        <View className="pt-16 pb-4 flex-row bg-white items-center pl-5 justify-between  ">
        <TouchableOpacity>
          <ArrowLeftIcon color={"#244b65"} size={30}/>
        </TouchableOpacity >
        <Text className="text-xl pl-4 ">Search</Text>
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

        <View className="px-3">
        <View className="bg-white  rounded-2xl w-full ">
            <Text className="pt-4 text-xl text-center font-semibold text-[#244b65]"> Quick Search </Text>
            <View className="pt-4 flex-row items-center space-x-2 pl-2">
                <Text className="text-lg pl-1 pr-3">Keywords:</Text>
            <TextInput 
            className="text-2xl pl-12  bg-white shadow-xl shadow-black border border-gray-500 rounded-lg w-64 h-8 "  />

            </View>
            <Text className="text-gray-400 text-center pl-1 ">Enter Keywords for the job</Text>

            <View className="pt-6 flex-row items-center space-x-2 pl-2">
                <Text className="text-lg pl-1 pr-5">Jobcode:</Text>
            <TextInput 
            className="text-2xl pl-12  bg-white shadow-xl shadow-black border border-gray-500 rounded-lg w-64 h-8 "  />

            </View>

            <View className="pt-8 flex-row items-center space-x-2 pl-3">
                <Text className="text-lg pr-5">Industry:</Text>
                <Dropdown
                style={styles.dropdown}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={data}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder="Select industry"
                searchPlaceholder="Search..."
                value={value}
                onChange={item => {
                setValue(item.value);
                }}
                
            />
            </View>
            <Text className="text-gray-400  pl-28">You can select multiple max 6 industries</Text>
            <View className="pt-6 flex-row items-center space-x-2 pl-3">
                <Text className="text-lg pr-4">Location:</Text>
                <Dropdown
                style={styles.dropdown}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={data}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder="Select Location"
                searchPlaceholder="Search..."
                value={value}
                onChange={item => {
                setValue(item.value);
                }}
                
            />
            </View>
            <Text className="text-gray-400  pl-28">You can select multiple max 6 locations</Text>
            <View className="pt-6 flex-row items-center space-x-2 pl-3">
                <Text className="text-lg ">Experience:</Text>
                <Dropdown
                style={styles.dropdown}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={data}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder="Experience"
                searchPlaceholder="Search..."
                value={value}
                onChange={item => {
                setValue(item.value);
                }}
                
            />
            </View>
            <View className="flex items-center pt-8">
            <TouchableOpacity className="w-64 h-12  rounded-xl bg-[#244b65]">
                <Text className="text-center text-xl pt-2 font-semibold text-white">Submit</Text>
            </TouchableOpacity>
            <TouchableOpacity className="pt-4 pb-8">
            <Text className="text-blue-500 underline">Advance Search</Text>
            </TouchableOpacity>
        </View>
        </View>

        
        </View>


        
    </View>
  )
}

export default SearchScreen

const styles = StyleSheet.create({
    dropdown: {
      backgroundColor:"white",
      height: 35,
      borderBottomColor: 'gray',
      borderRadius:10,
      width: 280,
      borderWidth: 0.2,
      borderColor: '#808080',
    },
    placeholderStyle: {
      fontSize: 16,
      paddingLeft:4,
      color:'#808080',
    },
    selectedTextStyle: {
      fontSize: 16,
      padding:2
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
      
    },
  });