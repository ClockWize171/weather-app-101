import React, { useState } from "react";
import axios from "axios";
import { NativeBaseProvider, Box, Spinner, ScrollView } from 'native-base'
import { LinearGradient } from 'expo-linear-gradient';
import ErrorCard from "./src/components/ErrorCard/ErrorCard";
import WeatherCard from "./src/components/WeatherCard/WeatherCard";
import SearchBar from "./src/components/SearchBar/SearchBar";

export default function App() {
  const search = require('./assets/weather-images/search.png');
  const location = require('./assets/weather-images/location.png');

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState();

  const api = {
    baseUrl: 'https://api.openweathermap.org/data/2.5',
    key: '6a078c14fd8111c96645c4c2636c5ca1'
  }

  let imageHandle = error ? search : location;

  const handleSubmit = () => {
    setLoading(true)
    setInput("")
    axios({
      method: "GET",
      url: `${api.baseUrl}/weather?q=${input}&units=metric&appid=${api.key}`
    }).then(res => {
      setData(res.data)
    })
      .catch(e => setError(e.message))
      .finally(() => setLoading(false))
  }

  return (
    <NativeBaseProvider>
      <LinearGradient
        colors={['#6d28d9', '#a78bfa']}
        start={{ x: 0.3, y: 0.62 }}
        style={{ flex: 1 }}
        end={{ x: 0.2, y: 0.1 }}
      >
        <ScrollView>
          <Box safeArea>
            <SearchBar input={input} setInput={setInput} handleSubmit={handleSubmit} />
            <>
              {loading ?
                (
                  <Spinner size='lg' color='white' mt={10} />
                ) : (
                  <>
                    {data.length === 0 ?
                      (
                        <ErrorCard imageHandle={imageHandle} error={error} />
                      ) : (
                        <WeatherCard data={data} />
                      )
                    }
                  </>
                )}
            </>
          </Box>
        </ScrollView>
      </LinearGradient>
    </NativeBaseProvider>
  );
}
