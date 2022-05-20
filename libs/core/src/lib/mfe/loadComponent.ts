declare const __webpack_init_sharing__: (shareScope: string) => Promise<void>;
declare const __webpack_share_scopes__: { default: any };

async function loadModule(url: string): Promise<any> {
  return import(/* webpackIgnore:true */ url);
}

export function loadComponent(remoteUrl: string, module: string) {
  return async () => {
    // Initializes the share scope. This fills it with known provided modules from this build and all remotes
    await __webpack_init_sharing__('default');
    const container = await loadModule(remoteUrl);
    // Initialize the container, it may provide shared modules
    await container.init(__webpack_share_scopes__.default);
    const factory = await container.get(module);
    const Module = factory();
    return Module;
  };
}
