import React from "react";
import { getMetricMetaInfo, setLocalNotification } from "./utils/helpers";
import {
    Text,
    View,
    Platform,
    StyleSheet,
    TouchableHighlight,
    TouchableNativeFeedback,
    TouchableOpacity,
    TouchableWithoutFeedback,
    StatusBar
} from "react-native";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";
import {
    createBottomTabNavigator,
    createAppContainer,
    createMaterialTopTabNavigator,
    createStackNavigator,
} from "react-navigation";
import { purple, white } from "./utils/colors"; 
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import HistoryComponent from './components/History';
import AddEntryComponent from './components/AddEntry';
import { Constants } from 'expo'
import EntryDetail from './components/EntryDetail';
import Live from './components/Live';

import {  } from './utils/helpers'


function UdacityStatusBar ({ backgroundColor, ...props}) {
    return (
        <View style={{backgroundColor, height: Constants.statusBarHeight}}>
            <StatusBar translucent backgroundColor={backgroundColor} {...props} /> 
        </View>
    )
}

const History = {
    screen: HistoryComponent,
    navigationOptions: {
        tabBarLabel: "History",
        tabBarIcon: ({ tintColor }) => (
            <Ionicons name="ios-bookmarks" size={30} color={tintColor} />
        )
    }
};

const AddEntry = {
    screen: AddEntryComponent,
    navigationOptions: {
        tabBarLabel: "Add Entry",
        tabBarIcon: ({ tintColor }) => (
            <Ionicons name="ios-add-circle" size={30} color={tintColor} />
        )
    }
};


const navigationOptions = {
    header: null
}

const tabBarOptions = {
    activeTintColor: Platform.OS === "ios" ? purple : white,
    style: {
        height: 56,
        backgroundColor: Platform.OS === "ios" ? white : purple,
        shadowColor: "rgba(0, 0,, 0, 0.24)",
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 6,
        shadowOpacity: 1
    }
};

const LiveComponent = {
    screen: Live,
    navigationOptions:  {
        tabBarLabel: 'Live',
        tabBarIcon: ({tintColor}) => <Ionicons name="ios-speedometer" size={30} color={tintColor} />
    }

}

const Tabs =
    Platform.OS === "ios"
        ? createBottomTabNavigator(
              {
                  History: History,
                  AddEntry: AddEntry,
                  Live: LiveComponent
              },
              { navigationOptions: navigationOptions,
                tabBarOptions: tabBarOptions }
          )
        : createMaterialTopTabNavigator(
              {
                  History: History,
                  AddEntry: AddEntry,
                  Live: LiveComponent
              },
              { navigationOptions: navigationOptions,
                tabBarOptions: tabBarOptions }
          );

          
const MainNavigator = createStackNavigator({
    Home: {
        screen: Tabs,
    },
    EntryDetail: {
        screen: EntryDetail,
        navigationOptions: {
            headerTintColor: white,
            headerStyle: {
                backgroundColor: purple,
            }
        }
    }
})
const AppContainer = createAppContainer(MainNavigator);

export default class App extends React.Component {
    componentDidMount() {
        setLocalNotification()
    }
    render() {
        return (
            <Provider store={createStore(reducer)}>
                <UdacityStatusBar backgroundColor={purple} barStyle='light-content'/>
                <AppContainer/>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    },
    btn: {
        backgroundColor: "#E53224",
        padding: 10,
        paddingLeft: 50,
        paddingRight: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5
    },
    btnText: {
        color: "#fff"
    }
});
