import React from "react";
import {View, Text, Image, TouchableOpacity, StyleSheet} from "react-native";

export default (props) => (<View>
	<TouchableOpacity onPress={()=>props.navigation.navigate("Chat")} style={style.line}>
		<Image source={require("../assets/brahma.png")} style={style.image} />
		<Text style={style.text}>Brahma Chopp</Text>
	</TouchableOpacity>
	<TouchableOpacity style={style.line}>
		<Image source={require("../assets/turbinados.png")} style={style.image} />
		<Text style={style.text}>Turbinados</Text>
	</TouchableOpacity>
	<TouchableOpacity style={style.line}>
		<Image source={require("../assets/Group.png")} style={style.image} />
		<Text style={style.text}>Hackathon Globo</Text>
	</TouchableOpacity>
</View>);

const style = StyleSheet.create({
	line: {
		padding: 15,
		borderBottomColor: "#999999",
		borderBottomWidth: 1,
		backgroundColor: "#ffffff",
		flexDirection: "row",
		alignItems: "center",
		// justifyContent: "space-between"
	},
	image: { width: 38 },
	text: {marginLeft: 20}
});