import { Box, HStack, VStack, ZStack, AspectRatio, IconButton, Image, Badge, Text, View, Icon} from 'native-base';
import React from 'react';
import { Ionicons } from "@expo/vector-icons";

export default function Profile({navigation}) {
  return (
    <View flex="1" >
      <View>
        <ZStack>
          <AspectRatio w="100%" ratio={1 / 1}>
          <Image borderRadius="25" source={{
          uri: 'https://w0.peakpx.com/wallpaper/208/712/HD-wallpaper-material-design-green-and-lime-google-circles-geometric-shapes-lollipop-lines-geometry-creative-strips-blue-backgrounds.jpg'}} alt="image" />
          </AspectRatio>
          <IconButton mt="7" ml="3" bg="white:alpha.20" icon={<Icon as={<Ionicons name="close-outline" />} />} borderRadius="15" _icon={{
                  color: "white",
                  size: "xl"
                }} _hover={{
                  bg: "black:alpha.20"
                }} _pressed={{
                  bg: "black:alpha.20",
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
                }} 
                onPress={() => { navigation.navigate('Home Page') }}/>

          <Box mt="80" ml="34" backgroundColor="white" borderRadius="15" w="84%" >
            <VStack space="4" pl="32" pr="5" py="5">
              <Text fontWeight="extrabold" fontSize="2xl" >j'ai zero inspi</Text>
              <Text>description</Text>
              <HStack space="4">
                <Badge color="black" variant="outline" rounded="xl" >Fitness</Badge>
                <Badge color="black" variant="outline" rounded="xl" >Vegan</Badge>
              </HStack>
            </VStack>
          </Box>

          <AspectRatio mt="64" ml="30" w="30%" ratio={1 / 1.8}>
          <Image borderRadius="25" source={{
          uri: 'https://fakeface.rest/face/view/1?gender=male'}} alt="image" />
          </AspectRatio>
        </ZStack>
      </View>

      <View mt="96">
        <VStack space="5" mt="32" mx="8">
          <HStack space="8" alignItems="center" backgroundColor="white"  w="100%" borderRadius="15" p="5">
            <Icon mb="1" as={<Ionicons name={"heart"} />} color="#59DBB7" size="2xl" />
            <Text fontWeight="bold" fontSize="2xl">33 Recipes liked</Text>
          </HStack>
          
          <HStack space="8" alignItems="center" backgroundColor="white"  w="100%" borderRadius="15" p="5">
            <Icon mb="1" as={<Ionicons name={"fitness"} />} color="#eb4034" size="2xl" />
            <Text fontWeight="bold" fontSize="2xl">14% Calorie Deficit</Text>
          </HStack>
          
          <HStack space="8" alignItems="center" backgroundColor="white"  w="100%" borderRadius="15" p="5">
            <Icon mb="1" as={<Ionicons name={"time"} />} color="#348ceb" size="2xl" />
            <Text fontWeight="bold" fontSize="2xl">User Since Nov 2019</Text>
          </HStack>
        </VStack>
      </View>
    </View>
  );
}