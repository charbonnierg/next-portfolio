/**
 * The Application navigation bar is defined as the NavBar React function component.
 */

import { Flex, FlexProps } from "@chakra-ui/react"
import NavBarItems from "./items.json"
import { NavBarItem, NavBarItemProps } from "./item"

/**
 * Application NavBar
 *
 * @param properties Flex properties
 *
 * TODO: Add style to the component
 */
export const NavBar = (props: FlexProps) => {
  return (
    // It is a simple flex with a bunch of NavBarItem instances
    <Flex
      flexDirection={["column", "row"]}
      alignItems={["end", "center"]}
      justifyContent="space-around"
      width={props?.width || "full"}
      marginTop={props?.marginTop || ["2rem", "0rem"]}
      marginRight={props?.marginRight || ["2rem", "0rem"]}
      marginBottom={props?.marginBottom || "auto"}
      height={props?.height || ["2rem", "4rem", "6rem", "8rem"]}
      {...props}
    >
      {NavBarItems.map((item: NavBarItemProps, idx: number) => {
        return <NavBarItem {...item} key={idx}></NavBarItem>
      })}
    </Flex>
  )
}
