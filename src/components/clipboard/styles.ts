import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    backgroundColor: '#BBBBC5',
    height: 200,
    padding: 10,
    borderRadius: 8,
  },
  copiedText: {
    marginTop: 10,
    color: 'red',
  },
  clipContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  clipText: {
    paddingRight: 5,
    paddingTop: 5,
    color: 'black',
    height: 36,
    borderBottomLeftRadius: 3,
    borderTopLeftRadius: 3,
    backgroundColor: '#E0E0FB',
  },
});
