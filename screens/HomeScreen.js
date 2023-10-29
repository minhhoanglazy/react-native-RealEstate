import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const HomeScreen = () => {
  const categoriesData = [
    { id: '1', name: 'Houses', image: require('../assets/category1.jpg') },
    { id: '2', name: 'Apartments', image: require('../assets/category2.jpg') },
    { id: '3', name: 'Condos', image: require('../assets/category3.jpg') },
    { id: '4', name: 'Land', image: require('../assets/category4.jpg') },
    { id: '5', name: 'Building', image: require('../assets/category5.jpg') },
    { id: '6', name: 'Town Houses', image: require('../assets/category6.jpg') },
    // Add more categories as needed
  ];

  const houseData = [
    { id: '1', name: 'One Mission Bay', location: 'San Francisco, CA', image: require('../assets/house1.jpg') },
    { id: '2', name: '1410 Steiner St', location: 'San Francisco, CA', image: require('../assets/house2.jpg') },
    { id: '3', name: '246 Sussex St', location: 'San Francisco, CA', image: require('../assets/house3.jpg') },
    { id: '4', name: '1206 Market St', location: 'San Francisco, CA', image: require('../assets/house4.jpg') },
    // Add more house items as needed
  ];

  const windowWidth = Dimensions.get('window').width;
  const numColumns = 2;
  const categoryItemWidth = (windowWidth - 48) / numColumns; // Adjust margin and padding

  return (
    <ScrollView style={styles.container}>
      {/* Header Container */}
      <View style={styles.headerContainer}>
        {/* User Icon */}
        <Image
          source={require('../assets/user-icon.png')}
          style={styles.icon}
        />
        <Text style={styles.title}>Home</Text>
        {/* Map and Plus Icons */}
        <View style={styles.iconContainer}>
          <Image
            source={require('../assets/map-icon.png')}
            style={[styles.icon, styles.iconMargin]}
          />
          <Image
            source={require('../assets/plus-icon.png')}
            style={styles.icon}
          />
        </View>
      </View>

      {/* Categories Section */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Categories</Text>
        <FlatList
          horizontal
          data={categoriesData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={[styles.categoryItem, { width: categoryItemWidth }]}>
              <Image source={item.image} style={styles.categoryImage} />
              <Text style={styles.categoryText}>{item.name}</Text>
            </View>
          )}
        />
      </View>

      {/* Houses Section */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Houses</Text>
        <FlatList
          data={houseData}
          keyExtractor={(item) => item.id}
          numColumns={numColumns} // Use numColumns to create 2 columns
          renderItem={({ item }) => (
            <View style={styles.houseItem}>
              <Image source={item.image} style={styles.houseImage} />
              <Text style={styles.boldText}>{item.name}</Text>
              <Text>{item.location}</Text>
            </View>
          )}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
  icon: {
    width: 32, 
    height: 32,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  iconContainer: {
    flexDirection: 'row',
  },
  iconMargin: {
    marginRight: 10,
  },
  sectionContainer: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  categoryItem: {
    marginRight: 16,
    marginBottom: 16, // Add margin at the bottom
    borderRadius: 8,
    borderColor: 'lightgray',
    borderWidth: 1,
    overflow: 'hidden',
    alignItems: 'center',
  },
  categoryImage: {
    width: '100%',
    aspectRatio: 1, // Maintain square aspect ratio
  },
  categoryText: {
    fontWeight: 'bold',
    fontSize: 18,
    padding: 8,
  },
  houseItem: {
    flex: 1,
    margin: 8,
    borderRadius: 8,
    overflow: 'hidden',
  },
  houseImage: {
    width: '100%',
    aspectRatio: 4 / 3, // Maintain 4:3 aspect ratio
  },
  boldText: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 4,
  },
});

export default HomeScreen;
