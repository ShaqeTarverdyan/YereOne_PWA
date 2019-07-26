import React from 'react';
import { storiesOf } from '@storybook/react';
import { GalleryItem } from '../item';
import defaultClasses from '../item.css';

const stories = storiesOf('GalleryItem', module);

stories.add('Gallery Item', () => (
    <GalleryItem 
        classes={defaultClasses}
        item={item}
    />
));









