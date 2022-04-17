import {extendTheme, theme} from "@chakra-ui/react";
import {mode} from "@chakra-ui/theme-tools";

export default extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  colors: {
    primary: theme.colors.twitter,
  },
  styles: {
    global: {
      "html, body, #root": {
        color: mode("undefined", "#d9d9d9"),
        height: "100%",
      },
    },
  },
  components: {
    Button: {
      baseStyle: {
        borderLeftRadius: 9999,
        borderRightRadius: 9999,
      },
      sizes: {
        lg: {
          paddingY: 5,
          fontSize: "md",
          fontWeight: "extrabold",
        },
      },
      variants: {
        solid: (props: any) => ({
          bg: `${props.colorScheme}.500`,
          color: mode(undefined, "#ffffff")(props),
          fontWeight: "extrabold",
          _hover: {
            bg: `${props.colorScheme}.600`,
          },
        }),
        outline: (props: any) => ({
          color: `${props.colorScheme}.500`,
          borderColor: `${props.colorScheme}.500`,
          fontWeight: "extrabold",
        }),
      },
    },
  },
});
