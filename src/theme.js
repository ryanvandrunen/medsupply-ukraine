import { extendTheme } from '@chakra-ui/react'
import '@fontsource/russo-one'

const theme = extendTheme({
    fonts: {
        heading: `'Russo One', sans-serif`,
        body: `'Russo One', sans-serif`
    },
    fontWeights: {
        normal: 400,
        medium: 600
    },
    colors: {
        blueCons: "#0071CE",
        yellowCons: "#FCDF51",
        greyCons: "#EEEEEE"
    }
})

export default theme