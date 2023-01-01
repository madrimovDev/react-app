/** @format */

import React, {FormEvent, useEffect, useRef, useState} from 'react';
import {
	Box,
	Button,
	Divider,
	Flex,
	FormControl,
	FormErrorMessage,
	FormLabel,
	Heading,
	Image,
	Input,
	Stack,
} from '@chakra-ui/react';
import Wave from '../../assets/wave.svg';
import authService from '../../services/authService';
import {useNotification} from '../../hooks';

const Login = () => {
	const emailRef = useRef<HTMLInputElement>(null);
	const passwordRef = useRef<HTMLInputElement>(null);
	const [data, setData] = useState<{status: number | undefined; data: any} | null>(null);
	const {notify, notifications} = useNotification();

	const onSubmit = async (event: FormEvent) => {
		event.preventDefault();

		notify.success('title', 'desc');
	};

	return (
		<Flex
			w='100%'
			h='100vh'
			justify='center'
			align='center'
		>
			<Heading
				as='h2'
				size='2xl'
				pos='absolute'
				left='20px'
				top='20px'
			>
				Faveo
			</Heading>
			<Flex
				onSubmit={onSubmit}
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
					<FormControl>
						<FormLabel>Email</FormLabel>
						<Input
							ref={emailRef}
							type='text'
						/>
						<FormErrorMessage>Email Not Found</FormErrorMessage>
					</FormControl>
					<FormControl>
						<FormLabel>Password</FormLabel>
						<Input
							ref={passwordRef}
							type='password'
							minLength={4}
						/>
					</FormControl>
				</Stack>
				<Button
					type='submit'
					colorScheme='blue'
				>
					Login
				</Button>
			</Flex>
			<Box
				userSelect={'none'}
				pos='absolute'
				h='100%'
				w='100%'
				objectFit='cover'
				zIndex={0}
				opacity={0.2}
				bottom={0}
				backgroundImage={Wave}
			/>
		</Flex>
	);
};

export default Login;
