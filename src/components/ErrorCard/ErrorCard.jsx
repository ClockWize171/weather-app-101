import { Image } from 'react-native'
import React from 'react'
import { Box, Text } from 'native-base'

const ErrorCard = ({ imageHandle, error }) => {
  return (
    <Box
      justifyContent='center'
      alignItems='center'
      bg='violet.300'
      m={5}
      borderRadius="3xl"
      shadow={5}
      p={5}>
      <Image
        source={imageHandle}
        alt='search'
        style={{ width: error ? 300 : 150, height: 300 }}
        resizeMode='contain' />
      {error ?
        <Text color='white' fontSize='xl' fontWeight='semibold'>No City Found 🔎</Text>
        :
        <Text color='white' fontSize='xl' fontWeight='semibold'>Search Your City 🗺</Text>
      }
    </Box>
  )
}

export default ErrorCard