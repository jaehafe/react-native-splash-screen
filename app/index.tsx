import { StyleSheet } from 'react-native';
import React, { useState } from 'react';
import Splash from '@/components/Splash';
import Home from '@/components/Home';

export default function IndexPage() {
  const [isLoading, setIsLoading] = useState(true);

  const onLoading = () => {
    setIsLoading(false);
  };

  return isLoading ? <Splash onLoading={onLoading} /> : <Home />;
}

const styles = StyleSheet.create({});
