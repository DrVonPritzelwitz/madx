import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function ASIndex() {
	const [input, setInput] = useState<string>('');
	const [text, setText] = useState<string>('');

	const DATABASE = 'localeDB';

	const opslaan = async () => {
		try {
			await AsyncStorage.setItem(DATABASE, JSON.stringify(input));
		} catch (error) {
			console.error('Failed to save items:', error);
		}
	};

	const ophalen = async () => {
		try {
			const storedItems = await AsyncStorage.getItem(DATABASE);

			if (storedItems) {
				setText(JSON.parse(storedItems));
			} else {
				setText('geen data');
			}
			
		} catch (error) {
			console.error('Failed to load items:', error);
		}
	}

	return (
		<View style={styles.mc}>

			<Text style={styles.h1}>Async storage</Text>
			<Text style={styles.p}>
				Voor sommige apps is het nuttig om data op te slaan zodat we het later kunnen bekijken of bewerken.
			</Text>
			<Text style={styles.p}>
				Vaak maken we daarvoor gebruik van een database zoals MySql. Het opzetten van een database en daar contact mee maken is veel werk en betekent
				bovendien dat de app dan internet nodig heeft om de juiste data te kunnen tonen.
			</Text>
			<Text style={styles.p}>
				Toch is dat niet altijd nodig, we kunnen ook lokaal (op het apparaat) informatie opslaan en deze later bekijken en bewerken.

			</Text>
			<Text style={styles.p}>
				Hiervoor gebruiken we in React Native "Async Storage". Het werken met async storage lijkt erg op het gebruiken van cookies in een webapplicatie.
				Het voorbeeld hieronder laat zien hoe dat werkt.
			</Text>

			<View style={styles.outputBox}>
				<Text style={styles.h2}>Data uit async storage</Text>

				<Pressable onPress={ophalen} style={styles.btn}>
					<Text>Ophalen</Text>
				</Pressable>

				<Text>Data: {text}</Text>
			</View>

			<View style={styles.inputBox}>

				<View style={styles.inputc}>
					<TextInput
						placeholder=""
						value={input}
						onChangeText={setInput}
						style={styles.input}
					/>
				</View>

				<Pressable onPress={opslaan} style={styles.btn}>
					<Text>Opslaan</Text>
				</Pressable>

			</View>

		</View>
	);
}

const styles = StyleSheet.create({
	mc: {
		flex: 1,
		alignItems: 'center'
	},
	h1: {
		fontSize: 26,
		fontWeight: 'bold',
		marginVertical: 7,
	},
	h2: {
		fontSize: 20,
		fontWeight: 'bold',
		marginVertical: 7,
	},
	p: {
		width: 400,
		marginVertical: 3
	},
	inputBox: {
		flexDirection: 'row',
		marginTop: 40,
	},
	outputBox: {
		borderColor: 'blue'
	},
	input: {
		padding: 5
	},
	inputc: {
		width: 200,
		backgroundColor: 'lightblue',
		borderRadius: 5,
		margin: 5
	},
	btn: {
		backgroundColor: 'plum',
		padding: 5,
		borderRadius: 5,
		alignItems: 'center'
	}
});