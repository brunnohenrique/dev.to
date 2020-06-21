import { h } from 'preact';

import crayons from './crayons.md';
import components from './components.md';
import styling from './styling.md';

import '../../storybook-utilities/designSystem.scss';

export default {
  title: '1_Guidelines',
  parameters: {
    notes: {
      markdown: {
        Crayons: crayons,
        Components: components,
        Styling: styling,
      },
    },
  },
};

export const Crayons = () => (
  <p>See the notes section in the Storybook panel.</p>
);

Crayons.story = {
  name: 'documentation',
};
