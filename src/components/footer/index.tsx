import { Flex, FlexProps } from "@chakra-ui/react"

/**
 * Application footer
 *
 * @param props Flex properties
 */
export const Footer = (props: FlexProps) => {
  const defaultColor = "#0693e3ff"
  // Return a Flex component which is always at the bottom of parent component
  return (
    <Flex
      flexDirection="column"
      height={["12rem"]}
      marginTop="auto"
      marginBottom="0rem"
      width="100%"
      color={props?.color || defaultColor}
      justifyContent="center"
      alignItems="center"
      {...props}
    >
      <Flex>
        All rights reserved blablabla
      </Flex>
    </Flex >
  )
}
