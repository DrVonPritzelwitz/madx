import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

const pokemonList = [
	{ naam: 'Pikachu', type: 'Electrisch' },
	{ naam: 'Squirtle', type: 'water' },
	{ naam: 'Charmander', type: 'Vuur' }
];

export default function Details() {
	const { pid } = useLocalSearchParams();

	const pokemon = pokemonList[parseInt(pid as string)];


	return (
		<View style={styles.mc}>
			<Text style={styles.h1}>Pokemon Stats</Text>
			
			<Text>Name: {pokemon.naam}</Text>
			<Text>Type: {pokemon.type}</Text>
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
	}
});