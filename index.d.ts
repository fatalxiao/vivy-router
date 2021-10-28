export interface VivyRouterPluginOption {

    /**
     * history of Vivy router plugin to handle router
     */
    history?: Object

}

/**
 * Create Vivy router plugin
 * @param options
 */
export default function VivyRouter(options?: VivyRouterPluginOption);
