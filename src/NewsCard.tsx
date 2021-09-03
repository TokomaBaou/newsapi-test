import { Box, Image, Stack, Text } from "@chakra-ui/react";
import { memo, VFC } from "react";

type Props = {
  id: null;
  urlToImage: string;
  name: string;
  title: string;
  // author:string;
  description: string;
  url: string;
  // publishedAt:string;
  // content:string;
  // onClick: () => void;
};

export const NewsCard: VFC<Props> = memo((props) => {
  const { urlToImage, title, name, description } = props;

  return (
    <Box
      w="260px"
      h="260px"
      bg="gray.100"
      borderRadius="10px"
      shadow="md"
      p={4}
      _hover={{ cursor: "pointer", opacity: 0.8 }}
    >
      <Stack textAlign="center">
        <Image
          borderRadius="160px"
          boxSize="160px"
          m="auto"
          alt={name}
          src={urlToImage}
        />

        <Text fontSize="lg" fontWeight="bold">
          {title}
        </Text>
        <Text fontSize="sm" color="gray.800">
          {description}
        </Text>
      </Stack>
    </Box>
  );
});
