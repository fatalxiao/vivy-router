/**
 * @file index.js
 */

// Vendors
import {connectRouter, routerMiddleware} from 'connected-react-router';

/**
 * Create Vivy router plugin
 * @param options {Object}
 * @returns {Object}
 */
export default function createVivyRouterPlugin(options = {}) {

    const op = {...options};

    const {history} = op;

    if (!history) {
        console.error('History in options for Vivy router plugin is required.');
    }

    return {
        onCreateStore: store => store.history = history,
        extraMiddlewares: [
            routerMiddleware(history)
        ],
        extraReducers: {
            router: connectRouter(history)
        }
    };

}
