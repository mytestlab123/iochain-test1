// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import Mytestlab123Iochaintest1Iochaintest1 from './mytestlab123.iochaintest1.iochaintest1'


export default { 
  Mytestlab123Iochaintest1Iochaintest1: load(Mytestlab123Iochaintest1Iochaintest1, 'mytestlab123.iochaintest1.iochaintest1'),
  
}


function load(mod, fullns) {
    return function init(store) {        
        if (store.hasModule([fullns])) {
            throw new Error('Duplicate module name detected: '+ fullns)
        }else{
            store.registerModule([fullns], mod)
            store.subscribe((mutation) => {
                if (mutation.type == 'common/env/INITIALIZE_WS_COMPLETE') {
                    store.dispatch(fullns+ '/init', null, {
                        root: true
                    })
                }
            })
        }
    }
}