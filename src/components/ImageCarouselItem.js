import {Image, StyleSheet, View, Dimensions} from 'react-native';
import React from 'react';

export const SLIDER_WIDTH = Dimensions.get('window').width;
export const ITEM_WIDTH = SLIDER_WIDTH;

const ImageCarouselItem = props => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: props.uri}} />
    </View>
  );
};

export default ImageCarouselItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 8,
    width: ITEM_WIDTH,
    paddingBottom: 40,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  image: {
    width: ITEM_WIDTH,
    height: 300,
  },
});
