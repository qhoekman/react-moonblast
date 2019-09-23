import { DiagonalHero } from '@layout/DiagonalHero';
import { Paper } from '@layout/Paper';
import { boolean, select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';

import { Box } from '../layout/Box';

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