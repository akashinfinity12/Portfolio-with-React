import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  HStack,
  IconButton,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import * as React from "react";
import { FiMenu } from "react-icons/fi";

export default function LandingPage() {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  return (
    <Box as="section" pb={{ base: "12", md: "24" }}>
      <Box as="nav" bg="bg-surface" backgroundColor="red">
        <Container py={{ base: "4", lg: "5" }}>
          <HStack spacing="10">
            {isDesktop ? (
              <Flex marginLeft="40%">
                <ButtonGroup spacing="20">
                  {["About", "Skills", "Free Time", "Contact"].map((item) => (
                    <Button key={item}>{item}</Button>
                  ))}
                </ButtonGroup>
              </Flex>
            ) : (
              <IconButton
                variant="ghost"
                icon={<FiMenu fontSize="1.25rem" />}
                aria-label="Open Menu"
              />
            )}
          </HStack>
        </Container>
      </Box>
    </Box>
  );
}
