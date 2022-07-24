import React, {useState} from 'react';
import {ComponentMeta} from '@storybook/react';
import {Rating, RatingValueType} from './Rating';


export default {
    title: 'Rating stories',
    component: Rating,
} as ComponentMeta<typeof Rating>;

export const EmptyRating = () => <Rating value={0} onClick={x => x}/>;
export const Rating1 = () => <Rating value={1} onClick={x => x}/>;
export const Rating2 = () => <Rating value={2} onClick={x => x}/>;
export const Rating3 = () => <Rating value={3} onClick={x => x}/>;
export const Rating4 = () => <Rating value={4} onClick={x => x}/>;
export const Rating5 = () => <Rating value={5} onClick={x => x}/>;
export const RatingChanging = () => {
    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    return <Rating value={ratingValue} onClick={setRatingValue}/>;
}

