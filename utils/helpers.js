export function getDeckMetaInfo (pack) {
    const info = {
      baralho1: {
        displayName: 'Run1',
      },
      baralho2: {
        displayName: 'Run2',
      },
      baralho3: {
        displayName: 'Run3',
      },
      baralho4: {
        displayName: 'Run3',
      },
      baralho5: {
        displayName: 'Run3',
      },
      baralho6: {
        displayName: 'Run3',
      },
      baralho7: {
        displayName: 'Run3',
      },
    }
  
    return typeof pack === 'undefined'
      ? info
      : info[pack]
  }