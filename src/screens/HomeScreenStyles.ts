import EStyleSheet from 'react-native-extended-stylesheet';
import fontFamilies from '../styles/fontFamilies';

export const styles = EStyleSheet.create({
  container: {
    backgroundColor: 'lightgrey',
    flexGrow: 1,
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
    fontFamily: fontFamilies.notoSans.BoldItalic,
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
  bottomContainer: {
    flex: 1,
    backgroundColor: '#111',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    height: 50,
    borderRadius: 25,
    aspectRatio: 1,
    backgroundColor: 'white',
    opacity: 0.6,
  },
});
