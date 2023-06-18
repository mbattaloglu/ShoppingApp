import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react';

const ProductCard = props => {
  const createStars = rating => {
    let stars = [];
    for (let i = 0; i < Math.floor(rating); i++) {
      stars.push(
        <Icon
          key={i}
          name="star"
          color="gold"
          size={25}
          style={styles.starPadding}
        />,
      );
    }
    if (Math.round(rating) === Math.ceil(rating)) {
      stars.push(
        <Icon
          key={stars.length}
          name="star-half-o"
          color="gold"
          size={25}
          style={styles.starPadding}
        />,
      );
    }
    while (stars.length !== 5) {
      stars.push(
        <Icon
          key={stars.length}
          name="star-o"
          color="gold"
          size={25}
          style={styles.starPadding}
        />,
      );
    }
    return stars;
  };

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={props.onClickHandler}>
      <Image style={styles.image} source={{uri: props.item.thumbnail}} />
      <View style={styles.textColumn}>
        <Text style={[styles.brandText, styles.textPadding]}>
          {props.item.brand}
        </Text>
        <Text style={[styles.titleText, styles.textPadding]}>
          {props.item.title}
        </Text>
      </View>
      <View style={styles.textColumn}>
        <View style={[styles.textColumn, styles.textPadding]}>
          {createStars(props.item.rating)}
        </View>
        <Text style={[styles.ratingText, styles.textPadding]}>
          {props.item.rating}
        </Text>
      </View>
      <Text style={[styles.priceText]}>
        ${props.item.price}
      </Text>
      <Icon
          name="cart-plus"
          color="tomato"
          size={25}
          style={styles.addCart}
        />
    </TouchableOpacity>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    margin: 10,
    backgroundColor: 'white',
  },
  image: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  textColumn: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textPadding: {
    padding: 5,
  },
  starPadding: {
    padding: 1,
  },
  brandText: {
    color: 'black',
    fontSize: 20,
  },
  titleText: {
    fontSize: 18,
  },
  priceText: {
    padding: 10,
    fontSize: 20,
    color: 'black',
  },
  addCart: {
    padding: 10,
    position: 'absolute',
    right: 10,
    bottom: 10,
  },
});
