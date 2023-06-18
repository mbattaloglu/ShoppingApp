import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react';

const ProductOperations = props => {
  const [sortVisible, setSortVisible] = React.useState(false);
  const [filterVisible, setFilterVisible] = React.useState(false);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search"
        value={props.searchText}
        onChangeText={props.setSearchText}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setFilterVisible(!filterVisible)}>
          <Icon name="filter" color="tomato" size={25} />
          <Text style={styles.textColor}>Filter</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setSortVisible(!sortVisible)}>
          <Icon name="reorder" color="tomato" size={25} />
          <Text style={styles.textColor}>Order By</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        {filterVisible ? (
          <View style={styles.dropdown}>
            <TouchableOpacity style={[styles.drpodownOption]}>
              <Text style={styles.textColor}>Name</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.drpodownOption]}>
              <Text style={styles.textColor}>Price</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.drpodownOption]}>
              <Text style={styles.textColor}>Rating</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.drpodownOption]}>
              <Text style={styles.textColor}>Default</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View></View>
        )}
        {sortVisible ? (
          <View style={styles.dropdown}>
            <TouchableOpacity
              style={[styles.drpodownOption]}
              onPress={() => props.sortOnClick('name')}>
              <Text style={styles.textColor}>Name</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.drpodownOption]}
              onPress={() => props.sortOnClick('price')}>
              <Text style={styles.textColor}>Price</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.drpodownOption]}
              onPress={() => props.sortOnClick('rating')}>
              <Text style={styles.textColor}>Rating</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.drpodownOption]}
              onPress={() => props.sortOnClick('reset')}>
              <Text style={styles.textColor}>Default</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View></View>
        )}
      </View>
    </View>
  );
};

export default ProductOperations;

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    height: 50,
    flex: 1,
    borderWidth: 0.2,
    borderColor: 'gray',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dropdown: {
    width: '50%',
    height: 180,
    alignItems: 'center',
    justifyContent: 'center',
  },
  drpodownOption: {
    width: '100%',
    height: 60,
    flex: 1,
    borderColor: 'gray',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textColor: {
    color: 'tomato',
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 0.2,
    borderColor: 'gray',
    backgroundColor: '#fff',
    paddingLeft: 10,
  },
});
