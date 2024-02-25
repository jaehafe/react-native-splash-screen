import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useRef } from 'react';
import LottieView from 'lottie-react-native';

interface SplashProps {
  onLoading: VoidFunction;
}

export default function Splash({ onLoading }: SplashProps) {
  const animation = useRef<any>(null);
  useEffect(() => {
    animation.current?.play();
  }, []);

  return (
    <View style={styles.container}>
      <LottieView
        autoPlay
        loop={false}
        ref={animation}
        resizeMode="cover"
        source={require('../assets/lotties/initiativeCompany.json')}
        style={styles.lottie}
        onAnimationFinish={() => {
          console.log('animation finished');
          onLoading();
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 0,
    alignItems: 'center',
  },
  lottie: {
    width: '100%',
    height: '100%',
  },
});
