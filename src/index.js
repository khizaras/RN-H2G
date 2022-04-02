import React, { useState } from 'react';
import { Appbar, Avatar, Drawer, Button, Text } from 'react-native-paper';
import { View, Image, StyleSheet, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux'

const IndexPage = (props) => {
    const user = useSelector((user) => user) 
    const [state, setState] = useState({
        isDrawerActive: false,
        drawerActive: "first"
    });
    return (
        <View>
            <Appbar.Header style={{ backgroundColor: "#fff" }}>
                <Appbar.Action icon="menu" />
                <Appbar.Content title="Hands2Gether" />
                <Avatar.Icon size={34} icon="account" />
            </Appbar.Header>
            <ScrollView>
                <Text>This is Home Page</Text>
                <Text>{JSON.stringify(props, null, 4)}</Text>
                <Text>{JSON.stringify(user, null, 4)}</Text>
                <Button icon="camera" mode="contained" onPress={() =>  props.navigation.navigate('Details')}>
    Press me
  </Button>
            </ScrollView>
        </View>
    )
}

export const IndexPage2 = ({ ...props }) => {

    const [state, setState] = useState({
        isDrawerActive: false,
        drawerActive: "first"
    });
    return (
        <View>

            <ScrollView>
                <Text>Index Page 2</Text>
                <Text>{JSON.stringify(props, null, 4)}</Text>
                <Button
                    title="Go to Details"
                    onPress={() => props.navigation.navigate('Details')}
                />
            </ScrollView>
        </View>
    )
}

export default IndexPage;

