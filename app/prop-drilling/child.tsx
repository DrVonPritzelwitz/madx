import { Pressable, StyleSheet, Text, View } from "react-native";

type ChildProps = {
	count: number;
	more: () => void;
	less: () => void;
};

export default function Child({ count, more, less }: ChildProps) {
	return (
		<View style={styles.mc}>
			<Text>Dit is het 'Child' component</Text>
			<Text>Count in child: {count}</Text>

			<View style={styles.btnc}>

				<Pressable onPress={more} style={styles.btn}>
					<Text style={styles.btnt} selectable={false}>+</Text>
				</Pressable>

				<Pressable onPress={less} style={styles.btn}>
					<Text style={styles.btnt} selectable={false}>-</Text>
				</Pressable>

			</View>

		</View>
	);
}

const styles = StyleSheet.create({
	mc: {
		borderColor: 'red',
		borderWidth: 1,
		borderRadius: 5,
		padding: 7,
		margin: 14
	},
	btnc: {
		flexDirection: 'row',
		justifyContent: 'center',
		padding: 10
	},
	btn: {
		backgroundColor: "lightblue",
		padding: 3,
		borderRadius: 5,
		aspectRatio: 1,
		margin: 3,
		width: 40,
		justifyContent:'center',
		alignItems: 'center'
	},
	btnt: {
		fontSize: 38,
	}
});