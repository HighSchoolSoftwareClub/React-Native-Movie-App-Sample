import React from 'react';
import { View, Text, Image, Linking } from 'react-native';
import Card from './Card';
import Button from './Button';
import CardSection from './CardSection';
const FilmDetail = (props) => {
    return (
        <Card>
            <CardSection>
                <View style={styles.headerContentStyle} >
                    <Text style={styles.headerTextStyle} >{props.filmdata.title}</Text>
                    <Text>{props.filmdata.year}</Text>
                </View>
            </CardSection>
            <CardSection>
                <Image style={styles.imageStyle} source={{ uri: props.filmdata.urlPoster }} />
            </CardSection>
            <CardSection>
                <Text>{props.filmdata.plot}</Text>
            </CardSection>
            <CardSection>
                <Button onPress={() => Linking.openURL(props.filmdata.urlIMDB)}>
          Watch Now
        </Button>
            </CardSection>
        </Card>
    );
};

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTextStyle: {
        fontSize: 18
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    }
};


export default FilmDetail;
