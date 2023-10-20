// src/withPopAnimation.js
import React, { useEffect, useRef } from 'react';
import { Animated } from 'react-native';

const PopupComponent = ({children}) => {
  
    const popValue = useRef(new Animated.Value(1)).current;

    useEffect(() => {
      Animated.sequence([
        
        Animated.timing(popValue, { toValue: 0, duration: 100, useNativeDriver: true }),
        Animated.timing(popValue, { toValue: 1.1, duration: 100, useNativeDriver: true }),
        Animated.timing(popValue, { toValue: 1, duration: 100, useNativeDriver: true }),
      ]).start();
    }, []);

    return (
      <Animated.View  style={{ transform: [{ scale: popValue }] }}>
        {children}
      </Animated.View>
    );
  };


export default PopupComponent;
