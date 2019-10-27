import React from "react";
import {
  StyleSheet,
  ImageBackground,
  Dimensions,
  StatusBar,
  KeyboardAvoidingView, Image
} from "react-native";
import { Block, Checkbox, Text, theme } from "galio-framework";
import { connect } from 'react-redux'
import { selectUser, createBanks } from '../actions';

import { Button, Icon, Input } from "../components";
import { Images, argonTheme } from "../constants";

const { width, height } = Dimensions.get("screen");

class Register extends React.Component {
  getData = () => {
    
    fetch('https://fincluye.openbankproject.com/obp/v3.0.0/banks', 
      // {
      //   method: 'POST',
      //   headers: {
      //     // Accept: 'application/json',
      //     'Content-Type': 'application/json',
      //     'Authorization': 'DirectLogin username=power.user.0, password=X!16a99a40,consumer_key=3nhmrajsktev41vv55kxdhs5mkagncudomatmncm'
      //   },
      //   // body: JSON.stringify({
      //   //   firstParam: 'yourValue',
      //   //   secondParam: 'yourOtherValue',
      //   // }),
      // }
    )
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson)
        this.props.onClick('juanuto', myJson)
        // this.setState({
        //   bancos: myJson.banks,
        // })
        console.log('myJson')
      })
      .catch((error) => {
        console.error(error);
      });
  }
  render() {
    console.log(this.props)
    const { navigation, onClick } = this.props;
    return (
      <Block flex middle>
        <StatusBar hidden />
        <ImageBackground
          source={Images.RegisterBackground}
          style={{ width, height, zIndex: 1 }}
        >
          <Block flex middle>
            <Block style={styles.registerContainer}>
              <Block flex={0.25} middle style={styles.socialConnect}>
              <Image
                    source={require('../assets/imgs/concierge.png')}
                    style={styles.avatar}
                  />
                {/* <Text color="#8898AA" size={12}>
                  Sign up with
                </Text> */}
                {/* <Block row style={{ marginTop: theme.SIZES.BASE }}>
                  <Button style={{ ...styles.socialButtons, marginRight: 30 }}>

                    <Block row>
                      <Icon
                        name="logo-facebook"
                        family="Ionicon"
                        size={14}
                        color={"black"}
                        style={{ marginTop: 2, marginRight: 5 }}
                      />
                      <Text style={styles.socialTextButtons}>FACEBOOK</Text>
                    </Block>
                  </Button>
                  <Button style={styles.socialButtons}>
                    <Block row>
                      <Icon
                        name="logo-google"
                        family="Ionicon"
                        size={14}
                        color={"black"}
                        style={{ marginTop: 2, marginRight: 5 }}
                      />
                      <Text style={styles.socialTextButtons}>GOOGLE</Text>
                    </Block>
                  </Button>
                </Block> */}
              </Block>
              <Block flex>
                <Block flex={0.17} middle>
                
                  {/* <Text color="#8898AA" size={12}>
                    Or sign up the classic way
                  </Text> */}
                </Block>
                <Block flex center>
                  <KeyboardAvoidingView
                    style={{ flex: 1 }}
                    behavior="padding"
                    enabled
                  >
                    <Block width={width * 0.8} style={{ marginBottom: 15 }}>
                      <Input
                        borderless
                        placeholder="Name"
                        iconContent={
                          <Icon
                            size={16}
                            color={argonTheme.COLORS.ICON}
                            name="hat-3"
                            family="ArgonExtra"
                            style={styles.inputIcons}
                          />
                        }
                      />
                    </Block>
                    <Block width={width * 0.8} style={{ marginBottom: 15 }}>
                      <Input
                        borderless
                        placeholder="Email"
                        iconContent={
                          <Icon
                            size={16}
                            color={argonTheme.COLORS.ICON}
                            name="ic_mail_24px"
                            family="ArgonExtra"
                            style={styles.inputIcons}
                          />
                        }
                      />
                    </Block>
                    <Block width={width * 0.8}>
                      <Input
                        password
                        borderless
                        placeholder="Password"
                        iconContent={
                          <Icon
                            size={16}
                            color={argonTheme.COLORS.ICON}
                            name="padlock-unlocked"
                            family="ArgonExtra"
                            style={styles.inputIcons}
                          />
                        }
                      />
                      {/* <Block row style={styles.passwordCheck}>
                        <Text size={12} color={argonTheme.COLORS.MUTED}>
                          password strength:
                        </Text>
                        <Text bold size={12} color={argonTheme.COLORS.SUCCESS}>
                          {" "}
                          strong
                        </Text>
                      </Block> */}
                    </Block>
                    <Block row width={width * 0.75}>
                      <Checkbox
                        checkboxStyle={{
                          borderWidth: 3
                        }}
                        color={argonTheme.COLORS.PRIMARY}
                        label="Acepto todas las politicas"
                      />
                      {/* <Button
                        style={{ width: 70 }}
                        color="transparent"
                        textStyle={{
                          color: argonTheme.COLORS.PRIMARY,
                          fontSize: 14
                        }}
                      >
                        Politicas
                      </Button> */}
                    </Block>
                    <Block middle>
                      <Button color="primary" style={styles.createButton} onPress={() =>{
    
                    fetch('https://fincluye.openbankproject.com/obp/v3.0.0/banks', 
                      // {
                      //   method: 'POST',
                      //   headers: {
                      //     // Accept: 'application/json',
                      //     'Content-Type': 'application/json',
                      //     'Authorization': 'DirectLogin username=power.user.0, password=X!16a99a40,consumer_key=3nhmrajsktev41vv55kxdhs5mkagncudomatmncm'
                      //   },
                      //   // body: JSON.stringify({
                      //   //   firstParam: 'yourValue',
                      //   //   secondParam: 'yourOtherValue',
                      //   // }),
                      // }
                    )
                      .then(function(response) {
                        return response.json();
                      })
                      .then(function(myJson) {
                        console.log(myJson)
                        onClick('juan', myJson)
                        navigation.navigate("Home")
                        // this.setState({
                        //   bancos: myJson.banks,
                        // })
                        console.log('myJson')
                      })
                      .catch((error) => {
                        console.error(error);
                      });
                  }}>
                        <Text bold size={14} color={argonTheme.COLORS.WHITE}>
                          CREAR CUENTA
                        </Text>
                      </Button>
                    </Block>
                  </KeyboardAvoidingView>
                </Block>
              </Block>
            </Block>
          </Block>
        </ImageBackground>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  registerContainer: {
    width: width * 0.9,
    height: height * 0.6,
    backgroundColor: "#F4F5F7",
    borderRadius: 4,
    shadowColor: argonTheme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 1,
    overflow: "hidden"
  },
  socialConnect: {
    backgroundColor: argonTheme.COLORS.WHITE,
    // borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "#fff"
  },
  socialButtons: {
    width: 120,
    height: 40,
    backgroundColor: "#fff",
    shadowColor: argonTheme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 1
  },
  socialTextButtons: {
    color: argonTheme.COLORS.PRIMARY,
    fontWeight: "800",
    fontSize: 14
  },
  inputIcons: {
    marginRight: 12
  },
  passwordCheck: {
    paddingLeft: 15,
    paddingTop: 13,
    paddingBottom: 30
  },
  createButton: {
    width: width * 0.5,
    marginTop: 25
  },
  avatar: {
    width: 100,
    height: 100,
    borderWidth: 0,
    marginTop: 40,
    marginBottom: 20
  },
});

//function que le pasaremos el state y que devuelve siempre un objeto
const mapStateToProps = state => {
  console.log(state)
  //accedemos a superheroes que es el nombre que le hemos puesto en el reducer
  return {selectUser: state.selectUser, selectBank: state.selectBank}
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (user, banks) => {
      dispatch(selectUser(user))
      console.log('ok disp')
      dispatch(createBanks(banks))      
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Register);
