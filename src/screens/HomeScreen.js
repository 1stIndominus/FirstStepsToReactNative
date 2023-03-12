import React, {useState, useEffect, useCallback} from 'react';
import {
  View,
  Dimensions,
  Text,
  ScrollView,
  ActivityIndicator,
  Button,
  SafeAreaView,
} from 'react-native';

import FlashMessage from 'react-native-flash-message';
import {getData} from '../services/fetchData';
import {typeOfConection} from '../components/netInfo/NetInfoUsage';
import {DeviceInfoDetail} from '../components/deviceInfo/DeviceInfoDetail';
import {NetInfoUsage} from '../components/netInfo/NetInfoUsage';
import {SliderBox} from 'react-native-image-slider-box';
import {MovieList} from '../components/MovieList';
import {showMessage} from 'react-native-flash-message';
import {RenderHtmlText} from '../components/RenderHTML/RenderHtmlText';
import {DatePickerModal} from '../components/datePicker/DatePicker';
import {ClipboardExample} from '../components/clipboard/ClipboardComponent';
import CopilotComponent from '../components/copilot/Coopilot';
import {ShareComponent} from '../components/socialShare/ShareComponent';
import {DoubleClickAnimation} from '../components/animation/DoubleClickAnimation';
import {EncryptedStorageComponent} from '../components/storage/EncryptedStorage';
import {styles} from './HomeScreenStyles';
import SplashScreen from 'react-native-splash-screen';

const dimentions = Dimensions.get('screen');

export const HomeScreen = ({navigation}) => {
  const [moviesImages, setMoviesImages] = useState();
  const [popularMovies, setPopularMovies] = useState();
  const [popularTv, setPopularTv] = useState();
  const [loaded, setLoaded] = useState(false);

  const handleGetDataFromServices = useCallback(() => {
    getData()
      .then(([upcomingMoviesData, popularMoviesData, popularTvData]) => {
        const moviesImagesArray = [];
        upcomingMoviesData.forEach(movie => {
          moviesImagesArray.push(
            'https://image.tmdb.org/t/p/w500' + movie.poster_path,
          );
        });

        setMoviesImages(moviesImagesArray);
        setPopularMovies(popularMoviesData);
        setPopularTv(popularTvData);
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        setLoaded(true);
      });
  }, []);

  useEffect(() => {
    showMessage({
      message: "In this example I'm using Flash message and NetInfo",
      description: typeOfConection,
      type: 'info',
      color: '#fff',
      duration: 5000,
    });

    SplashScreen.hide();

    handleGetDataFromServices();
  }, [handleGetDataFromServices]);

  if (!loaded) {
    return <ActivityIndicator size="large" color="black" />;
  }

  return (
    <SafeAreaView>
      {/* Upcoming Movies */}
      <ScrollView style={styles.container}>
        {moviesImages && (
          <View style={styles.sliderContainer}>
            <SliderBox
              images={moviesImages}
              dotStyle={styles.sliderStyle}
              sliderBoxHeight={dimentions.height / 1.5}
              autoplay={true}
              circleLoop={true}
            />
          </View>
        )}

        <CopilotComponent />

        <View style={styles.contactsWrapper}>
          <View style={styles.contacts}>
            <Button
              onPress={() => navigation.navigate('Get Contact')}
              title="Contacts"
              color="#97D9E1"
            />
          </View>
          <ShareComponent />
        </View>

        <View style={styles.contactsWrapper}>
          <Button
            onPress={() => navigation.navigate('Image List')}
            title="Image List"
            color="#97D9E1"
          />
          <Button
            onPress={() => navigation.navigate('Section List')}
            title="Section List"
            color="#97D9E1"
          />
          <Button
            onPress={() => navigation.navigate('WebView')}
            title="WebView"
            color="#97D9E1"
          />
        </View>

        {/* Popular Movies */}
        {popularMovies && (
          <View style={styles.carousel}>
            <MovieList
              navigation={navigation}
              title={'Popular Movies'}
              content={popularMovies}
            />
          </View>
        )}
        {/* Popular TV Shows */}
        {popularTv && (
          <View style={styles.carousel}>
            <MovieList
              navigation={navigation}
              title={'Popular TV Shows'}
              content={popularTv}
            />
          </View>
        )}

        <RenderHtmlText />

        <View style={styles.sliderContainer}>
          <Text style={styles.text}>This is Date picker example</Text>
          <DatePickerModal />
        </View>

        <View style={styles.sliderContainer}>
          <Text style={styles.text}>This is Clipboard example</Text>
          <ClipboardExample />
        </View>

        <View style={styles.sliderContainer}>
          <Text style={styles.text}>This is Device Info example</Text>
          <DeviceInfoDetail />
        </View>

        {/* <Animation /> */}
        <DoubleClickAnimation />

        <View style={styles.sliderContainer}>
          <Text style={styles.text}>This is EncryptedStorage example</Text>
          <EncryptedStorageComponent />
        </View>

        <NetInfoUsage />
      </ScrollView>
      <FlashMessage />
    </SafeAreaView>
  );
};

export default HomeScreen;
