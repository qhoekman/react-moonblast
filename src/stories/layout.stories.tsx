import { PrimaryButton } from '@base/buttons/PrimaryButton';
import { Box } from '@layout/Box';
import { Center, IntrinsicCenter } from '@layout/Center';
import { Cluster } from '@layout/Cluster';
import { Cover } from '@layout/Cover';
import { DiagonalHero } from '@layout/DiagonalHero';
import { Paper } from '@layout/Paper';
import { Sidebar } from '@layout/Sidebar';
import { Stack } from '@layout/Stack';
import { Switcher } from '@layout/Switcher';
import { boolean, select, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';

import logo from '../../public/logo.png';

const justifyValues = ['flex-start', 'flex-end', 'space-between', 'stretch', 'center'];
const paddingValues = ['0', '1', '2', '3', '4', '6', '8', '10', '12'];
const widthValues = [
	'1',
	'2',
	'3',
	'4',
	'6',
	'8',
	'10',
	'12',
	'16',
	'24',
	'32',
	'48',
	'64',
	'92',
	'128',
	'1/2',
	'1/3',
	'2/3',
	'1/4',
	'3/4',
	'1/5',
	'2/5',
	'3/5',
	'4/5',
	'1/6',
	'5/6'
];
const heightValues = [
	'1',
	'2',
	'3',
	'4',
	'6',
	'8',
	'10',
	'12',
	'16',
	'24',
	'32',
	'48',
	'64',
	'92',
	'screen',
	'full'
];
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
		<Box padding={select<any>('padding', paddingValues, 0)}>
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
	.add('Cluster', () => (
		<Cluster
			justify={select('First Justify', justifyValues, 'space-between')}
			align={select('First Align', justifyValues, 'center')}
			space={select<any>('First Spacing', paddingValues, 1)}
		>
			<div>
				<img src={logo} alt='logo' height={64} />
				<Cluster
					justify={select('Second Justify', justifyValues, 'flex-end')}
					align={select('Second Align', justifyValues, 'center')}
					space={select<any>('Second Spacing', paddingValues, 1)}
				>
					<ul style={{ listStyle: 'none', padding: 0 }}>
						<li>Layout</li>
						<li>CSS</li>
						<li>Web Design</li>
						<li>Code</li>
						<li>Front-end</li>
						<li>Development</li>
					</ul>
				</Cluster>
			</div>
		</Cluster>
	))
	.add('Sidebar', () => (
		<>
			<Sidebar
				width={select<any>('width', widthValues, '32')}
				minWidth={select<any>('minWidth', widthValues, '1/2')}
				space={select<any>('space', paddingValues, '1')}
				noStretch={boolean('noStretch', false)}
				side={select<any>('side', ['left', 'right'], 'left')}
			>
				<div>
					<img
						src='https://images.unsplash.com/photo-1569156519861-5a63ce952934?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
						width={150}
						height={92}
						alt='Shoes'
						srcSet=''
					/>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum voluptates inventore
						reiciendis officiis quia sit dicta cumque tempora, laborum incidunt sunt esse illum enim
						molestias commodi corporis consequuntur harum laboriosam?
					</p>
				</div>
			</Sidebar>
		</>
	))
	.add('Switcher', () => (
		<Switcher
			threshold={select<any>('threshold', widthValues, '128')}
			space={select<any>('space', paddingValues, '4')}
		>
			<div>
				<Box>
					<h1>Hello World #1</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptates cupiditate
						doloremque sapiente ea illo omnis molestias ipsa! Quis quam ipsa dolorum qui officia
						incidunt illo maxime odit corporis iusto?
					</p>
				</Box>
				<Box>
					<h1>Hello World #2</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptates cupiditate
						doloremque sapiente ea illo omnis molestias ipsa! Quis quam ipsa dolorum qui officia
						incidunt illo maxime odit corporis iusto?
					</p>
				</Box>
				<Box>
					<h1>Hello World #3</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptates cupiditate
						doloremque sapiente ea illo omnis molestias ipsa! Quis quam ipsa dolorum qui officia
						incidunt illo maxime odit corporis iusto?
					</p>
				</Box>
			</div>
		</Switcher>
	))
	.add('Cover', () => (
		<Cover
			selector={text('selector', 'h1')}
			minHeight={select('minHeight', heightValues, '92')}
			space={select<any>('space', paddingValues, '4')}
			padding={select<any>('padding', paddingValues, '4')}
		>
			<Cluster justify={'space-between'} align={'center'} space={'1'}>
				<div>
					<img src={logo} alt='logo' height={64} />
					<Cluster justify={'flex-end'} align={'center'} space={'1'}>
						<ul style={{ listStyle: 'none', padding: 0 }}>
							<li>Layout</li>
							<li>CSS</li>
							<li>Web Design</li>
							<li>Code</li>
							<li>Front-end</li>
							<li>Development</li>
						</ul>
					</Cluster>
				</div>
			</Cluster>
			<h1 style={{ textAlign: 'center' }}>Welcome to my site, Visitor!</h1>

			<p style={{ textAlign: 'center' }}>What I Do?</p>
		</Cover>
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
