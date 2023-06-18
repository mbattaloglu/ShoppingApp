import {FlatList, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import ProductCard from '../components/ProductCard';
import ProductOperations from '../components/ProductOperations';

const Products = ({navigation}) => {
  const [products, setProducts] = useState([]);
  const [defaultProducts, setDefaultProducts] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    getData = async () => {
      await fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(data => {
          setProducts(data.products);
          setDefaultProducts(data.products);
        });
    };
    getData();
  }, []);

  const sortByName = () => {
    const sortedProducts = [...products].sort((a, b) =>
      a.title.localeCompare(b.title),
    );
    setProducts(sortedProducts);
  };

  const sortByPrice = () => {
    const sortedProducts = [...products].sort((a, b) => a.price - b.price);
    setProducts(sortedProducts);
  };

  const sortByRating = () => {
    const sortedProducts = [...products].sort((a, b) => a.rating - b.rating)
    setProducts(sortedProducts);
  };

  const resetSortedProducts = () => {
    setProducts(defaultProducts);
  };


  const sortOnClick = sortType => {
    switch (sortType) {
      case 'name':
        sortByName();
        break;
      case 'price':
        sortByPrice();
        break;
      case 'rating':
        sortByRating();
        break;
      case 'reset':
        resetSortedProducts();
        break;
      default:
        break;
    }
  };

  const renderItem = ({item}) => (
    <ProductCard
      item={item}
      onClickHandler={() => navigation.navigate('Item Detail', {item: item})}
    />
  );

  return (
    <View>
      <ProductOperations
        searchText={searchText}
        setSearchText={setSearchText}
        sortOnClick={sortOnClick}
      />
      <FlatList
        data={products}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

export default Products;
