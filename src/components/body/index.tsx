import { Flex, FlexProps } from "@chakra-ui/layout"

/**
 * Application body
 *
 * @param properties Flex properties
 */
export const Body = (props: FlexProps) => {
  // You can get child components using object destructuration
  const { children, ...style } = props
  // Return a Flex component which can grow to occupy remaining space
  return (
    <Flex flexGrow={1} flexDirection="column" width="full" {...style}>
      {/* Inside the body */}
      {children}
    </Flex>
  )
}
