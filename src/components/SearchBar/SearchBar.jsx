import { Input, IconButton, HStack } from 'native-base'
import { Ionicons } from "@expo/vector-icons";
import React from 'react'

const SearchBar = ({ input, setInput, handleSubmit }) => {
  return (
    <HStack m={5} space={2}>
      <Input
        value={input}
        onChangeText={e => setInput(e)}
        bgColor='transparent'
        flex={1}
        size='md'
        variant='filled'
        borderColor='gray.300'
        borderRadius='full'
        placeholder="Enter a city..."
        color="gray.600"
        placeholderTextColor='gray.300'
        onSubmitEditing={handleSubmit} />
      <IconButton onPress={handleSubmit} colorScheme='violet' shadow={4} variant='solid' p={3} borderRadius='full' _icon={{ as: Ionicons, name: "search-outline" }} />
    </HStack>
  )
}

export default SearchBar