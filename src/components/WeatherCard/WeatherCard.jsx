import { Image } from 'react-native'
import React, { useState } from 'react'
import { Box, Heading, HStack, Text, Image as NbImage } from 'native-base'
import moment from 'moment';
import sunrise from '../../../assets/weather-images/sunrise.png'
import sunset from '../../../assets/weather-images/sunset.png'

import drizzle from '../../../assets/weather-images/rain.png'
import clear from '../../../assets/weather-images/clear-sky.png'
import defaultImg from '../../../assets/weather-images/climatization.png'
import brokenCloud from '../../../assets/weather-images/broken-cloud.png';
import haze from '../../../assets/weather-images/haze.png'
import thunderstorm from '../../../assets/weather-images/thunderstorm.png'
import rain from '../../../assets/weather-images/shower-rain.png'
import snow from '../../../assets/weather-images/snow.png'
import tornado from '../../../assets/weather-images/tornado.png'

const WeatherCard = ({ data }) => {

  const renderImage = (weather) => {
    let image = defaultImg;
    weather?.map(i => {
      switch (i?.main) {
        case 'Haze' || 'Mist' || 'Fog' || 'Sand' || 'Dust' || 'Squall' || 'Ash' || 'Smoke':
          image = haze;
          break;
        case 'Tornado':
          image = tornado;
          break;
        case 'Clouds':
          image = brokenCloud;
          break;
        case 'Clear':
          image = clear;
          break;
        case 'Drizzle':
          image = drizzle;
          break;
        case 'Thunderstorm':
          image = thunderstorm;
          break;
        case 'Rain':
          image = rain;
          break;
        case 'Snow':
          image = snow;
          break;
        default:
          image = defaultImg;
          break;
      }
    })
    return (
      <Image
        source={image}
        alt='weatherImage'
        style={{ width: 150, height: 200 }}
        resizeMode='contain' />
    )
  }

  return (
    <Box
      shadow={5}
      bg='violet.300'
      p={5}
      m={5}
      borderRadius='3xl'
      justifyContent='center'
      alignItems='center'>
      <Heading my={2} color='white' size='2xl'>{data?.weather.map(i => i?.main)}</Heading>
      {renderImage(data?.weather)}
      <Heading my={2} color='white'>
        {data?.name}, {data?.sys?.country}
      </Heading>
      <Text my={2} color='white' fontWeight='semibold'>
        {moment().format('MMMM Do YYYY, h:mm A')}
      </Text>
      <Heading my={2} color='white'>
        {Math.round(data?.main?.temp)} °C
      </Heading>
      <Text my={2} color='white' fontWeight='semibold'>
        Min {Math.round(data?.main?.temp_min)} °C / Max {Math.round(data?.main?.temp_max)} °C
      </Text>
      <Box justifyContent='center' alignItems='center' my={2}>
        <NbImage source={sunrise} alt='sunriseImg' w={10} h={8} resizeMode='contain' />
        <Text mt={1.5} color='white'>
          Sunrise : {moment.utc(data?.sys?.sunrise, 'X').add(data?.timezone, 'seconds').format('hh:mm A')}
        </Text>
      </Box>
      <Box justifyContent='center' alignItems='center' my={2}>
        <NbImage source={sunset} alt='sunriseImg' w={10} h={8} resizeMode='contain' />
        <Text mt={1.5} color='white'>
          Sunset : {moment.utc(data?.sys?.sunset, 'X').add(data?.timezone, 'seconds').format('hh:mm A')}
        </Text>
      </Box>
    </Box>
  )
}

export default WeatherCard