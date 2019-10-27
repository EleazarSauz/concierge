import React from 'react';
import { StyleSheet, Dimensions, ScrollView, Text, FlatList, View, ImageBackground, Animated, Image, Platform } from 'react-native';
import { Block, Button as GaButton, theme, Text as GaText } from "galio-framework";

import { Button, Select, Icon, Input, Header, Switch, Card } from "../components/";
// concierge themed components
import { argonTheme, tabs } from "../constants/";
import articles from '../constants/articles';
import user from '../constants/user';
const { width } = Dimensions.get('screen');
import { connect } from 'react-redux';

const iPhoneX = () => Platform.OS === 'ios' && (height === 812 || width === 812 || height === 896 || width === 896);

class Home extends React.Component {
      constructor(props) {
      super(props)
      this.state = { count: 0, data: articles, user: user,  allValue: 0, item: 1, bancos: null }
      console.log(this.state.data.findIndex((d => d.id == 4)))
      this.getData = this.getData.bind(this);

    }

    getData = () => {
      console.log(this.props)
    }

    onPress =  (keyID, newValue) => {
    console.log(keyID, newValue)
    console.log(this.state.data[this.state.data.findIndex((d => d.id == keyID))].total)
    this.state.data[this.state.data.findIndex((d => d.id == keyID))].total = newValue
      this.setState({
        count: this.state.count + this.state.allValue,
      })
    }
  renderArticles = () => {
    
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.articles}>
          {/* <Block center style={styles.shadow}> 
          <Block row style={styles.options}>
            <Button shadowless style={[styles.tab, styles.divider]} onPress={() => console.log('Disponible')}>
              <Block row middle>
                <Icon name="diamond" family="ArgonExtra" style={{ paddingRight: 8 }} color={argonTheme.COLORS.ICON} />
                <Text size={16} style={styles.tabTitle}> Saldo</Text>
              </Block>
              <Block row middle>
                <Text size={16} style={styles.tabTitle2}>$ 1.00</Text>
              </Block>
            </Button>
            <Button shadowless style={[styles.tab, styles.divider]} onPress={() => console.log('Saldo')}>
              <Block row middle>
                <Icon name="diamond" family="ArgonExtra" style={{ paddingRight: 8 }} color={argonTheme.COLORS.ICON} />
                <Text size={16} style={styles.tabTitle}>Disponible</Text>
              </Block>
              <Block row middle>
                <Text size={16} style={styles.tabTitle2}>$ 1.00</Text>
              </Block>
            </Button>
            <Button shadowless style={styles.tab} onPress={() => console.log('Total')}>
              <Block row middle>
                <Icon size={16} name="bag-17" family="ArgonExtra" style={{ paddingRight: 8 }} color={argonTheme.COLORS.ICON}/>
                <Text size={16} style={styles.tabTitle}>Total</Text>
              </Block>
              <Block row middle>
                <Text size={16} style={styles.tabTitle2}>$ 1.00</Text>
              </Block>
            </Button>
          </Block>
          </Block> */}

          

