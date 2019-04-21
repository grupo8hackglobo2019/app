/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { Platform, StyleSheet, Text, View, Image} from 'react-native';
import Chat from "./src/Chat";
import List from "./src/List";
import { createBottomTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation';

const DashboardIcon = () => <Image source={require("./assets/dashboard.png")} />
const SearchIcon = () => <Image source={require("./assets/search.png")} />
const MenuIcon = () => <Image source={require("./assets/menu.png")} />

const contentHOC = (ContentComponent, LeftComponent, RightComponent) => class App extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#E9E9E9"}}>
        <View style={{ paddingTop: 20, height: 70, backgroundColor: "#FF7706", justifyContent: "space-between", flexDirection: "row"}}>
          <View style={{ justifyContent: "flex-end", padding: 15 }}><SearchIcon /></View>
          <View style={{justifyContent: "flex-end", padding: 15}}><Image source={require("./assets/logo.png")} /></View>
          <View style={{ justifyContent: "flex-end", padding: 15 }}><MenuIcon /></View>
        </View>
        <ContentComponent {...this.props} />
      </View>
    );
  }
}

const ChatStack = createStackNavigator({
  List: contentHOC(List),
  Chat: contentHOC(Chat)
},{defaultNavigationOptions:{header: null}});

export default createAppContainer(createBottomTabNavigator({
  Dashboard: {screen: contentHOC(() => <Image source={require("./assets/image_.png")} style={{width:"100%", height: "100%"}} />), navigationOptions: {tabBarIcon: DashboardIcon}},
  Menu2: contentHOC(View),
  Menu3: contentHOC(View),
  Menu4: contentHOC(View),
  Resenha: ChatStack
}, {tabBarOptions: {showIcon: true}}));
