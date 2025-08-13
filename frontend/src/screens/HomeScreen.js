import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = ({ navigation }) => {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const token = await AsyncStorage.getItem('token');
        if (!token) {
          // No token found, navigate to Login
          navigation.navigate('Login');
          return;
        }

        const response = await fetch('http://localhost:3000/api/users/me', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
        });

        const data = await response.json();

        if (response.ok) {
          setUserName(data.name);
        } else {
          // Handle error (e.g., token expired)
          Alert.alert('Session Expired', 'Please log in again.');
          await AsyncStorage.removeItem('token'); // Clear invalid token
          navigation.navigate('Login');
        }
      } catch (error) {
        console.error(error);
        Alert.alert('Error', 'Could not fetch user profile.');
        navigation.navigate('Login');
      }
    };

    fetchUserProfile();
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome to Neighborly, {userName || 'Guest'}!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
