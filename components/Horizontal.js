import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet, Dimensions } from 'react-native'

export default class Horizontal extends Component {
    render() {
        return (
            <ScrollView 
                horizontal={true} 
                pagingEnabled={true}  
                style={styles.container}
                >
                <View style={styles.outer}>
                    <Text style={styles.inner}>Welcome to Hyo app</Text>
                </View>
                <View style={[styles.outer, styles.red]}>
                    <Text style={styles.inner}>This is Hyo</Text>
                </View>
                <View style={[styles.outer, styles.green]}>
                    <Text style={styles.inner}>I am a coder, artist, and a writer</Text>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {

    },
    outer: {
        backgroundColor: '#007bb6',
        alignItems: 'center',
        justifyContent: 'center',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    inner: {
        fontSize: 23,
        color: '#fff',
        fontWeight: 'bold'
    },
    red: {
        backgroundColor: '#dd4d39'
    },
    green: {
        backgroundColor: '#27ae60'
    }
  });
  