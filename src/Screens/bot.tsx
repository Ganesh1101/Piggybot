import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, FlatList, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { GoogleGenerativeAI } from "@google/generative-ai";
import Logo from '../components/logo';

const PiggyBot = () => {
    const [data, setData] = useState([]);
    const apiKey = 'AIzaSyDFB_L-pMGGfnDBOrjVM3J6bb0pMSJ2fPE';
    const genAI = new GoogleGenerativeAI(apiKey);
    const [textInput, setTextInput] = useState('');
    const [imageInput, setImageInput] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleSend = async () => {
        setIsLoading(true);
        let prompt = textInput;
        if (textInput.trim() === '') {
            setIsLoading(false);
            return; // Do nothing if the input is empty
        }
        
        // Display the user message immediately
        const newUserMessage = { type: 'user', text: textInput, image: imageInput };
        setData([...data, newUserMessage]);

        // Simulate typing indicator
        setTimeout(async () => {
            try {
                const model = genAI.getGenerativeModel({ model: "gemini-pro" });
                let promptWithImage = prompt;
                if (imageInput) {
                    promptWithImage += ` Image: ${imageInput}`;
                }
                const result = await model.generateContent(promptWithImage);
                const response = result.response.text();
                const newBotMessage = { type: 'Piggy', text: response };
                setData(prevData => [...prevData, newBotMessage]);
            } catch (error) {
                console.error('Error:', error);
            } finally {
                setIsLoading(false);
            }
        }, 10); // Adjust the delay as needed (milliseconds)
        
        // Clear input after sending
        setTextInput('');
        setImageInput(null);
    };

    const renderItem = ({ item }) => {
        const isUserMessage = item.type === 'user';
        const messageContainerStyle = isUserMessage ? styles.userMessageContainer : styles.piggyMessageContainer;
        const avatarStyle = isUserMessage ? styles.userAvatar : styles.piggyAvatar;

        return (
            <View style={messageContainerStyle}>
                <Image style={avatarStyle} source={isUserMessage ? require('../../assets/user.png') : require('../../assets/piggy.png')} />
                <View style={styles.messageBubble}>
                    <Text style={styles.messageText}>{item.text}</Text>
                    {item.image && <Image source={{uri: item.image}} style={styles.image} />}
                </View>
            </View>
        );
    }

    return (
        <ImageBackground source={require('../../assets/bg.png')} style={{height:'100%',width:'100%',opacity:0.7}}>
        <View style={styles.container}>
            <Logo />
            <FlatList
                data={data}
                keyExtractor={(item, index ) => index.toString()}
                style={styles.body}
                renderItem={renderItem} 
            />
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    value={textInput}
                    onChangeText={setTextInput}
                    placeholder="Type your message..."
                />
                {/* Send button */}
                <TouchableOpacity style={styles.sendButton} onPress={handleSend} disabled={isLoading}>
                    <Text style={styles.sendButtonText}>{isLoading ? 'Sending...' : 'Send'}</Text>
                </TouchableOpacity>
            </View>
        </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputContainer: {
        width: '100%',
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 5,
        marginBottom: 20,
        padding: 10,
        fontSize: 18,
        width: '80%',
    },
    sendButton: {
        backgroundColor: '#000',
        width: 80,
        height: 50,
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    sendButtonText: {
        color: "#fff",
    },
    body: {
        // backgroundColor: '#fff',
        width: '100%',
        marginVertical: 10,
    },
    userMessageContainer: {
        flexDirection: 'row',
        marginBottom: 20,
        alignItems: 'flex-start',
    },
    piggyMessageContainer: {
        flexDirection: 'row',
        marginBottom: 20,
        alignItems: 'flex-start', 
       
    },
    userAvatar: {
        width: 42,
        height: 40,
        marginRight: 10,
        marginLeft: 10,
        borderRadius: 20,
    },
    piggyAvatar: {
        width: 42,
        height: 40,
        marginLeft: 10,
        marginRight: 10,
       
    },
    messageBubble: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10,
        maxWidth: '78%', // Adjust the maximum width of the message bubble
    },
    messageText: {
        fontSize: 16,
        color: '#000',
        fontWeight:'400'

    },
    bot: {
        fontSize: 16,
        marginLeft: 10,
        textAlign:'center',
        paddingTop: 10,
        paddingBottom: 10,
        color:"#000"
    },
    image: {
        width: 200,
        height: 200,
        resizeMode: 'cover',
        marginTop: 10,
    },
});

export default PiggyBot;
