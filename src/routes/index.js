import React from 'react'
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import Home from '../pages/Home';
import Meet from '../pages/Meet';

const App= createBottomTabNavigator();

const AppRoutes = () =>{
    return(
        <App.Navigator 
            initialRouteName="People"
        >
             <App.Screen name="People"
             component={Home} 
             options ={{tabBarIcon: ({color}) => 
             (<MaterialCommunityIcons name="account-heart" size={24} color="#F75050" />)}}/>
             
             <App.Screen  name="Meet"
             component={Meet}
             options ={{tabBarIcon: ({color}) => 
             (<MaterialCommunityIcons name="cards-heart" size={24} color="#F75050" />)}} />
        </App.Navigator>
    )
}

export default AppRoutes;