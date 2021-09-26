import { Flex } from "@chakra-ui/layout"
import type { NextPage } from "next"
import { Layouts } from "../layouts"

const Home: NextPage = () => {
  return (
    <Layouts.default justifyContent="center" alignItems="center">
      <Flex>Welcome !</Flex>
    </Layouts.default>
  )
}

export default Home
