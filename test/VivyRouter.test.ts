'use strict';

import Vivy from 'vivy';
import VivyRouter from 'src';

import {createMemoryHistory} from 'history';

test('Use Vivy Router by memory history', () => {

    const history = createMemoryHistory();
    const vivy = Vivy();

    vivy.use(VivyRouter({
        history
    }));

    const store = vivy.createStore();

    expect(
        store?.history
    ).toEqual(
        history
    );

});
