import { boolean, select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import Theme from 'react-tailwhip';

import DiagonalHero from '../layout/DiagonalHero';
import Paper from '../layout/Paper';

const Colors = Object.keys(Theme.colors);

storiesOf('Layout', module)
  .add(
    'Diagonal Hero',
    () => (
      <>
        <DiagonalHero background={'greyLighter'}>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eum sed eligendi! Maxime, minima explicabo
            obcaecati quas a mollitia velit possimus nobis rerum dolores nam nihil voluptas. Cupiditate, officia ipsa.
          </div>
        </DiagonalHero>
        <DiagonalHero background={'greyLight'}>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eum sed eligendi! Maxime, minima explicabo
            obcaecati quas a mollitia velit possimus nobis rerum dolores nam nihil voluptas. Cupiditate, officia ipsa.
          </div>
        </DiagonalHero>
      </>
    ),
    { info: { inline: true } }
  )
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
        <Paper elevation={select('elevation', ['sm', 'md', 'lg'], 'sm')} rounded={boolean('rounded', true)}>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eum sed eligendi! Maxime, minima explicabo
            obcaecati quas a mollitia velit possimus nobis rerum dolores nam nihil voluptas. Cupiditate, officia ipsa.
          </div>
        </Paper>
      </div>
    ),
    { info: { inline: true } }
  );