          <Text style={{paddingTop: 40, textAlign: 'center'}}>
            Si deseas asignar parte de tu suledo hazlo aquí :)
            {this.state.count}
          </Text>

          {/* <Button
              color="success"
              textStyle={{ color: "white", fontSize: 12, fontWeight: "700" }}
              style={styles.button}
              onPress={this.onPress}
            >
              DISPONER
            </Button> */}
            <View style={[styles.itemTransaction, { backgroundColor: 'trasnparent', paddingBottom: 10, borderBottomWidth: 2, borderColor: '#ccc' }]}>
                <View style={styles.left}>
                    <View style={{ alignSelf: 'flex-start', }} >
                      <Input
                        onChangeText={(a) => this.setState({
                          count: parseFloat(a),
                        })}
                          type='decimal-pad'
                          style={{height: 40, width: 200}}
                          placeholder="Monto"
                          iconContent={
                            <Icon
                              size={11}
                              style={{ marginRight: 10 }}
                              color={argonTheme.COLORS.ICON}
                              name="bag-17"
                              family="ArgonExtra"
                            />
                          }
                        />
                    </View>

                    <View style={{ alignSelf: 'center', }}>
                      <Select
                        defaultIndex={this.state.item}
                        options={articles.map(data => data.title)}
                      />
                    </View>
                </View>

                <View style={styles.rigth}>
                  <Button center onPress={() => this.onPress(this.state.item, this.state.count)} color="success" style={styles.optionsButton}>
                    AGREGAR
                  </Button>
                </View>

            </View>

            <GaText
            h4
            style={{ marginBottom: 0, marginTop: 20 }}
            color={argonTheme.COLORS.DEFAULT} >
            Mis Bolsas
            </GaText>

             <FlatList
                renderItem={({item}) => (
                  <ImageBackground style={styles.image} imageStyle={{ borderRadius: 15 }} source={{uri: item.image}}>
                      <View style={styles.container}>
                        {item.ahorro ? <Icon size={20} style={{ marginLeft: 20, marginBottom: 5 }}
                              color={'#ccc'} name="padlock-unlocked" family="ArgonExtra" /> : 
                              <Icon size={20} style={{ marginLeft: 20, marginBottom: 5 }}
                              color={'transparent'} name="padlock-unlocked" family="ArgonExtra" /> }
                      
                        <Text style={styles.title}> {item.cta} </Text>
                        <View style={styles.progressBar}>
                          <Animated.View style={[StyleSheet.absoluteFill, {backgroundColor: "#5E72E4", width: `${item.value / item.total * 100}%`}]}/>
                        </View>
                        <Text style={styles.text}> ${ item.value !== 0 ? item.value: null} / $ { item.total } </Text>
                      </View>
                  </ImageBackground>               
              )}
                data={this.state.data}
                horizontal
                ItemSeparatorComponent={() => <View style={{width: 10}}/>}
                showsHorizontalScrollIndicator={false}
                />

                  <View style={{margin: 10}}></View>
          <Button center onPress={this.getData.bind(this)}>
            CREAR REGLA
          </Button>

          <GaText
            h4
            style={{ marginBottom: 0, marginTop: 20 }}
            color={argonTheme.COLORS.DEFAULT} >
            Transferir a:
            </GaText>


              <FlatList
                renderItem={({item}) => (
                  <ImageBackground style={styles.image} imageStyle={{ borderRadius: 15 }} source={{uri: item.image}}>
                      <View style={styles.container}>
                        {/* {item.ahorro ? <Icon size={20} style={{ marginLeft: 20, marginBottom: 5 }}
                              color={'#ccc'} name="padlock-unlocked" family="ArgonExtra" /> : 
                              <Icon size={20} style={{ marginLeft: 20, marginBottom: 5 }}
                              color={'transparent'} name="padlock-unlocked" family="ArgonExtra" /> } */}
                      
                        <Text style={styles.title}> {item.Nombre} </Text>
                        
                      </View>
                  </ImageBackground>               
              )}
                data={this.state.user}
                horizontal
                ItemSeparatorComponent={() => <View style={{width: 10}}/>}
                showsHorizontalScrollIndicator={false}
                />

        <Block flex>
       

          {/* <Card item={articles[0]} horizontal  /> */}
          <Block flex row>
            {/* <Card item={articles[1]} style={{ marginRight: theme.SIZES.BASE }} /> */}
            {/* <Card item={articles[2]} /> */}
          </Block>
          {/* <Card item={articles[3]} horizontal /> */}
          {/* <Card item={articles[4]} full /> */}
        </Block>
      </ScrollView>
    )
  }

  render() {
    
    return (
      <Block flex center style={styles.home}>
        {this.renderArticles()}
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  home: {
    width: width,    
  },
  articles: {
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: 0,
  },
  container: {
    backgroundColor: 'rgba(0,0,0,.5)',
    width: '100%',
    height: '100%',
    borderRadius: 15,
    justifyContent: 'center'
},
image:{
    width: 260, 
    height: 130,
    justifyContent: 'center', 
    marginTop: 20,
    
},
title:{
    color: '#fff',
    textAlign: "center",
    fontSize: 18,
    marginBottom: 2
},
text:{
    color: '#fff',
    textAlign: "center",
    fontSize: 16,
},
progressBar: {
  alignSelf: 'center',
  height: 20,
  width: '80%',
  backgroundColor: 'white',
  borderColor: '#000',
  borderWidth: 2,
  borderRadius: 5
},
optionsButton: {
  width: "auto",
  height: 34,
  paddingHorizontal: theme.SIZES.BASE,
  paddingVertical: 10
},
itemTransaction: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  borderColor: 'white',
  borderRadius: 10,
  borderWidth: 1,
  width: '100%',
  marginBottom: 4,
},
left: {
  alignItems: 'flex-start',
  marginLeft: 10,
  maxWidth: '55%',
  // flexDirection: 'row',
},
logo: {
  width: 50,
  height: 50,
  borderRadius: 25,
  marginRight: 4,
},
rigth: {
  alignItems: 'flex-end',
  marginRight: 10,
  alignSelf: 'center'
},
textDecription: {
  fontSize: 16,
  fontWeight: 'bold',
  marginTop: 10,
  marginBottom: 10,
  color: '#fff',
},
textType: {
  fontSize: 12,
  marginBottom: 10,
  color: '#fff',
},
textMonto: {
  fontSize: 20,
  fontWeight: 'bold',
  marginTop: 10,
  marginBottom: 10,
  color: 'white',
},
textMonto2: {
  fontSize: 18,
  fontWeight: 'bold',
  marginTop: 10,
  marginBottom: 10,
  color: 'white',
},
textAcount: {
  fontSize: 12,
  marginTop: 10,
  color: '#fff',
},
button: {
  padding: 12,
  position: 'relative',
},
navbar: {
  paddingVertical: 0,
  paddingBottom: theme.SIZES.BASE * 1.5,
  paddingTop: iPhoneX ? theme.SIZES.BASE * 4 : theme.SIZES.BASE,
  zIndex: 5,
},
shadow: {
  backgroundColor: theme.COLORS.WHITE,
  shadowColor: 'black',
  shadowOffset: { width: 0, height: 2 },
  shadowRadius: 6,
  shadowOpacity: 0.2,
  elevation: 3,
},
notify: {
  backgroundColor: argonTheme.COLORS.LABEL,
  borderRadius: 4,
  height: theme.SIZES.BASE / 2,
  width: theme.SIZES.BASE / 2,
  position: 'absolute',
  top: 9,
  right: 12,
},
header: {
  backgroundColor: theme.COLORS.WHITE,
},
divider: {
  borderRightWidth: 0.3,
  borderRightColor: theme.COLORS.ICON,
},
search: {
  height: 48,
  width: width - 32,
  marginHorizontal: 16,
  borderWidth: 1,
  borderRadius: 3,
  borderColor: argonTheme.COLORS.BORDER
},
options: {
  marginBottom: 24,
  marginTop: 10,
  elevation: 4,
},
tab: {
  backgroundColor: theme.COLORS.TRANSPARENT,
  width: width * 0.35,
  borderRadius: 0,
  borderWidth: 0,
  height: 54,
  elevation: 0,
},
tabTitle: {
  lineHeight: 19,
  fontWeight: '400',
  color: argonTheme.COLORS.HEADER
},
tabTitle2: {
  paddingTop: 10,
  lineHeight: 19,
  fontWeight: '400',
  color: argonTheme.COLORS.HEADER
},

});

//function que le pasaremos el state y que devuelve siempre un objeto
const mapStateToProps = state => {
	console.log('state redux', state)
    //accedemos a superheroes que es el nombre que le hemos puesto en el reducer
    return {selectUser: state.selectUser, selectBank: state.selectBank}
}


export default connect(mapStateToProps)(Home);
