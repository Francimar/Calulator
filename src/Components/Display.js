import React from 'react';
import { StyleSheet, Text, Dimensions, TouchableHighlight, View} from 'react-native';



export default props => 
    <View style={styles.display}>
        <Text style={styles.displayValue} numberOfLines={1}>
            {props.value}
        </Text>
    </View>



const styles = StyleSheet.create ({
    display: {
        flex: 1,
        padding: 60,
        backgroundColor: 'rgba(0,0,0,0.6)',
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    displayValue: {
        fontSize: 60,
        color: '#fff'
    }
});