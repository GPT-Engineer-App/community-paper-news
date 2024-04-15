import React from "react";
import { Box, Heading, Text, Image, Stack, Container, Grid, GridItem, Link, Icon } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  const articles = [
    {
      title: "Local Community Raises Funds for New Park",
      description: "Residents come together to support the construction of a new park in the heart of the city.",
      image: "https://images.unsplash.com/photo-1703688829445-1eff11545108?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBwYXJrfGVufDB8fHx8MTcxMzE1NTU5N3ww&ixlib=rb-4.0.3&q=80&w=1080",
    },
    {
      title: "High School Football Team Wins State Championship",
      description: "The local high school football team brings home the state trophy after an incredible season.",
      image: "https://images.unsplash.com/photo-1535116574766-9a678bf80bf4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmb290YmFsbCUyMHRlYW0lMjBjZWxlYnJhdGluZ3xlbnwwfHx8fDE3MTMxNTU1OTd8MA&ixlib=rb-4.0.3&q=80&w=1080",
    },
    {
      title: "New Restaurant Opens Downtown",
      description: "A new farm-to-table restaurant has opened its doors, showcasing local ingredients and delighting foodies.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwaW50ZXJpb3J8ZW58MHx8fHwxNzEzMTU1NTk3fDA&ixlib=rb-4.0.3&q=80&w=1080",
    },
  ];

  return (
    <Box>
      <Box bg="gray.100" py={8}>
        <Container maxW="container.lg">
          <Heading as="h1" size="xl" mb={4}>
            The Local Times
          </Heading>
          <Text fontSize="xl" mb={8}>
            Your trusted source for local news and events.
          </Text>
        </Container>
      </Box>

      <Container maxW="container.lg" py={8}>
        <Grid templateColumns="repeat(3, 1fr)" gap={8}>
          {articles.map((article, index) => (
            <GridItem key={index}>
              <Box borderWidth={1} borderRadius="lg" overflow="hidden">
                <Image src={article.image} alt={article.title} />
                <Box p={6}>
                  <Heading as="h3" size="md" mb={2}>
                    {article.title}
                  </Heading>
                  <Text>{article.description}</Text>
                </Box>
              </Box>
            </GridItem>
          ))}
        </Grid>
      </Container>

      <Box bg="gray.100" py={8}>
        <Container maxW="container.lg">
          <Stack direction="row" spacing={8} align="center">
            <Link href="#">
              <Icon as={FaFacebook} boxSize={6} />
            </Link>
            <Link href="#">
              <Icon as={FaTwitter} boxSize={6} />
            </Link>
            <Link href="#">
              <Icon as={FaInstagram} boxSize={6} />
            </Link>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;
