import React from 'react';
import { Text, Box, Button, Center, Heading, VStack, FormControl, Input, Link, HStack } from 'native-base';

export default function Signin() {
    return <Center w="100%">
        <Box safeArea p="2" py="20" w="90%" maxW="290">
          <Heading size="3xl" fontWeight="600" color="coolGray.800" _dark={{
          color: "warmGray.50"
        }}>
            Meal Mate
          </Heading>
          <Heading mt="1" _dark={{
          color: "warmGray.200"
        }} color="coolGray.600" fontWeight="medium" size="xs">
            Sign up to continue!
          </Heading>
  
          <VStack space={3} mt="5">
            <FormControl>
              <FormControl.Label>First Name</FormControl.Label>
              <Input />
            </FormControl>
            <FormControl>
              <FormControl.Label>Last Name</FormControl.Label>
              <Input />
            </FormControl>
            <FormControl>
              <FormControl.Label>Email</FormControl.Label>
              <Input />
            </FormControl>
            <FormControl>
              <FormControl.Label>Password</FormControl.Label>
              <Input type="password" />
            </FormControl>
            <Button mt="5" colorScheme="lime">
              Sign in
            </Button>
            <HStack mt="6" justifyContent="center">
              <Text fontSize="sm" color="coolGray.600" _dark={{
              color: "warmGray.200"
            }}>
                Already have an account.{" "}
              </Text>
              <Link _text={{
              color: "lime.600",
              fontWeight: "medium",
              fontSize: "sm"
            }} href="#">
                Sign In
              </Link>
            </HStack>
          </VStack>
        </Box>
      </Center>;
  };