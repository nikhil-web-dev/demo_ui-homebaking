import React, { Component } from 'react'
import {Image, View, Modal, StyleSheet, TouchableHighlight, Dimensions, SafeAreaView, VirtualizedList} from 'react-native'
import { Container, Header, Content, Badge, Text, Icon, Card, CardItem, Thumbnail, Button, Left, Body, Right, Item, Input,  } from 'native-base'
import { FlatList, TouchableOpacity, ScrollView } from 'react-native-gesture-handler'


export default class ButtonThemeExample extends Component {
    _isMounted = false;
    constructor(props){
        super(props)

        this.state = {
            modalVisible: false, 
            modalImage: '',
            timer:5,
            about_vendor:false,
            btn_status:true
            
        }
    }

    componentDidMount(){
        this._isMounted = true;
    }



    componentWillUnmount(){
        this._isMounted = false;
    }
  render() {

    const productItems = [
      {
          id: 1,
          image: "https://i.pinimg.com/originals/b6/53/aa/b653aa38ba5a0df2f195e5e91fa56dd0.jpg",
          vendor:'vendor name',
          name: 'Product Name',
          price: '600',
          weight: '0.5Kg',
          description: 'lorem ipsum'
      },
      {
          id: 2,
          image: "https://images.pexels.com/photos/2451673/pexels-photo-2451673.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          vendor:'vendor name',
          name: 'Product Name',
          price: '600',
          weight: '0.5Kg',
          description: 'lorem ipsum'
      },
      {
          id: 3,
          image: "https://images.pexels.com/photos/1721934/pexels-photo-1721934.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          vendor:'vendor name',
          name: 'Product Name',
          price: '600',
          weight: '0.5Kg',
          description: 'lorem ipsum'
      },
      {
          id: 4,
          image: "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
          vendor:'vendor name',
          name: 'Product Name',
          price: '600',
          weight: '0.5Kg',
          description: 'lorem ipsum'
      },
      
  ];
  
    const {modalVisible, about_vendor, btn_status} = this.state;
    const {navigation} = this.props;
    var width = Dimensions.get('window').width; //full width
    var height = Dimensions.get('window').height; //full height
    return (
     
      <SafeAreaView  style={styles.container}>
       
        <Content  style={{marginTop: 10}}>
          <Card>
          
            <CardItem cardBody>
              <Image source={{uri: 'https://images.pexels.com/photos/35666/cooking-baby-only-kitchen.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>

            <CardItem>
            <Body>
              <Text style={{fontSize: 17, padding:2}}>Vendor Name</Text>
              <Text style={{fontSize: 14, padding:2}} note>kitchen Name</Text>
            </Body>
            </CardItem>
          
          </Card>


       
        <FlatList 
        data = {productItems}
        horizontal={true}
        style={{marginTop:10, marginBottom: 2}}
        showsHorizontalScrollIndicator={false}
        numColumns={1}
        renderItem={({item}) => 
            <Card >
                <CardItem button onPress={() => navigation.navigate('Product')}>
                    <Left>
                        <Thumbnail source={{uri: item.image}} large/>
                        <Body>
                            <Text>{item.name}</Text>
                            
                        </Body>
                    </Left>
                </CardItem>
            </Card>
        }
        keyExtractor={(item, index) => item.id.toString()}     
     />

    <Card  style={{marginTop:10, marginBottom: 2}}>
      <CardItem>
        <Body>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          </Text>
            
            {btn_status &&(
              <TouchableOpacity onPress = {() => this.setState({about_vendor: true, btn_status:false})}>
                <Text style={{color:'blue', padding:4}}>ReadMore</Text>
              </TouchableOpacity>
            )}
            
            {about_vendor && (
              <Text>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Text>
            )}
                
        </Body>
      </CardItem>
    </Card>
              <View style={{margin: 10}}>
              <TouchableOpacity header button style={{alignItems: "center",borderRadius:20, backgroundColor:'#1b1b1b', margin: 10,borderWidth:2, borderColor:'#FC6E20'}}>
              <Text style={{textAlign:'center', padding: 10, color:'white',}}>Inquire</Text>
            </TouchableOpacity>
      </View>
     </Content>
   
      </SafeAreaView>

    );
  }
}


const styles = StyleSheet.create({
  container:{
    backgroundColor: "#323232",paddingRight: 15, paddingLeft: 15,  flex:1,
},
  });
  