import { Heading, Box } from "@chakra-ui/react";

export const CardHome = ({
  children,
  bgColor = "white",
  headerColor = "secondary.900",
  headerTitle,
}) => {
  return (
    <Box
      bg={bgColor}
      borderRadius="lg"
      p={8}
      my={4}
      mx={1}
      width={["100%", "100%", "455px"]}
    >
      <Heading as="h4" color={headerColor}>
        {headerTitle}
      </Heading>
      <section>{children}</section>
    </Box>
  );
};