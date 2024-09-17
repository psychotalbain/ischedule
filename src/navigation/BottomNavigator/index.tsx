import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import Screens from '@screens'
import { useTheme } from '@theme'
import React, { useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'

import * as C from '@components'

import dynamicStyles from './styles'

const Tab = createBottomTabNavigator()

const BottomNavigator: React.FC = () => {
  const { t } = useTranslation()
  const { theme, themeNavigator } = useTheme()

  const styles = dynamicStyles(theme)
  const icons = useMemo(() => {
    return {
      Config: 'ninja',
      Schedule: 'calendar-check',
      ScheduledTasks: 'check-all'
    } as const
  }, [])
  const titles = useMemo(() => {
    return {
      Config: t('screen.config.title'),
      Schedule: t('screen.schedule.title'),
      ScheduledTasks: t('screen.scheduleTasks.title')
    } as const
  }, [])

  const renderIcon = useCallback(
    (size: number, color: string, icon: string) => {
      return <C.IconComponent size={size} color={color} source={icon} />
    },
    []
  )

  const renderLabel = useCallback(
    (children: string, color: string, focused: boolean) => {
      const style = {
        color,
        fontWeight: focused ? 'bold' : 'normal'
      }
      return (
        <C.TextComponent variant="labelSmall" style={style}>
          {children}
        </C.TextComponent>
      )
    },
    []
  )

  return (
    <NavigationContainer theme={themeNavigator}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            const iconName = icons[route.name as keyof typeof icons]
            return renderIcon(
              focused ? theme.fontSize.xl + 2 : theme.fontSize.xl,
              focused ? theme.colors.onPrimary : theme.colors.primaryContainer,
              iconName
            )
          },
          tabBarLabel: ({ focused }) => {
            const titleLabel = titles[route.name as keyof typeof icons]
            return renderLabel(
              titleLabel,
              focused ? theme.colors.onPrimary : theme.colors.primaryContainer,
              focused
            )
          },
          tabBarStyle: styles.TabBar,
          tabBarItemStyle: styles.TabBarItem,
          headerShown: false
        })}>
        <Tab.Screen name="Schedule" component={Screens.Schedule} />
        <Tab.Screen name="ScheduledTasks" component={Screens.ScheduledTasks} />
        <Tab.Screen name="Config" component={Screens.Config} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default BottomNavigator
