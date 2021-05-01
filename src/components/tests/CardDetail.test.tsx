import React from 'react';
import { render } from '../../enzyme';

import CardDetail from '../CardDetail';

describe('Our test suite', () => {
    it('renders all the mocked series detail', () => {
        const seasons = [
            {
                number: 1,
                episodes: 6,
                premiereDate: "2013-09-12",
                endDate: "2013-10-17",
                network: "BBC"
            }
        ]
        const wrapper = render(
            <CardDetail 
                id={269}
                title="peaky"
                image="https://static.tvmaze.com/uploads/images/medium_portrait/48/122213.jpg"
                description="<p>An epic gangster drama set in the lawless streets of 1920s Birmingham.</p>"
                navigateToDetail={() => {}}
                seasons={seasons}
                selectedSeason={() => {}}
                seasonValue={1}

            />
        );
        expect(wrapper.find('.card-detail')).toBeDefined();
        expect(wrapper.find('.title').get(0).children[0].data).toEqual("peaky");
    })
})