import {
  Box,
  ClientOnly,
  Heading,
  Skeleton,
  VStack,
} from "@chakra-ui/react"
import { ColorModeToggle } from "../components"

export default function Page() {
  return (
    <Box textAlign="center" fontSize="xl" pt="30vh">
      
      <VStack gap="8">
        <Heading size="2xl" letterSpacing="tight">
          Welcome :)
        </Heading>
      </VStack>

      <Box pos="absolute" top="4" right="4">
        <ClientOnly fallback={<Skeleton w="10" h="10" rounded="md" />}>
          <ColorModeToggle />
        </ClientOnly>
      </Box>
    </Box>
  )
}