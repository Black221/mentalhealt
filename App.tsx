import { useFonts } from 'expo-font'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView, useColorScheme } from 'react-native'
import { TamaguiProvider, Theme } from 'tamagui'
import config from './tamagui.config'
import StackNavigator from '@core/StackNavigator'


export default function App() {
	const [loaded] = useFonts({
		Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
		InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
		// CrimsonPro: require('@assets/fonts/CrimsonPro-VariableFont_wght.ttf')
	})

	if (!loaded) {
		return null
	}

  	return (
		<TamaguiProvider config={config}>
      		{/* <Theme name={colorScheme === 'dark' ? 'dark' : 'light'}> */}
			<Theme name="light">
				<StackNavigator />
			</Theme>
			<StatusBar style="light" backgroundColor='black' animated={true}  hidden={false} translucent={false} />
		</TamaguiProvider>
  	)
}
