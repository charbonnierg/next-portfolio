import type { NextPage } from "next"
import { Flex } from "@chakra-ui/react"
import { Layouts } from "../layouts"

const About: NextPage = () => {
  return <Layouts.default
    backgroundColor="red.100"
    footer={{ backgroundColor: "red.100", color: "red.400" }}
    navbar={{ height: ["4rem"] }}
    alignItems="center"
  >
    <Flex marginTop="2rem">
      Hello World
    </Flex>
  </Layouts.default>
}

export default About
