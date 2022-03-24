import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({term, onTermChange, onTermSubmit}) => {
    return <View style={styles.background}>
        <Feather name="search" size={35} style={styles.iconStyle} />
        <TextInput 
            autoCapitalize='none'
            autoCorrect={false}
            style={styles.inputStyle}
            placeholder="search"
            value={term}
            onChangeText={onTermChange}
            onEndEditing={onTermSubmit}

        />
    </View>
};

const styles = StyleSheet.create({
    background: {
        marginTop: 15,
        backgroundColor: '#e0dcdc',
        height: 50,
        borderRadius: 7,
        marginHorizontal: 15,
        flexDirection: 'row',
        marginBottom: 10,
    },
    inputStyle: {
        flex: 1,
        fontSize: 18
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15,
        color: 'black'
    }
});

export default SearchBar;