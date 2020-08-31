import React, { Component } from 'react';
import { Image, Dimensions, StyleSheet, FlatList, View, SafeAreaView,Modal} from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, Toast, Title } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class CardImageExample extends Component {
    _isMounted= false;
    constructor(){
        super()

        this.state = {
            images:[{
                id: 1,
                uri: "https://images.pexels.com/photos/1721934/pexels-photo-1721934.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            },
            {
                id: 2,
                uri: "https://images.pexels.com/photos/2451673/pexels-photo-2451673.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",     
            },
            {
                id: 3,
                uri: "https://i.pinimg.com/originals/b6/53/aa/b653aa38ba5a0df2f195e5e91fa56dd0.jpg",        
            },
            {
                id: 4,
                uri: "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
            }
            ],
            imageIndex:0,
            modalVisible: false,
            ingredientsStatus:true,
            weightStatus:true,
            givedonutStatus: false,
            showToast: false,
            elementStatusText:'show',
            donuts_count:12,
            
        }
      
       
    }
    componentDidMount(){
        this._isMounted = true
    }


    hideTextElements = () =>{
        this.setState({
          ingredientsStatus: !this.state.ingredientsStatus,
            elementStatusText: 'close'
        }) 
    }

    hideWeightElements = () => {
      this.setState({
        weightStatus: !this.state.weightStatus
      })
    }

    addDonuts = () => {
      this.setState({
        donuts_count: this.state.donuts_count + 1,
        givedonutStatus: true,

      })
     
    }


       componentWillUnmount(){
           this._isMounted = false
       }
  render() {


    const {images, modalVisible, ingredientsStatus, weightStatus, donuts_count, givedonutStatus} = this.state
      const {navigation} = this.props

    var width = Dimensions.get('window').width; //full width
    var height = Dimensions.get('window').height; //full height
    return (
      <Container style = {styles.container}>
        <Content>
          <Card transparent>
            <CardItem  button style={styles.cardBg} onPress={()=>navigation.navigate('Kitchen')}>
              <Left>
    
                <Thumbnail source={{uri: 'https://images.pexels.com/photos/1721934/pexels-photo-1721934.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'}} />
                <Body>
                  <Text>Product Name</Text>
                  <Text note>Kitchen name</Text>
                </Body>
              </Left>
            </CardItem>
            <SafeAreaView>
            <FlatList 
                data = {images}
                horizontal={true}
                style={{height: 400,}}
                contentContainerStyle={{flexGrow: 1, justifyContent: 'center', marginBottom: 10, marginTop:10}}
                initialScrollIndex={0}
                initialNumToRender={2}
                renderItem={({item, index}) => 
                
                <CardItem style={styles.cardImg} cardBody>
                <Image source={{uri: item.uri}}
                 style={{height: height, width: width,resizeMode:'contain'}} />
                </CardItem>
                }
                keyExtractor={(item, index) => item.id.toString()}     
            />

            </SafeAreaView>
            <CardItem style={styles.cardBg}>
              <Left>

                <Text>₹ 1200/Kg </Text>

              </Left>
              <Right>
                
                  <Button transparent onPress={this.addDonuts} disabled={givedonutStatus}>
                   
                      <Text style={styles.hyperLink}>{donuts_count} Donuts</Text>
                  </Button>
                 
              </Right>
            </CardItem>
          </Card>
          
          {/* Ingredients*/}
          <Card>
            <CardItem header bordered>
                <Left><Text>Ingredients</Text></Left>
                <Right>
                  <TouchableOpacity onPress={this.hideTextElements} >
                    <Image source={require('../assets/icons/bar_icon.png')} />
                  </TouchableOpacity>
                </Right>
            </CardItem>
            {ingredientsStatus && (
            <CardItem bordered>
              <Body>
                
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Text>
               
              </Body>
            </CardItem>
             )}
          </Card>

          {/* Weight Information*/}
          <Card>
            <CardItem header bordered>
                <Left><Text>Weight Available</Text></Left>
                <Right>
                  <TouchableOpacity source={{uri: './src/assets/icons/donut.png'}}   onPress={this.hideWeightElements} >
                    <Image source={require('../assets/icons/bar_icon.png')} />
                  </TouchableOpacity>
                </Right>
            </CardItem>
            {weightStatus && (
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
            )}
          </Card>

          {/* Inquire */}
         
            <TouchableOpacity header button style={{alignItems: "center", borderRadius:20,backgroundColor:'#1b1b1b', margin: 10,borderWidth:2, borderColor:'#FC6E20'}}>
              <Text style={{textAlign:'center', padding: 10, color:'white',}}>Inquire</Text>
            </TouchableOpacity>
          

          
        </Content>

    
        
      </Container>
    );
  }
}


const styles = StyleSheet.create({
  container:{
    backgroundColor: "#323232", paddingRight: 15, paddingLeft: 15,  flex:1
    },
  hyperLink:{
    color: '#FC6E20'
    },
  weightKey:{
    paddingBottom:5
    },
    weightValue:{
      padding:5
    }
   
})