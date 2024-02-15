import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const DynamicForm = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [additionalFields, setAdditionalFields] = useState([]);

  const handleItemChange = (itemValue) => {
    setSelectedItem(itemValue);
    // Reset additional fields when the dropdown item changes
    setAdditionalFields([]);
  };

  const handleAddField = () => {
    // Add a new field to the additionalFields array
    setAdditionalFields([...additionalFields, { key: additionalFields.length }]);
  };

  return (
    <View style={{ padding: 20 }}>
      <RNPickerSelect
        onValueChange={handleItemChange}
        items={[
          { label: 'Option 1', value: 'option1' },
          { label: 'Option 2', value: 'option2' },
          { label: 'Option 3', value: 'option3' },
        ]}
      />

      {additionalFields.map((field) => (
        <TextInput
          key={field.key}
          placeholder={`Additional Field ${field.key + 1}`}
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginVertical: 10 }}
        />
      ))}

      <Button title="Add Field" onPress={handleAddField} />
    </View>
  );
};

export default DynamicForm;
