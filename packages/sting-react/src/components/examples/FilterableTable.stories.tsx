import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import FilterableTable from './FilterableTable';

const meta = {
  title: 'Examples/FilterableTable',
  component: FilterableTable,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof FilterableTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
}; 