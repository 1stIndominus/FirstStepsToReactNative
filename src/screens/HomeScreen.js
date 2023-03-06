import React, {useState, useEffect} from 'react';
import {
  View,
  Dimensions,
  Text,
  ScrollView,
  ActivityIndicator,
  Button,
} from 'react-native';
import {
  getPopularMovies,
  getUpcomingMovies,
  getPopularTv,
  getFamilyMovies,
  getDocumentaryMovies,
} from '../services/fetchData';
import FlashMessage from 'react-native-flash-message';
import EStyleSheet from 'react-native-extended-stylesheet';
import fontFamilies from '../styles/fontFamilies';
import react from 'react';

import {typeOfConection} from '../components/netInfo/NetInfoUsage';
import {DeviceInfoDetail} from '../components/deviceInfo/DeviceInfoDetail';
import {Error} from '../components/Error';
import {NetInfoUsage} from '../components/netInfo/NetInfoUsage';
import {SliderBox} from 'react-native-image-slider-box';
import {MovieList} from '../components/MovieList';
import {showMessage} from 'react-native-flash-message';
import {Animation} from '../components/animation/Animation';
import {RenderHtmlText} from '../components/RenderHTML/RenderHtmlText';
import {DatePickerModal} from '../components/datePicker/DatePicker';
import {ClipboardExample} from '../components/clipboard/ClipboardComponent';
import CopilotComponent from '../components/copilot/Coopilot';
import {ShareComponent} from '../components/socialShare/ShareComponent';
import {DoubleClickAnimation} from '../components/animation/DoubleClickAnimation';
import {EncryptedStorageComponent} from '../components/storage/EncryptedStorage';

const dimentions = Dimensions.get('screen');

export const HomeScreen = ({navigation}) => {
  const [moviesImages, setMoviesImages] = useState();
  const [popularMovies, setPopularMovies] = useState();
  const [popularTv, setPopularTv] = useState();
  const [familyMovies, setFamilyMovies] = useState();
  const [documentaryMovies, setDocumentaryMovies] = useState();

  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const getData = () => {
    return Promise.all([
      getUpcomingMovies(),
      getPopularMovies(),
      getPopularTv(),
      getFamilyMovies(),
      getDocumentaryMovies(),
    ]);
  };

  useEffect(() => {
    showMessage({
      message: "In this example I'm using Flash message and NetInfo",
      description: typeOfConection,
      type: 'info',
      color: '#fff',
      duration: 5000,
    });

    getData()
      .then(
        ([
          upcomingMoviesData,
          popularMoviesData,
          popularTvData,
          familyMoviesData,
          documentaryMoviesData,
        ]) => {
          const moviesImagesArray = [];
          upcomingMoviesData.forEach(movie => {
            moviesImagesArray.push(
              'https://image.tmdb.org/t/p/w500' + movie.poster_path,
            );
          });

          setMoviesImages(moviesImagesArray);
          setPopularMovies(popularMoviesData);
          setPopularTv(popularTvData);
          setFamilyMovies(familyMoviesData);
          setDocumentaryMovies(documentaryMoviesData);
        },
      )
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoaded(true);
      });
  }, []);

  return (
    <react.Fragment>
      {/* Upcoming Movies */}
      {loaded && !error && (
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
          {/* Family Movies */}
          {familyMovies && (
            <View style={styles.carousel}>
              <MovieList
                navigation={navigation}
                title={'Family Movies'}
                content={familyMovies}
              />
            </View>
          )}
          {/* Documentary Movies */}
          {documentaryMovies && (
            <View style={styles.carousel}>
              <MovieList
                navigation={navigation}
                title={'Documentary Movies'}
                content={documentaryMovies}
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
      )}
      {!loaded && <ActivityIndicator size="large" color="black" />}
      {error && <Error />}

      <FlashMessage />
    </react.Fragment>
  );
};

const styles = EStyleSheet.create({
  container: {
    backgroundColor: 'lightgrey',
  },
  sliderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 80,
    backgroundColor: 'lightgrey',
  },
  sliderStyle: {
    height: 0,
  },
  carousel: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'lightgrey',
    alignItems: 'center',
  },
  text: {
    paddingBottom: 10,
    fontFamily: fontFamilies.saira.black,
    color: '#B312A8',
  },
  contacts: {
    width: 150,
  },
  contactsWrapper: {
    marginBottom: 60,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});

export default HomeScreen;
