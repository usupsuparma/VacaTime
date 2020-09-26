import React, { useState } from 'react';
import { Button, View } from 'react-native';
import DateTimePickerModal from 'react-native-datepicker-modal';

const Calendar = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    console.log(isDatePickerVisible)
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    hideDatePicker();
  };

  return (
    <View>
      <Button title="Show Date Picker" onPress={showDatePicker} />
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        style={{
         // backgroundColor: colors.white,
         // borderBottomColor: colors.gray.veryLight,
          borderBottomWidth: 1,
         // marginVertical: spacing[1],//
         // marginHorizontal: spacing[0],
          justifyContent: 'center',
          borderRadius: 2,
          height: 50}}
      />
    </View>
  );
};

export default Calendar;