import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import Screens from '@screens'
import React from 'react'

const Tab = createBottomTabNavigator()

const BottomNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Schedule"
          component={Screens.Schedule}
          options={{ title: 'Schedule' }}
        />
        <Tab.Screen
          name="ScheduledTasks"
          component={Screens.ScheduledTasks}
          options={{ title: 'Scheduled Tasks' }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default BottomNavigator
