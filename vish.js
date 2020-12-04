import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
const data = [
  {
    title: 'Create a New Group',
    heading: 'Welcome John',
    dis: ' hey hello...! have a happy day and make a day happy...!',
    imgurl: 'https://reactnative.dev/img/tiny_logo.png',
    id: 1,
  },
  {
    title: 'Post New Loops',
    heading: 'Welcome John',
    dis: 'hey hello...! have a happy day and make a day happy...!',
    imgurl: 'https://reactnative.dev/img/tiny_logo.png',
    id: 2,
  },
  {
    title: 'Share Responses',
    heading: 'Welcome John',
    dis: ' hey hello...! have a happy day and make a day happy...!',
    imgurl: 'https://reactnative.dev/img/tiny_logo.png',
    id: 3,
  },
];

const FirstPage = () => {
  const [userName, setUserName] = useState(data);

  const FlatListHeader = () => {
    return (
      <View>
        <View
          style={{
            width: '100%',
            backgroundColor: 'gray',
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <Text
            style={{
              fontSize: 40,
              fontWeight: '800',
              alignSelf: 'center',
              fontSize: 30,
            }}>
            Welcome John
          </Text>
          <Text
            style={{
              top: 4,
              borderRadius: 20,
              height: 30,
              width: 30,
              backgroundColor: 'pink',
            }}></Text>
        </View>
      </View>
    );
  };
  const itemSeparatorComponent = () => {
    return (
      <View
        style={{
          height: '100%',
          width: 0.5,
          backgroundColor: 'white',
        }}
      />
    );
  };
  const renderItem = ({item}) => (
    <View>
      <View style={styles.item}>
        <View style={{alignSelf: 'center'}}>
          <Image
            style={{
              height: 120,
              width: 100,
            //   margin: 50,
              
              borderRadius: 30,
            }}
            source={{
              uri: item.imgurl,
            }}
          />
        </View>
    <View style={{Bottom:20}}>
        <View
          style={{
            backgroundColor: item.id === 2 ? 'grey' : '#D1EDF2',
            //margin: 50,
            marginVertical:20,
            //height: 290,
            width: 340,
            alignSelf: 'center',
            borderRadius: 15,
            padding: 20,
            
          }}>
          <Text
            style={{
              fontSize: 25,
              alignSelf: 'center',
              margin: 25,
              fontWeight: 'bold',
              top: 25,
            }}>
            {' '}
            {item.title}{' '}
          </Text>
          <Text style={{fontSize: 20, margin: 20, padding: 20, bottom: 25}}>
            {item.dis}
          </Text>
        </View></View>

        {item.id === 1 && (
          <View
            style={{
              flexDirection: 'row',
              alignSelf: 'center',
            }}>
            <View
              style={{
                height: 10,
                width: 10,
                backgroundColor: 'black',
                borderRadius: 10,
                margin: 2,
              }}></View>
            <View
              style={{
                height: 10,
                width: 10,
                backgroundColor: 'gray',
                borderRadius: 10,
                margin: 2,
              }}></View>
            <View
              style={{
                height: 10,
                width: 10,
                backgroundColor: 'gray',
                borderRadius: 10,
                margin: 2,
              }}></View>
          </View>
        )}
        {item.id === 2 && (
          <View
            style={{
              flexDirection: 'row',
              alignSelf: 'center',
            }}>
            <View
              style={{
                height: 10,
                width: 10,
                backgroundColor: 'gray',
                borderRadius: 10,
                margin: 2,
              }}></View>
            <View
              style={{
                height: 10,
                width: 10,
                backgroundColor: 'black',
                borderRadius: 10,
                margin: 2,
              }}></View>
            <View
              style={{
                height: 10,
                width: 10,
                backgroundColor: 'gray',
                borderRadius: 10,
                margin: 2,
              }}></View>
          </View>
        )}
        {item.id === 3 && (
          <View
            style={{
              flexDirection: 'row',
              alignSelf: 'center',
            }}>
            <View
              style={{
                height: 10,
                width: 10,
                backgroundColor: 'gray',
                borderRadius: 10,
                margin: 2,
              }}></View>
            <View
              style={{
                height: 10,
                width: 10,
                backgroundColor: 'gray',
                borderRadius: 10,
                margin: 2,
              }}></View>
            <View
              style={{
                height: 10,
                width: 10,
                backgroundColor: 'black',
                borderRadius: 10,
                margin: 2,
              }}></View>
          </View>
        )}

        {item.id === 1 && (
          <View style={{flexDirection: 'row'}}>
            <View style={{alignSelf: 'center', margin: 30, top: 25}}>
              <Text style={{fontWeight: 'bold', fontSize: 18}}>Skip</Text>
            </View>
            <View
              style={{
                backgroundColor: 'darkorange',
                height: 50,
                width: 50,
                borderRadius: 25,
                marginLeft: 250,
                top: 45,
              }}>
              <Text
                style={{
                  fontSize: 25,
                  alignSelf: 'center',
                  fontWeight: 'bold',
                  top: 5,
                }}>
                ->
              </Text>
            </View>
          </View>
        )}
        {item.id === 2 && (
          <View style={{flexDirection: 'row'}}>
            <View style={{alignSelf: 'center', margin: 30, top: 25}}>
              <Text style={{fontWeight: 'bold', fontSize: 18}}>Skip</Text>
            </View>
            <View
              style={{
                backgroundColor: 'darkorange',
                height: 50,
                width: 50,
                borderRadius: 25,
                marginLeft: 250,
                top: 45,
              }}>
              <Text
                style={{
                  fontSize: 25,
                  alignSelf: 'center',
                  fontWeight: 'bold',
                  top: 5,
                }}>
                ->
              </Text>
            </View>
          </View>
        )}
        {item.id === 3 && (
          <View
            style={{
              backgroundColor: 'darkorange',
              height: 50,
              width: 380,
              borderRadius: 25,
              marginLeft: 20,
              top: 45,
            }}>
            <Text
              style={{
                fontSize: 25,
                alignSelf: 'center',
                fontWeight: 'bold',
                top: 5,
              }}>
              + New Group
            </Text>
          </View>
        )}
      </View>
    </View>
  );
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <View
          style={{
            backgroundColor: 'gray',
            height: 70,
            width: 440,
            right: 20,
            bottom: 20,
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 25,
              color: 'white',
              alignSelf: 'center',
              marginTop: 35,
            }}>
            Welcome John
          </Text>
        </View>
        <FlatList
          data={data}
          renderItem={renderItem}
          horizontal={true}
          //ListHeaderComponent={FlatListHeader}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={itemSeparatorComponent}
        />

        <View style={{flexDirection: 'row'}}>
          <View style={{alignSelf: 'center', margin: 30}}>
            <Text style={{fontWeight: 'bold', fontSize: 18}}>Skip</Text>
          </View>
          <View
            style={{
              backgroundColor: 'darkorange',
              height: 50,
              width: 50,
              borderRadius: 25,
              marginLeft: 250,
              top: 15,
            }}>
            <Text
              style={{
                fontSize: 25,
                alignSelf: 'center',
                fontWeight: 'bold',
                top: 5,
              }}>
              ->
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default FirstPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
      
    width: '95%',
    height: '140%',
    backgroundColor: 'yellow',
  },
});
