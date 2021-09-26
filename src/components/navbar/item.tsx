// A navigation bar that can be included in a div with display set to `flex`.

import { Link, Text } from "@chakra-ui/react"
import { useRouter } from "next/dist/client/router"

/**
 * Properties of a NavBarItem
 */
export interface NavBarItemProps {
  label: string
  to: string
}

/**
 * A NavBar item
 *
 * TODO: Add style to the component
 */
export const NavBarItem = (props: NavBarItemProps) => {
  // An item needs access to the router
  const router = useRouter()

  return (
    // An item is a simple link which changes current page on click
    <Link
      onClick={() => router.push(props.to)}
      // TODO: Customize my style
    >
      {/* Label is used as text */}
      <Text>{props.label}</Text>
    </Link>
  )
}
