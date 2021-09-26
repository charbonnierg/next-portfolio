import { FlexProps, VStack, StackProps } from "@chakra-ui/react"
import Head from "next/head"
import { Body, NavBar, Footer } from "../../components"

export interface DefaultLayoutProps extends StackProps {
  footer?: FlexProps
  navbar?: FlexProps
}

/**
 * Default application layout.
 *
 * This layout includes:
 *   - The navigation bar
 *   - The application body
 *   - The application footer
 */
export const DefaultLayout = (props: DefaultLayoutProps) => {
  const { children, footer, navbar, ...style } = props
  return (
    // The root of the application takes all the screen
    <VStack height="100vh" spacing="0rem">
      {/* Some HTML document metadata */}
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Next Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Application navbar */}
      <NavBar {...navbar}></NavBar>
      {/* Application body */}
      <Body {...style}>
        {/* Child components are used as application body */}
        {children}
      </Body>
      {/* Application footer */}
      <Footer {...footer}></Footer>
      {/* End of application */}
    </VStack>
  )
}
