import React, {useCallback, useState} from 'react';
import DatePicker from 'react-native-date-picker';
import {Text, View, Button} from 'react-native';
import {styles} from './styles';

export const DatePickerModal = () => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [chosenDate, setChosenDate] = useState('');
  const [dataChange, setDataChange] = useState(false);

  const handleDateChange = useCallback(() => {
    setDataChange(true);
  }, []);

  const handleConfirm = useCallback(
    item => {
      setOpen(false);
      setDate(item);
      handleDateChange();
      setChosenDate(item.toLocaleDateString());
    },
    [handleDateChange],
  );

  const toggle = useCallback(() => {
    setOpen(false);
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
        onConfirm={handleConfirm}
        onCancel={toggle}
      />
      <View style={styles.dateContainer}>
        <Text style={styles.text}>
          {dataChange ? `Chosen Date: \n ${chosenDate}` : 'Select a date'}
        </Text>
      </View>
    </View>
  );
};
