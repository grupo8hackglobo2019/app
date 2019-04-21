import React from 'react';
import {View, Text, Image} from 'react-native';
import { GiftedChat, InputToolbar, Composer, Send } from "react-native-gifted-chat";
import Message from "./Message";
import Input from "./Input";

export default class Example extends React.Component {
	state = {
		messages: []
	};

	componentWillMount() {
		this.setState({
			messages: [
				{
					_id: 1,
					text: "Hello developer",
					createdAt: new Date(),
					user: {
						_id: 2,
						name: "React Native",
						avatar: "https://placeimg.com/140/140/any"
					}
				}
			]
		});
	}

	onSend(messages = []) {
		this.setState(previousState => ({
			messages: GiftedChat.append(previousState.messages, messages)
		}));
	}

	render() {
		return (
			<GiftedChat
				messages={this.state.messages}
				onSend={messages => this.onSend(messages)}
				user={{
					_id: 1
				}}
				renderMessage={(props) => <Message {...props} />}
				renderInputToolbar={(props) => <InputToolbar {...props} containerStyle={{ ...props.containerStyle, backgroundColor: "#DBDBDB"}} />}
				renderComposer={(props) => <Composer {...props} textInputStyle={{...props.textInputStyle, fontSize: 12, paddingRight: 5}} />}
				renderSend={(props) => <Send {...props} containerStyle={{ width: 30, height: 30, backgroundColor: "#FF7706", justifyContent: "center", alignItems:"center", borderRadius: 50, margin: 5}}><Image source={require("../assets/Vector.png")} style={{width:16, height: 16}} /></Send>}
			/>
		);
	}
}