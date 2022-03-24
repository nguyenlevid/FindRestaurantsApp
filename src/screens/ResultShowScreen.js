import react, {useState, useEffect} from "react";
import {View, StyleSheet, Text, FlatList, Image} from 'react-native';
import yelp from "../api/yelp";

const ResultShowScreen = ({navigation}) => {
    const [result, setResult] = useState(null);
    const id = navigation.getParam('id');

    console.log(result);

    const getResult = async () => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    };

    useEffect(() => {
        getResult(id);
    }, [])

    if (!result) {
        return null;
    }

    return <>
        
        <Text style={styles.nameStyle}>{result.name}</Text>
        <Text style={styles.titleStyle}>Info:</Text>
        <Text>Address: {result.location.address1}, {result.location.address2}, {result.location.city}, {result.location.state}, {result.location.zip_code}</Text>
        <Text>Phone: {result.display_phone}</Text>
        <Text style={styles.titleStyle}>Food images:</Text>
        <FlatList 
            data={result.photos}
            keyExtractor={(photo) => photo}
            renderItem={({item}) => {
                return <Image style={styles.imageStyle} source={{uri: item}}/>
            }}
        />
    </>
};

const styles = StyleSheet.create({
    titleStyle: {
        fontWeight: 'bold',

    },
    imageStyle: {
        height: 200,
        width: 300,
        alignSelf: 'center',
        borderRadius: 5,
        margin: 10,
    },
    nameStyle: {
        alignSelf: 'center',
        fontSize: 14,
        fontWeight: 'bold',
    },
})

export default ResultShowScreen;