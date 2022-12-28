/** @format */

import React from 'react';
import {Alert, AlertIcon, AlertTitle, Button, Divider, Flex, FormControl, FormErrorMessage, FormHelperText, FormLabel, Heading, Image, Input, Stack} from '@chakra-ui/react';
import Wave from '../../assets/wave.svg'

const Login = () => {
	return (
		<Flex
			w='100%'
			h='100vh'
			justify='center'
			align='center'
    >
      <Heading as='h2' size='2xl' pos='absolute' left='20px' top='20px'>
        Faveo
      </Heading>

      <Alert variant='subtle' status='success' pos='absolute' w={300} top='30'>
        <AlertIcon />
        <AlertTitle>
          Info
        </AlertTitle>
      </Alert>

      <Flex
        as='form'
        pos='relative'
        zIndex={1}
        w='300px'
				rowGap={6}
				flexDir='column'
				border='1px'
				borderColor='whiteAlpha.200'
				borderRadius='md'
				px='3'
				py='8'
			>
				<Heading
					as='h2'
					size='lg'
					fontWeight='medium'
				>
					Login
				</Heading>
				<Divider />
				<Stack spacing={4}>
					<FormControl >
						<FormLabel>Email</FormLabel>
            <Input type='email' />
            <FormErrorMessage>Email Not Found</FormErrorMessage>
					</FormControl>
					<FormControl>
						<FormLabel>Password</FormLabel>
						<Input type='password' minLength={4} />
					</FormControl>
				</Stack>
				<Button type='submit' colorScheme='blue'>Login</Button>
      </Flex>
      <Image userSelect={'none'} pos='absolute' h='100%' w='100%' objectFit='cover' zIndex={0} opacity={0.2} bottom={0} src={Wave} />
		</Flex>
	);
};

export default Login;
