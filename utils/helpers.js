export function getPackMetaInfo (pack) {
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
    }
  
    return typeof pack === 'undefined'
      ? info
      : info[pack]
  }