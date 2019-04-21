import React from 'react';
import {View, Text, Image} from 'react-native';
import { GiftedChat, InputToolbar, Composer, Send } from "react-native-gifted-chat";
import Message from "./Message";
import Input from "./Input";

export default class Example extends React.Component {
	state = {
		messages: []
	};

	constructor(props){
		super(props);
		this.socket = new WebSocket('ws://grupo-oito.herokuapp.com/ws');
		this.socket.onmessage = ({ data }) => this.setState(previousState => ({
			messages: GiftedChat.append(previousState.messages, [JSON.parse(data)])
		}));
		this._id = +new Date();
		this.avatar = "https://picsum.photos/id/"+this.getRndInteger(1,350)+"/200/200"
	}

	componentWillMount() {
		this.setState({
			messages: [
				{
					_id: 1,
					text: "Hello world! kkkk",
					createdAt: new Date(),
					user: {
						_id: 2,
						name: "Developer",
						avatar: "https://placeimg.com/140/140/any"
					}
				}
			]
		});
	}

	onSend(messages = []) {
		messages.forEach((message) => {
			this.socket.send(JSON.stringify(message))
		})
	}
	
	getRndInteger(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	render() {
		return (
			<GiftedChat
				messages={this.state.messages}
				onSend={messages => this.onSend(messages)}
				user={{
					_id: this._id,
					name: "User "+this._id,
					avatar: this.avatar
				}}
				renderMessage={(props) => <Message {...props} />}
				renderInputToolbar={(props) => <InputToolbar {...props} containerStyle={{ ...props.containerStyle, backgroundColor: "#DBDBDB"}} />}
				renderComposer={(props) => <Composer {...props} textInputStyle={{...props.textInputStyle, fontSize: 12, paddingRight: 5}} />}
				renderSend={(props) => <Send {...props} containerStyle={{ width: 30, height: 30, backgroundColor: "#FF7706", justifyContent: "center", alignItems:"center", borderRadius: 50, margin: 5}}><Image source={require("../assets/Vector.png")} style={{width:16, height: 16}} /></Send>}
				alwaysShowSend={true}
				renderAvatarOnTop={true}
				showUserAvatar={false}
			/>
		);
	}
}