import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
	return (
		<View style={styles.mc}>
			<Text style={styles.h1}>Onderwerpen:</Text>
			<Link href={'/prop-drilling'} style={styles.a}>Prop drilling</Link>
			<Link href={'/dynamic-routing'} style={styles.a}>Dynamic routing</Link>
			<Link href={'/async-storage'} style={styles.a}>Async storage</Link>
			<Link href={'/location-api'} style={styles.a}>Location API</Link>
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
	a: {
		color: 'blue',
		textDecorationLine: 'underline',
		marginVertical: 3
	}
});
