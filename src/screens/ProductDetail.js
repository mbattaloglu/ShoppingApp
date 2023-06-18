import {StyleSheet, Text, View, Image} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import React, {useRef, useState} from 'react';
import ImageCarouselItem, {SLIDER_WIDTH, ITEM_WIDTH} from '../components/ImageCarouselItem';

const ProductDetail = ({route}) => {
  const {item} = route.params;
  const carouselRef = useRef(null);
  const [index, setIndex] = useState(0);

  return (
    <View>
      <Carousel
        layout={'stack'}
        layoutCardOffset={9}
        ref={carouselRef}
        data={item.images}
        renderItem={({item}) => <ImageCarouselItem uri={item} />}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        inactiveSlideShift={0}
        onSnapToItem={(index) => setIndex(index)}
        useScrollView={true}
      />
      <Pagination
        dotsLength={item.images.length}
        activeDotIndex={index}
        carouselRef={carouselRef}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.92)',
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        tappableDots={true}
      />
      
      <Text>{item.brand}</Text>
    </View>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
  },
});
