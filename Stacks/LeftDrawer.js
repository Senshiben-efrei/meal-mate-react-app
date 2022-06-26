import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { Avatar, Switch, Divider, View, Text, Button, Icon, Pressable, Box, HStack,Badge,Spacer,Flex } from "native-base";
import { Feather } from "@expo/vector-icons";

export default function CustomDrawer(props) {
    return (
        <View flex="1">
            <View alignItems="center" pt="50">
                <Text pb="5" fontSize="2xl">Welcome Booba</Text>
                <Avatar bg="green.500" alignSelf="center" size="xl" source={{ uri: "https://www.nextplz.fr/wp-content/uploads/2019/03/Booba-1.jpg" }}></Avatar>
                <Text italic color="coolGray.400" fontSize="xs" mt="2">User since November 2019</Text>
                <Divider bg="#59DBB7" mx="4" mt="7" thickness="2" width="75%" self  />
            </View>
            
            <DrawerContentScrollView {...props}>
                <View>
                    <DrawerItemList {...props} />
                </View>
            </DrawerContentScrollView>
            
            <View alignItems="center" pb="7">
                <HStack space="6" alignItems="center">
                    <Text>Dark Mode</Text>
                    <Switch onTrackColor="#59DBB7" />
                </HStack>
                <Divider bg="#59DBB7" mx="4" my="7" thickness="2" width="75%" self  />
                <Pressable>
                    {({ isHovered, isPressed }) => {
                        return (
                            <Box width="40" alignItems="center" bg={isPressed ? "coolGray.200" : isHovered ? "coolGray.200" : "white"} rounded="8" p="3">
                                <HStack space="6" alignItems="center">
                                    <Icon as={Feather} name="log-out" color="red.500"/>
                                    <Text color="coolGray.700">
                                        Logout
                                    </Text>
                                    <Box>   </Box>
                                </HStack>
                            </Box>
                        )}
                    }
                </Pressable>
            </View>
        </View>
    );
}