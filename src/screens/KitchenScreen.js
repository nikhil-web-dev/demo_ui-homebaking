import React, { Component } from 'react'
import {Image, View, Modal, StyleSheet, TouchableHighlight, Dimensions, SafeAreaView, VirtualizedList} from 'react-native'
import { Container, Header, Content, Badge, Text, Icon, Card, CardItem, Thumbnail, Button, Left, Body, Right, Item, Input,Accordion  } from 'native-base'
import { FlatList, TouchableOpacity, ScrollView } from 'react-native-gesture-handler'


export default class Kitchen extends Component {
    _isMounted = false;
    constructor(props){
        super(props)

        this.state = {
            modalVisible: false, 
            modalImage: '',
            timer:5,
            
        }
    }

    componentDidMount(){
        this._isMounted = true;
    }



    componentWillUnmount(){
        this._isMounted = false;
    }
  render() {
    const stories = [
        {
            id: 1,
            uri: 'https://images.pexels.com/photos/35666/cooking-baby-only-kitchen.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
        },
        {
            id: 2,
            uri: 'https://images.pexels.com/photos/35666/cooking-baby-only-kitchen.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
        },
        {
            id: 3,
            uri: 'https://images.pexels.com/photos/35666/cooking-baby-only-kitchen.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
        },
        {
            id: 4,
            uri: 'https://images.pexels.com/photos/35666/cooking-baby-only-kitchen.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
        },
        {
            id: 5,
            uri: 'https://images.pexels.com/photos/35666/cooking-baby-only-kitchen.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
        }
    ];



    const dataArray = [
        { title: "About", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
      ];

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
        {
            id: 5,
            image: "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
            vendor:'vendor name',
            name: 'Product Name',
            price: '600',
            weight: '0.5Kg',
            description: 'lorem ipsum'
        },
        
        {
            id: 5,
            image: "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
            vendor:'vendor name',
            name: 'Product Name',
            price: '600',
            weight: '0.5Kg',
            description: 'lorem ipsum'
        },

        {
            id: 5,
            image: "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
            vendor:'vendor name',
            name: 'Product Name',
            price: '600',
            weight: '0.5Kg',
            description: 'lorem ipsum'
        },

        {
            id: 5,
            image: "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
            vendor:'vendor name',
            name: 'Product Name',
            price: '600',
            weight: '0.5Kg',
            description: 'lorem ipsum'
        },

        {
            id: 5,
            image: "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
            vendor:'vendor name',
            name: 'Product Name',
            price: '600',
            weight: '0.5Kg',
            description: 'lorem ipsum'
        },
        {
            id: 5,
            image: "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
            vendor:'vendor name',
            name: 'Product Name',
            price: '600',
            weight: '0.5Kg',
            description: 'lorem ipsum'
        },

        {
            id: 5,
            image: "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
            vendor:'vendor name',
            name: 'Product Name',
            price: '600',
            weight: '0.5Kg',
            description: 'lorem ipsum'
        },


        

        

    ];
    
  
    const {modalVisible} = this.state;
    const {navigation} = this.props;
    var size = width / 3
    var width = Dimensions.get('window').width; //full width
    var height = Dimensions.get('window').height; //full height
    const uri = "https://images.pexels.com/photos/1030865/pexels-photo-1030865.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    return (
     
    <SafeAreaView style={{ backgroundColor: "#323232", paddingRight: 15, paddingLeft: 15,  flex:1}}>
    
         
                <Card>
                    <CardItem>
                       
                        <Left style={{ flexDirection:'row'}}>

                         <Thumbnail source={{uri: uri}} large/>
                         <View>
                            <Text style={{fontSize:20}}>Kitchen Name</Text>
                            <Text note>Tagline</Text>
                         </View>
                        </Left>
                       
                    </CardItem>
                    <CardItem>
                        <Left>
                       
                            <Button light>
                                <Text>Folow</Text>
                            </Button>
                            </Left>
                            <Body>
                            <Button light>
                                <Text>Share</Text>
                            </Button>
                            </Body>
                            <Right>
                            <Button light>
                                <Text>Contact</Text>
                            </Button>
                            </Right>
                    </CardItem>
                </Card>

                <Card style={{padding: 10}}>
                       {/* Stories */} 
            <FlatList 
                data = {stories}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                
                renderItem={({item}) => 
                    <TouchableOpacity 
                        style={{marginRight: 12, borderColor:'#FC6E20', borderWidth:2, borderRadius: 90, padding: 2}}
                        onPress={() => navigation.navigate('Vendor')}>
                            <Thumbnail source={{uri: item.uri}} />
                    </TouchableOpacity>
                }
            keyExtractor={(item, index) => item.id.toString()}     
            />

       
                </Card>
        <Card padder>
          <Accordion dataArray={dataArray} expanded={1}/>
        </Card>
      
        <FlatList 
        data = {productItems}
        contentContainerStyle= {{marginTop:5}}
        scrollEnabled={true}
        numColumns={3}
        renderItem={({item}) => 
            <TouchableOpacity style={{margin:2}}>
                <Image style={{ height: width/3.3, width: width/3.3,}} source={{uri: item.image}} resizeMode="cover" />
            </TouchableOpacity>
                      
                      
                     
        }
        keyExtractor={(item, index) => item.id.toString()}     
     />

    </SafeAreaView>
    
   
     
     
    );
  }
}


  