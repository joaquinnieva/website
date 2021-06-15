import { Container, Flex, Text, Box, Heading, Stack } from "@chakra-ui/react";
import { FcCalendar, FcComments, FcClock } from "react-icons/fc";
import {
  NavigationLinks,
  SocialLinks,
  Footer,
  NewsletterForm,
  AboutCard,
  Logo,
} from "@/components";

export const PostLayout = ({ children, metadata }) => {
  return (
    <Box bg="gray.100">
      <Container maxW="container.2xl">
        <Flex
          justify="space-between"
          direction={["column", "column", "row"]}
          align="center"
          fontFamily="heading"
          fontSize="2xl"
          fontWeight="bold"
        >
          <Flex align="center" p="4">
            <Logo size="40px" />
            <Text px="2">Carlos Azaustre</Text>
          </Flex>
          <NavigationLinks />
        </Flex>
        <Flex
          d="flex"
          direction={["column", "column", "column", "column", "row"]}
          mx="auto"
        >
          <Box
            as="article"
            bg="white"
            w={["auto", "auto", "auto", "auto", "1000px"]}
            p="4"
            m="2"
            my="4"
            borderRadius="lg"
          >
            <Heading as="h1" m={8} size="3xl">
              {metadata.title}
            </Heading>
            <Flex px="4" direction="row" align="center" justify="flex-start">
              <FcCalendar />
              <Text p={2}>{metadata.date}</Text>
              <Flex direction="row">
                {metadata.tags.map((tag) => (
                  <Text p={2}>{tag}</Text>
                ))}
              </Flex>
              <FcComments />
              <Text p={2}>¡Deja tu comentario!</Text>
              <FcClock />
              <Text p={2}>
                {metadata.readingTime?.minutes} minutos de lectura
              </Text>
            </Flex>
            <section>{children}</section>
          </Box>
          <Stack
            as="aside"
            spacing="24px"
            w={["auto", "auto", "auto", "auto", "420px"]}
            m="2"
            my="4"
          >
            <NewsletterForm />
            <AboutCard />
          </Stack>
        </Flex>
      </Container>
      <Footer />
    </Box>
  );
};