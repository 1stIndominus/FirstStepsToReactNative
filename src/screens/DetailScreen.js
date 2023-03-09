import React, {useState, useEffect, useCallback} from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  ActivityIndicator,
  Modal,
  SafeAreaView,
} from 'react-native';
import {getMovie} from '../services/fetchData';
import {PlayButton} from '../components/PlayButton';
import {Rating} from 'react-native-ratings';
import dateFormat from 'dateformat';
import {Video} from '../components/Video';
import {styles} from './DetailScreenStyles';

const placeholderImage = require('../../assets/images/placeholder.png');

export const MovieGenreDetails = ({movieDetail}) => {
  try {
    if (movieDetail.genres) {
      return (
        <View style={styles.genresContainer}>
          {movieDetail.genres?.map(genre => {
            return (
              <Text style={styles.genre} key={genre.id}>
                {genre.name}
              </Text>
            );
          })}
        </View>
      );
    }
  } catch (error) {
    console.error(error);
  }
};

export const DetailScreen = ({route, navigation}) => {
  const movieId = route.params.movieId;

  const [movieDetail, setMovieDetail] = useState();
  const [loaded, setLoaded] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const handleMovieData = useCallback(() => {
    getMovie(movieId).then(movieData => {
      setMovieDetail(movieData);
      setLoaded(true);
    });
  }, [movieId]);

  const videoShown = useCallback(() => {
    setModalVisible(!modalVisible);
  }, [modalVisible]);

  useEffect(() => {
    handleMovieData();
  }, [handleMovieData]);

  const handleMovieImageSource = useCallback(() => {
    try {
      if (movieDetail.poster_path) {
        return {
          uri: 'https://image.tmdb.org/t/p/w500' + movieDetail.poster_path,
        };
      }
    } catch (error) {
      console.error('Error in handleMovieImageSource', error);
    }
    return placeholderImage;
  }, [movieDetail]);

  if (!loaded) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <SafeAreaView>
      <View>
        <ScrollView>
          <Image
            resizeMode="cover"
            style={styles.image}
            source={handleMovieImageSource}
          />
          <View style={styles.container}>
            <View style={styles.playButton}>
              <PlayButton handlePress={videoShown} />
            </View>
            <Text style={styles.movieTitle}>{movieDetail?.title}</Text>
            <MovieGenreDetails movieDetail={movieDetail} />
            <Rating
              count={5}
              isDisabled={true}
              size={20}
              type="star"
              tintColor="#"
            />
            <Text style={styles.overview}>{movieDetail?.overview}</Text>

            <Text style={styles.release}>
              {'Release date: ' +
                dateFormat(movieDetail.release_date, 'mmmm dd, yyyy')}
            </Text>
          </View>
        </ScrollView>
        <Modal
          supportedOrientations={['portrait', 'landscape']}
          animationType="slide"
          visible={modalVisible}>
          <View style={styles.videoModal}>
            <Video onClose={videoShown} />
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
};
