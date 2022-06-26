import React from 'react'
import { Text, Box, Center, Heading, IconButton, AspectRatio, Stack, Image, Icon, HStack, Badge } from 'native-base';
import { Octicons, MaterialCommunityIcons } from "@expo/vector-icons";

export default function Recipe(props) {
    return (
    <Box alignItems="center" pb='5'>
        <Box width='95%' maxW="80" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
        borderColor: "coolGray.600",
        backgroundColor: "gray.700"
      }} _web={{
        shadow: 2,
        borderWidth: 0
      }} _light={{
        backgroundColor: "gray.50"
      }}>
          <Box>
            <AspectRatio w="100%" ratio={16 / 6}>
              <Image source={{
              uri: props.item.image_url}} alt="image" />
            </AspectRatio>
            <Center bg="white" rounded="xl" opacity={70} _dark={{ bg: "violet.400" }} position="absolute" top="3" right="3">            
              <IconButton icon={<Icon as={<Octicons name="heart-fill" />} />} borderRadius="full" _icon={{
                  color: "green.500",
                  size: "md"
                }} _hover={{
                  bg: "green.600:alpha.20"
                }} _pressed={{
                  bg: "green.600:alpha.20",
                  _icon: {
                    name: "emoji-flirt"
                  },
                  _ios: {
                    _icon: {
                      size: "2xl"
                    }
                  }
                }} _ios={{
                  _icon: {
                    size: "2xl"
                  }
                }} />
                {/* <IconButton icon={<Icon as={<Octicons name="heart" />} />} borderRadius="full" _icon={{
                  color: "black.500",
                  size: "md"
                }} _hover={{
                  bg: "green.600:alpha.20"
                }} _pressed={{
                  bg: "green.600:alpha.20",
                  _icon: {
                    name: "emoji-flirt"
                  },
                  _ios: {
                    _icon: {
                      size: "2xl"
                    }
                  }
                }} _ios={{
                  _icon: {
                    size: "2xl"
                  }
                }} /> */}
            </Center>
          </Box>

          <Stack p='4' space={2}>
            <HStack space="3" justifyContent="space-around" alignItems="center">
              <Heading size="md" w='70%' ml="-1">
              {props.item.recipe_name}
              </Heading>
              <Icon as={<MaterialCommunityIcons name="timer-outline" />} />
              <Text color="coolGray.600" _dark={{
                  color: "warmGray.200"
                }} fontWeight="400">
                    {props.item.preptime/60} min
              </Text>
            </HStack>
                      
            <HStack space={3} justifyContent="space-around">
              <Badge width="30%" color="black" variant="outline" rounded="xl" >{props.item.calories + ' Kcal'}</Badge>
              <Badge width="30%" color="black" variant="outline" rounded="xl" >{props.item.fat + 'g fat'}</Badge>
              <Badge width="30%" color="black" variant="outline" rounded="xl" >{props.item.tags0}</Badge>
            </HStack>
          </Stack>
        </Box>
      </Box>
      )
  };