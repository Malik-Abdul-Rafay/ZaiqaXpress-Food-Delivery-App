// src/components/MyDrawer.jsx
import React from 'react';
import { Drawer } from 'react-native-paper';

const MyDrawer = ({ visible, onDismiss }) => {
  return (
    <Drawer
      visible={visible}
      onDismiss={onDismiss}
      style={{ width: '80%' }} 
    >
      <Drawer.Section title="Menu">
        <Drawer.Item label="Item 1" onPress={() => {}} />
        <Drawer.Item label="Item 2" onPress={() => {}} />
      </Drawer.Section>
    </Drawer>
  );
};

export default MyDrawer;
