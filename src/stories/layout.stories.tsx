import { PrimaryButton } from '@base/buttons/PrimaryButton';
import { Box } from '@layout/Box';
import { Center, IntrinsicCenter } from '@layout/Center';
import { DiagonalHero } from '@layout/DiagonalHero';
import { Paper } from '@layout/Paper';
import { Stack } from '@layout/Stack';
import { boolean, select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';

storiesOf('Layout', module)
	.add(
		'Diagonal Hero',
		() => (
			<>
				<DiagonalHero background={'greyLighter'}>
					<div>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eum sed eligendi! Maxime,
						minima explicabo obcaecati quas a mollitia velit possimus nobis rerum dolores nam nihil
						voluptas. Cupiditate, officia ipsa.
					</div>
				</DiagonalHero>
				<DiagonalHero background={'white'}>
					<div>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eum sed eligendi! Maxime,
						minima explicabo obcaecati quas a mollitia velit possimus nobis rerum dolores nam nihil
						voluptas. Cupiditate, officia ipsa.
					</div>
				</DiagonalHero>
			</>
		),
		{ info: { inline: true } }
	)
	.add('Box', () => (
		<Box padding={select<number>('padding', [0, 1, 2, 3, 4, 6, 8, 10, 12], 0)}>
			<Box>Head</Box>
			<Box>Body</Box>
		</Box>
	))
	.add('Stack', () => (
		<Stack
			space={select<'sm' | 'lg'>('space', ['sm', 'lg'], 'sm')}
			recursive={boolean('recursive', false)}
		>
			<span>Begin</span>
			<Stack>
				<span>Content</span>
			</Stack>
			<Stack>
				<span>Content</span>
			</Stack>
			<span>End</span>
		</Stack>
	))
	.add('Center', () => (
		<Box>
			<Center text={boolean('text', false)}>
				<Stack>
					<h1>Hello World</h1>
					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe quis quae expedita quia
						soluta. Nisi dolorem ducimus sequi porro et nobis consequatur alias voluptates quaerat
						at magni non, beatae maxime.
					</p>
					<IntrinsicCenter>
						<PrimaryButton color='white' background={'blueDark'}>
							Press me
						</PrimaryButton>
					</IntrinsicCenter>
				</Stack>
			</Center>
		</Box>
	))
	.add(
		'Paper',
		() => (
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					backgroundColor: 'lightgrey',
					maxWidth: 768,
					margin: '0 auto'
				}}
			>
				<Paper
					elevation={select('elevation', ['sm', 'md', 'lg'], 'sm')}
					rounded={boolean('rounded', true)}
				>
					<div>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eum sed eligendi! Maxime,
						minima explicabo obcaecati quas a mollitia velit possimus nobis rerum dolores nam nihil
						voluptas. Cupiditate, officia ipsa.
					</div>
				</Paper>
			</div>
		),
		{ info: { inline: true } }
	);
