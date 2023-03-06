import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97D9E1',
    padding: 20,
    borderRadius: 8,
  },
  title: {
    color: 'red',
  },
  buttonText: {
    width: 100,
    height: 20,
    borderRadius: 8,
    backgroundColor: '#0C9E89',
    alignItems: 'center',
    marginBottom: 10,
  },
  text: {
    color: '#fff',
  },
  buttonWrapper: {
    flexDirection: 'row',
    gap: 20,
  },
});
