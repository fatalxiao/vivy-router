/**
 * @file index.ts
 * @author Liangxiaojun
 */

// Vendors
import {connectRouter, routerMiddleware} from 'connected-react-router';

// Types
import {VivyRouterPluginOption} from './types';
import {VivyPlugin} from 'vivy';

export * from 'connected-react-router';
export {ConnectedRouter} from 'connected-react-router';
export * from './types';

/**
 * Create Vivy router plugin
 * @param options
 */
export default function VivyRouter(options: VivyRouterPluginOption = {}): VivyPlugin {

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
