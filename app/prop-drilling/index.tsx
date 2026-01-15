import { Link } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Parent from "./parent";


export default function PDIndex() {
const [count, setCount] = useState(0);
	
const more = () => setCount((c) => c + 1);
const less = () => setCount((c) => c - 1);

	return (
		<View style={styles.mc}>
			<Text style={styles.h1}>PropDrilling</Text>
			<Text style={styles.p}>
				Als we het over prop-drilling hebben dan gaat het over het doorgeven van objecten van het een component naar een andere.
			</Text>

			<Text style={styles.p}>
				We kunnen kunnen allerlei soorten objecten doorgeven; bijvoorbeeld variabelen maar ook functies.
				In beide gevallen zorgen we er voor dat 'sub-componenten' toegang krijgen tot het object en het kunnen gebruiken/tonen.
			</Text>

			<Text style={styles.p}>Hieronder zie je een voorbeeld:</Text>

			<Text style={styles.p}>Count in index: {count}</Text>

			<Parent
				count={count}
				more={more}
				less={less}
			></Parent>
			
			<Text style={styles.warning}>Let op!</Text>
			<Text style={styles.p}>
				Omdat het doorgeven van objecten van het ene naar het andere component heel onoverzichtelijk kan worden
				is het advies dit nooit meer dan twee lagen diep door te geven. Als het voor jouw app belangrijk is dat meerdere
				componenten bij specifieken objecten kunnen dan kun je gebruik maken van de React 'useContext'
			</Text>
			<Link href={'https://www.youtube.com/watch?v=HYKDUF8X3qI&list=PLApy4UwQM3UrZsBTY111R6P4frt6WK-G2&index=5'} style={styles.a}>React useContext - video</Link>

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
	p: {
		width: 400,
		marginVertical: 3
	},
	warning: {
		color: 'red',
		fontWeight: 'bold',
		marginTop: 14,
		marginVertical: 4,
	},
	a: {
		color: 'blue',
		textDecorationLine: 'underline',
		marginVertical: 3
	}
});