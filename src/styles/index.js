import { StyleSheet, useWindowDimensions } from "react-native";

const dimension = {
    height: useWindowDimensions().height,
    width: useWindowDimensions().width,
}

const primaryColor="#9900EF"
const secondaryColor="#3f51b5"

const homePageStyle = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#f5f5f5'
    },
    header: {        
        padding: 5,
        flexDirection: 'row',
        justifyContent:'space-between', 
        alignContent:'flex-start',
        backgroundColor: '#fff'
    },
    Row: {
        flexDirection: 'column'
    },
    Col: {
        flexDirection: 'row'
    }
})




export { homePageStyle, dimension, primaryColor }
