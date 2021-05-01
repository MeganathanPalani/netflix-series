import React from 'react';
import { render } from '../../enzyme';

import Card from '../Card';

describe('Our test suite', () => {
    it('renders all the mocked series', () => {
        const wrapper = render(
            <Card 
                id={269}
                title="peaky"
                image="https://static.tvmaze.com/uploads/images/medium_portrait/48/122213.jpg"
                description="<p>An epic gangster drama set in the lawless streets of 1920s Birmingham.</p>"
                navigateToDetail={() => {}}
            />
        );
        expect(wrapper.find('.card')).toBeDefined();
        expect(wrapper.find('.title').get(0).children[0].data).toEqual("peaky");
    })
})