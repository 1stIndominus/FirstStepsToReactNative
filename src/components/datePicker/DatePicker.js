import React, {useCallback, useState} from 'react';
import DatePicker from 'react-native-date-picker';
import {Text, View, Button, StyleSheet} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

export const DatePickerModal = () => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [chosenDate, setChosenDate] = useState('');
  const [toggle, setToggle] = useState(false);

  const handleDateChange = useCallback(() => {
    setToggle(true);
  }, []);

  return (
    <View>
      <Button
        color="#3396D4"
        title="Choose the Date"
        onPress={() => setOpen(true)}
      />
      <DatePicker
        modal
        open={open}
        date={date}
        mode="date"
        theme="dark"
        textColor={'#3396D4'}
        onDateChange={handleDateChange}
        onConfirm={item => {
          setOpen(false);
          setDate(item);
          handleDateChange();
          setChosenDate(item.toLocaleDateString());
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
      <View style={styles.dateContainer}>
        <Text style={styles.text}>
          {toggle ? `Chosen Date: \n ${chosenDate}` : 'Select a date'}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  dateContainer: {
    backgroundColor: '#8EC5FC',
    justifyContent: 'center',
    alignItems: 'center',
    width: 150,
    height: 50,
    borderBottomEndRadius: 20,
  },
  text: {
    color: '#1D9085',
  },
});
