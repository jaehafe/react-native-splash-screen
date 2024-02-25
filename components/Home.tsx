import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Animated, { FadeIn } from 'react-native-reanimated';

export default function Home() {
  return (
    <SafeAreaView>
      <Animated.ScrollView entering={FadeIn.duration(500)}>
        <Text style={styles.title}>Welcome</Text>
      </Animated.ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
