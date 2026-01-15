import { router } from "expo-router";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

const goto = (id: number) => {
	router.push(`./dynamic-routing/pokemon/${id}`);
}

export default function DRIndex() {
	return (
		<View style={styles.mc}>
			<Text style={styles.h1}>Dynamic routing</Text>

			<Text style={styles.p}>
				Dynamic-routing gaat over navigatie op basis van variablelen.
				Stel: We hebben 1 pagina met daarop 3 verschillende pokemon, als je op de pokemon klikt kom je op een andere
				pagina met waar ja extra informatie over de pokemon kan lezen.
			</Text>
			<Text style={styles.p}>
				Als we dynamic-routing toepassen hoeven we deze 'detail' pagina maar één keer te maken.
				We kunnen in de dynamic route een identifyer (ID) meegeven en op basis daarvan de juiste info tonen.
			</Text>

			<View style={styles.pokec}>
				<Pressable onPress={() => goto(0)}>
					<Image source={require('../../assets/images/pikachu.png')} style={{ width: 40, height: 40 }} />
				</Pressable>

				<Pressable onPress={() => goto(1)}>
					<Image source={require('../../assets/images/squirtle.png')} style={{ width: 40, height: 40 }} />
				</Pressable>

				<Pressable onPress={() => goto(2)}>
					<Image source={require('../../assets/images/charmander.png')} style={{ width: 40, height: 40 }} />
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
	a: {
		color: 'blue',
		textDecorationLine: 'underline',
		marginVertical: 3
	},
	p: {
		width: 400,
		marginVertical: 3
	},
	pokec: {
		width: 200,
		flexDirection: 'row',
		justifyContent: 'space-between'
	}
});
