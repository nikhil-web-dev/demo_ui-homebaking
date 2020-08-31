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
            quickViewModalVisible:false,
            modalImage: '',
            timer:5,
            
        }
    }

    componentDidMount(){
        this._isMounted = true;
    }

    _setStories = (uri)  =>{
       
        if(this._isMounted){
           
            this.setState({modalVisible: !this.state.modalVisible, modalImage: uri,})
            this.setTimer = setInterval(()=>{this.setState( {timer: this.state.timer - 1} )},1000)
            setTimeout(() => {this.setState({modalVisible: !this.state.modalVisible}),  this._resetTime()}, 4000)
           
        }
    }

    _resetTime = () => {
        clearInterval(this.setTimer)
        this.setState({ timer: 5 })
    }

    componentWillUnmount(){
        this._isMounted = false;
    }
  render() {
    const categoryData = [
        {
           id: 1,
           category: 'All Products' 
        },
        {
            id: 2,
            category: 'Feed' 
         },
        {
            id: 3,
            category: 'Category 1' 
         },
         {
            id: 4,
            category: 'Category 2' 
         },
         {
            id: 5,
            category: 'Category 3' 
         },
         
    ];
    const stories = [
        {
            id: 1,
            uri: 'https://www.handletheheat.com/wp-content/uploads/2015/03/Best-Birthday-Cake-with-milk-chocolate-buttercream-SQUARE-550x550.jpg'
        },
        {
            id: 2,
            uri: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
        },
        {
            id: 3,
            uri: 'https://images.pexels.com/photos/140831/pexels-photo-140831.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
        },
        {
            id: 4,
            uri: 'https://images.pexels.com/photos/1721934/pexels-photo-1721934.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
        },
        {
            id: 5,
            uri: 'https://images.pexels.com/photos/2451673/pexels-photo-2451673.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
        }
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
        
    ];

    const {modalVisible, quickViewModalVisible} = this.state;
    const {navigation} = this.props;
    var width = Dimensions.get('window').width; //full width
    var height = Dimensions.get('window').height; //full height
    return (
     
      <SafeAreaView style={styles.container}>

            <FlatList
            data={categoryData}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => 
            <Badge style={{ backgroundColor: "#FC6E20", marginRight: 5, marginTop:20, marginBottom:20 }}>
                <Text style={{fontSize: 18, padding: 5}}>{item.category}</Text>
            </Badge>
            }
            keyExtractor={(item, index) => item.id.toString()}
            />
            
       
            {/* Search */} 
            <View searchBar rounded>
                <Item>
                    <Input placeholder="Search" style={{color:'white'}}/>
                </Item>
            </View>
            <ScrollView alwaysBounceHorizontal = {true}>
           
            
            
             {/* Image Gallery 
            <Card transparent>
                <CardItem  style={{backgroundColor: '#323232', padding:0, margin:0}}>
                <Image source={{uri: 'https://images.pexels.com/photos/2144200/pexels-photo-2144200.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'}} 
                style={{height: 200, width: width, flex: 1 }}
                />
                </CardItem>
            </Card>

            
            {/* Stories Model */} 
        <View style={{marginTop: 20}}>
            <View style={styles.modalContainer}>
                <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                    <Text style={{color:'white'}}>{this.state.timer}</Text>
                            <Image source={{uri: this.state.modalImage}} style={{height:height, width: width, flex: 1, resizeMode:'contain'}} />
            
                        </View>
                    </View>
                </Modal>
            </View>

              {/* Stories */} 
            <FlatList 
                data = {stories}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                
                renderItem={({item}) => 
                    <TouchableOpacity 
                        style={{marginRight: 10, borderColor:'#FC6E20', borderWidth:2, borderRadius: 90, padding: 2}}
                        onPress={(text) => this._setStories(item.uri)}>
                            <Thumbnail source={{uri: item.uri}}  large/>
                    </TouchableOpacity>
                }
            keyExtractor={(item, index) => item.id.toString()}     
            />

        </View>

           {/* Top Bakers */}  
    <View style={{marginTop:20, marginBottom: 20}}>
        <Text style={{fontSize: 20, color:'white'}}>Top Bakers</Text>
    </View>
        
    <FlatList 
        data = {productItems}
        horizontal={true}
        
        numColumns={1}
        renderItem={({item}) => 
            <Card >
                <CardItem button onPress={() => navigation.navigate('Vendor')}>
                    <Left>
                        <Thumbnail source={{uri: 'https://images.pexels.com/photos/35666/cooking-baby-only-kitchen.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'}} large/>
                        <Body>
                            <Text>{item.vendor}</Text>
                            <Text note>Kitchen name</Text>
                        </Body>
                    </Left>
                </CardItem>
            </Card>
        }
        keyExtractor={(item, index) => item.id.toString()}     
     />
        
            {/* Top Kitchen */}  
    <View style={{marginTop:20, marginBottom: 2}}>
        <Text style={{fontSize: 20, color:'white'}}>Top Kitchen</Text>
    </View>
        
    <FlatList 
        data = {productItems}
        horizontal={true}
        
        numColumns={1}
        renderItem={({item}) => 
            <Card >
                <CardItem button onPress={() => navigation.navigate('Kitchen')}>
                    <Left>
                        <Thumbnail source={{uri: 'https://images.pexels.com/photos/1030865/pexels-photo-1030865.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'}} large/>
                        <Body>
                            <Text>Kitchen Name</Text>
                            <Text note>Baker name</Text>
                        </Body>
                    </Left>
                </CardItem>
            </Card>
        }
        keyExtractor={(item, index) => item.id.toString()}     
     />
        


        {/* Top Sellers */}  
    <View style={{marginTop:20, marginBottom: 2}} transparent>
        <Text style={{fontSize: 20, color:'white'}}>Top Sellers</Text>    
    </View>
        
    {productItems.map((item) => {
        return(
            <React.Fragment key = {item.id} >
            <Card>
                <CardItem button onPress = {() => navigation.navigate('Product')}>
                    <Left>
                        <Thumbnail source={{uri: item.image}} large/>
                        <Body>
                            <Text style={{fontSize: 20, paddingLeft: 20}}>{item.name}</Text>
                            <Text note style={{paddingLeft: 20}}>{item.vendor}</Text>
                        </Body>
                    </Left>
                    
                </CardItem>
                

                <CardItem footer bordered>
              <Left>
              <Button transparent onPress={()=>this.setState({quickViewModalVisible: true})}>
                  <Text>Peep</Text>
                </Button>
              </Left>
              <Body>
              <Button transparent >
                  <Text>Share</Text>
                </Button>
              </Body>
              <Right>
              <Button transparent>
                <Text>Inquire</Text>
                </Button>
              </Right>
            </CardItem>
            </Card>
            </React.Fragment>

        )
    })}
            {/* Product Quick View*/}
           
                <Modal
                animationType="slide"

                transparent={true}
                visible={quickViewModalVisible}
                onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                }}
                >
                    <View style={styles.QuickViewDetails}>
                        <View style={styles.QuickView}>
                            <Container style={{width: width}}>

                                <Content>
                                <Card>
                                    <CardItem >
                                        <Left><Text>Product Name</Text></Left>
                                        <Right><Text note>Vendor Name</Text></Right>
                                    </CardItem>
                                </Card>
                                <Card>
                                    <CardItem header bordered>
                                        <Left><Text>Ingredients</Text></Left>
                                    </CardItem>
                                   
                                    <CardItem bordered>
                                    <Body>
                                        <Text>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                        </Text>
                                    </Body>
                                    </CardItem>
                                   
                                </Card>

                                <Card>
                                    <CardItem header bordered>
                                        <Left><Text>Weight Available</Text></Left>
                                        
                                    </CardItem>
                                   
                                    <CardItem bordered>
                                    <Left>
                                        <Body style={styles.weightKey}>
                                        <Text style={styles.weightValue}>0.5Kg</Text>
                                        <Text style={styles.weightValue}>1Kg</Text>
                                        </Body>
                                    </Left>
                                    <Right>
                                        <Body style={styles.weightKey}> 
                                        <Text style={styles.weightValue}>₹ 600</Text>
                                        <Text style={styles.weightValue}>₹ 1200</Text>
                                        </Body>
                                    </Right>
                                    </CardItem>
                                   
                                </Card>
                                </Content>
                                
                            </Container>
                            <TouchableHighlight
                                style={{ ...styles.openButton, }}
                                onPress={() => this.setState({quickViewModalVisible: false})}>
                                <Text style={{color:'black'}}>Close</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </Modal>
            

</ScrollView>
        
    </SafeAreaView>
    
   
     
     
    );
  }
}


const styles = StyleSheet.create({
    container:{
        backgroundColor: "#323232", paddingRight: 15, paddingLeft: 15,  flex:1
    },
    centeredView: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "#323232",
        alignItems: 'center',
        justifyContent: 'center',
    },
    QuickViewDetails:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
       
        backgroundColor: "#323232",
    },
    QuickView:{
        backgroundColor: '#323232',
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    modalView: {
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5
    },
  
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "right",
      marginTop:10,
    },
    modalText: {
      marginBottom: 15,
      textAlign: "right"
    },
    title:{
        fontWeight: "600",
        fontSize: 20
    }
  });
  