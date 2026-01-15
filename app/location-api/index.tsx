import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function LAIndex() {
	const [long, setLong] = useState<string>('');
	const [lat, setLat] = useState<string>('');
	const [locationInfo, setLocationInfo] = useState<any>();

	const getLocationInfo = async () => {
		const baseUri = 'https://api.bigdatacloud.net/data/reverse-geocode-client';
		const longNum = parseFloat(long);
		const latNum = parseFloat(lat);

		const locationApiUri = `${baseUri}?latitude=${latNum}&longitude=${longNum}&localityLanguage=en`;

		try {
			const response = await fetch(locationApiUri);
			const locationInfo = await response.json();
			console.log(locationInfo);
			setLocationInfo(locationInfo);

		} catch (error) {
			console.error(error);
		}
	}

	return (
		<View style={styles.mc}>
			<Text style={styles.h1}>Location API</Text>

			<Text style={styles.p}>
				Met React native kan je aan je device vragen wat zijn locatie is.
				Je krijgt dan de coordinaten van de apparaat in Lontitude en Latitude.
			</Text>

			<Text style={styles.p}>
				Puur en alleen deze oordinaten zijn niet erg nuttig.
				Gelukkig bestaan er meerdere gratis APIs die op basis van deze coordinaten nuttige informatie kunnen geven.
			</Text>
			<Text style={styles.p}>
				Hier zie je een voorbeeld van zo'n API en hoe je hem kan gebruiken:
			</Text>



			<View>
				<Text>Longitude:</Text>
				<TextInput
					keyboardType="numeric"
					value={long}
					onChangeText={setLong}
					style={styles.input}
				/>
			</View>
			<View>
				<Text>Latitude:</Text>
				<TextInput
					keyboardType="numeric"
					value={lat}
					onChangeText={setLat}
					style={styles.input}
				/>
			</View>

			<Pressable onPress={getLocationInfo} style={styles.btn}>
				<Text>Get locatie info</Text>
			</Pressable>

			<View style={styles.output}>
				<Text style={styles.h2}>Output</Text>
				<Text>Stad: {locationInfo?.city}</Text>
				<Text>Provincie: {locationInfo?.principalSubdivision}</Text>
				<Text>Land: {locationInfo?.countryName}</Text>
				<Text>Continent: {locationInfo?.continent}</Text>
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
		fontSize: 14,
		fontWeight: 'bold',
		marginVertical: 7,
	},
	p: {
		width: 400,
		marginVertical: 3
	},
	input: {
		borderColor: 'black',
		borderWidth: 2,
		borderRadius: 5,
		padding: 7
	},
	output: {
		marginTop: 10,
		width: 200,
		padding: 7,
		borderColor: 'black',
		borderWidth: 1,
		borderRadius: 7
	},
	btn: {
		marginTop: 20,
		backgroundColor: 'lightblue',
		padding: 10,
		borderRadius: 5,
		
	}
});
