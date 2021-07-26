/**
 * @file index.js
 */

// Vendors
import {connectRouter, routerMiddleware} from 'connected-react-router';

/**
 * Default Vivy router options
 * @type {{modelNameSpace: string}}
 */
const DEFAULT_OPTIONS = {
    modelNameSpace: 'router'
};

/**
 * Create Vivy router plugin
 * @param options
 * @returns {{}}
 */
export default function createVivyRouterPlugin(options = {}) {

    const op = {...DEFAULT_OPTIONS, ...options};

    const {modelNameSpace, history} = op;

    return {
        extraMiddlewares: [
            routerMiddleware(history)
        ],
        extraReducers: {
            [modelNameSpace]: connectRouter(history)
        }

    };

}
