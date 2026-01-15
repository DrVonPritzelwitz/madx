import { StyleSheet, Text, View } from "react-native";
import Child from "./child";

type ParentProps = {
	count: number;
	more: () => void;
	less: () => void;
};

export default function Parent({ count, more, less }: ParentProps) {
	return (
		<View style={styles.mc}>
			<Text>Dit is het 'Parent' component</Text>
			<Text>Count in parent: {count}</Text>

			<Child
				count={count}
				more={more}
				less={less}
			></Child>
		</View>
	);
}

const styles = StyleSheet.create({
	mc: {
		borderColor: 'blue',
		borderWidth: 1,
		borderRadius: 5,
		padding: 7
	}
});