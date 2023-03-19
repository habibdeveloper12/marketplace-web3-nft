export type NFTCardTypes = {
  saleType: string;
  heart: boolean;
  deal: string;
  _id: string;
  no_of_likes: number;
  citizen: string;
  sale_price?: number;
  off_percent?: string;
  image: string;
  saleHours: string;
  price: {
    token: string;
    amount: number;
  };
  tags: Array<string>;
  nftId: string;
};

export const shopNftData: Array<NFTCardTypes> = [
  {
    saleType: 'USER SALE',
    heart: false,
    image: 'marketplace-assets/assets/images/cig.png',
    deal: 'Hot Deal',
    nftId: '',
    tags: [''],
    _id: '#B8/457843',
    no_of_likes: 93,
    citizen: 'Enoch Citizen',
    price: {
      token: 'ETH',
      amount: 10
    },
    saleHours: '2022-11-18T13:07:56.188Z'
  },
  {
    saleType: 'USER SALE',
    heart: false,
    image: 'marketplace-assets/assets/images/cig.png',
    deal: 'Hot Deal',
    nftId: '',
    tags: [''],
    _id: '#B8/457843',
    saleHours: '2022-11-18T13:07:56.188Z',
    no_of_likes: 93,
    citizen: 'Enoch Citizen',
    price: {
      token: 'ETH',
      amount: 10
    }
  },
  {
    saleType: 'USER SALE',
    heart: false,
    image: 'marketplace-assets/assets/images/cig.png',
    deal: 'Hot Deal',
    nftId: '',
    tags: [''],
    _id: '#B8/457843',
    saleHours: '2022-11-18T13:07:56.188Z',
    no_of_likes: 93,
    citizen: 'Enoch Citizen',
    price: {
      token: 'ETH',
      amount: 10
    }
  },
  {
    saleType: 'USER SALE',
    heart: false,
    image: 'marketplace-assets/assets/images/cig.png',
    deal: 'Hot Deal',
    nftId: '',
    tags: [''],
    _id: '#B8/457843',
    saleHours: '2022-11-18T13:07:56.188Z',
    no_of_likes: 93,
    citizen: 'Enoch Citizen',
    price: {
      token: 'ETH',
      amount: 10
    }
  },
  {
    saleType: 'USER SALE',
    heart: false,
    image: 'marketplace-assets/assets/images/cig.png',
    deal: 'Hot Deal',
    nftId: '',
    tags: [''],
    _id: '#B8/457843',
    saleHours: '2022-11-18T13:07:56.188Z',
    no_of_likes: 93,
    citizen: 'Enoch Citizen',
    price: {
      token: 'ETH',
      amount: 10
    }
  },
  {
    saleType: 'USER SALE',
    heart: false,
    image: 'marketplace-assets/assets/images/cig.png',
    deal: 'Hot Deal',
    nftId: '',
    tags: [''],
    _id: '#B8/457843',
    saleHours: '2022-11-18T13:07:56.188Z',
    no_of_likes: 93,
    citizen: 'Enoch Citizen',
    price: {
      token: 'ETH',
      amount: 10
    }
  }
];

export const nftCollections: Array<NFTCardTypes> = [
  {
    saleType: 'AUCTION',
    heart: false,
    image: 'marketplace-assets/assets/images/cig.png',
    deal: 'Hot Deal',
    nftId: '',
    tags: [''],
    _id: '#B8/457843',
    saleHours: '2022-11-18T13:07:56.188Z',
    no_of_likes: 93,
    citizen: 'Enoch Citizen',
    price: {
      token: 'ETH',
      amount: 10
    }
  },
  {
    saleType: 'AUCTION',
    heart: true,
    image: 'marketplace-assets/assets/images/xray.png',
    deal: 'Hot Deal',
    nftId: '',
    tags: [''],
    _id: '#B8/4578444',
    saleHours: '2022-11-18T13:07:56.188Z',
    no_of_likes: 93,
    citizen: 'Enoch Citizen',
    price: {
      token: 'ETH',
      amount: 10
    }
  },
  {
    saleType: 'SALE',
    deal: 'Hot Deal',
    heart: false,
    nftId: '',
    tags: [''],
    _id: '#B8/4578445',
    saleHours: '2022-11-18T13:07:56.188Z',
    image: 'marketplace-assets/assets/images/cock.png',
    no_of_likes: 93,
    citizen: 'Enoch Citizen',
    price: {
      token: 'ETH',
      amount: 10
    },
    sale_price: 260,
    off_percent: '15% OFF'
  },
  {
    saleType: 'BUY',
    deal: 'Hot Deal',
    no_of_likes: 93,
    image: 'marketplace-assets/assets/images/jinx.png',
    nftId: '',
    tags: [''],
    _id: '#B8/457846',
    saleHours: '2022-11-18T13:07:56.188Z',
    citizen: 'Enoch Citizen',
    price: {
      token: 'ETH',
      amount: 10
    },
    heart: false
  },
  {
    saleType: 'SALE',
    deal: 'Hot Deal',
    nftId: '',
    tags: [''],
    _id: '#B8/4578447',
    saleHours: '2022-11-18T13:07:56.188Z',
    citizen: 'Enoch Citizen',
    heart: false,
    no_of_likes: 93,
    price: {
      token: 'ETH',
      amount: 10
    },
    image: 'marketplace-assets/assets/images/watch.png',
    sale_price: 260,
    off_percent: '15% OFF'
  },
  {
    saleType: 'BUY',
    deal: 'Hot Deal',
    heart: false,
    citizen: 'Enoch Citizen',
    no_of_likes: 93,
    nftId: '',
    tags: [''],
    _id: '#B8/457848',
    saleHours: '2022-11-18T13:07:56.188Z',
    image: 'marketplace-assets/assets/images/noor.png',
    price: {
      token: 'ETH',
      amount: 10
    }
  },
  {
    saleType: 'SALE',
    image: 'marketplace-assets/assets/images/Lapi.png',
    deal: 'Hot Deal',
    nftId: '',
    tags: [''],
    _id: '#B8/4578449',
    saleHours: '2022-11-18T13:07:56.188Z',
    heart: false,
    no_of_likes: 93,
    citizen: 'Enoch Citizen',
    price: {
      token: 'ETH',
      amount: 10
    },
    sale_price: 260,
    off_percent: '15% OFF'
  },
  {
    saleType: 'BUY',
    heart: false,
    deal: 'Hot Deal',
    no_of_likes: 93,
    nftId: '',
    tags: [''],
    _id: '#B8/457850',
    saleHours: '2022-11-18T13:07:56.188Z',
    image: 'marketplace-assets/assets/images/UP.png',
    citizen: 'Enoch Citizen',
    price: {
      token: 'ETH',
      amount: 10
    }
  },
  {
    saleType: 'SALE',
    deal: 'Hot Deal',
    nftId: '',
    tags: [''],
    _id: '#B8/4578451',
    saleHours: '2022-11-18T13:07:56.188Z',
    heart: true,
    citizen: 'Enoch Citizen',
    no_of_likes: 93,
    price: {
      token: 'ETH',
      amount: 10
    },
    sale_price: 260,
    image: 'marketplace-assets/assets/images/Beard.png',
    off_percent: '15% OFF'
  }
];

export const recommendedNfts = [
  {
    saleType: 'AUCTION',
    no_of_likes: 93,
    heart: false,
  _id: "6347d4569dcec0270f677bed",
  name: "nft",
  description: "hello",
  image: 'marketplace-assets/assets/images/cig.png',
  supply: "111",
  externalLinks: [
    "www.goc"
  ],
  tags : [
    "t1"
  ],
  price: {
    token: 'ETH',
    amount: 10
  },
  properties : {
    "nftType": "n2",
    "sex": "male",
    "race": "e"
  },
  createdAt : "2022-10-13T09:03:18.592Z",
  creator : "Enoch Studio",
  seller : "Enoch"
},
{
  saleType: 'AUCTION',
  no_of_likes: 93,
  heart: false,
  _id: "6347d4569dcec0270f677bed",
  name: "nft",
  description: "hello",
  image: 'marketplace-assets/assets/images/xray.png',
  supply: "111",
  externalLinks: [
    "www.goc"
  ],
  tags : [
    "t1"
  ],
  properties : {
    "nftType": "n2",
    "sex": "male",
    "race": "e"
  },
  createdAt : "2022-10-13T09:03:18.592Z",
  creator : "Enoch Studio",
  seller : "Enoch",
  price: {
    token: 'ETH',
    amount: 10
  }
},
{
  saleType: 'AUCTION',
  no_of_likes: 93,
  heart: false,
  _id: "6347d4569dcec0270f677bed",
  name: "nft",
  description: "hello",
  image: 'marketplace-assets/assets/images/cock.png',
  supply: "111",
  externalLinks: [
    "www.goc"
  ],
  tags : [
    "t1"
  ],
  properties : {
    "nftType": "n2",
    "sex": "male",
    "race": "e"
  },
  createdAt : "2022-10-13T09:03:18.592Z",
  creator : "Enoch Studio",
  seller : "Enoch",
  price: {
    token: 'ETH',
    amount: 10
  }
},
{
  saleType: 'AUCTION',
  no_of_likes: 93,
  heart: false,
  _id: "6347d4569dcec0270f677bed",
  name: "nft",
  description: "hello",
  image: 'marketplace-assets/assets/images/cock.png',
  supply: "111",
  externalLinks: [
    "www.goc"
  ],
  tags : [
    "t1"
  ],
  properties : {
    "nftType": "n2",
    "sex": "male",
    "race": "e"
  },
  createdAt : "2022-10-13T09:03:18.592Z",
  creator : "Enoch Studio",
  seller : "Enoch",
  price: {
    token: 'ETH',
    amount: 10
  }
},
{
  saleType: 'AUCTION',
  no_of_likes: 93,
  heart: false,
  _id: "6347d4569dcec0270f677bed",
  name: "nft",
  description: "hello",
  image: 'marketplace-assets/assets/images/cock.png',
  supply: "111",
  externalLinks: [
    "www.goc"
  ],
  tags : [
    "t1"
  ],
  properties : {
    "nftType": "n2",
    "sex": "male",
    "race": "e"
  },
  createdAt : "2022-10-13T09:03:18.592Z",
  creator : "Enoch Studio",
  seller : "Enoch",
  price: {
    token: 'ETH',
    amount: 10
  }
},
]

export const collectionData = [
  {
    nftId: '',
    tags: [''],
    _id: '034',
    saleHours: '2022-11-18T13:07:56.188Z',
    CardImage: 'marketplace-assets/assets/images/citizon.png',
    CardTag: 'Enoch Citizen',
    saleType: 'COLLECTION'
  },
  {
    nftId: '',
    tags: [''],
    _id: '143',
    saleHours: '2022-11-18T13:07:56.188Z',
    CardImage: 'marketplace-assets/assets/images/twoguys.png',
    CardTag: 'Harmony',
    saleType: 'COLLECTION'
  },
  {
    nftId: '',
    tags: [''],
    _id: '245',
    saleHours: '2022-11-18T13:07:56.188Z',
    CardImage: 'marketplace-assets/assets/images/endure.png',
    CardTag: 'Endurance',
    saleType: 'COLLECTION'
  },
  {
    nftId: '',
    tags: [''],
    _id: '354',
    saleHours: '2022-11-18T13:07:56.188Z',
    CardImage: 'marketplace-assets/assets/images/pandaforce.png',
    CardTag: '2060',
    saleType: 'COLLECTION'
  },
  {
    nftId: '',
    tags: [''],
    _id: '454',
    saleHours: '2022-11-18T13:07:56.188Z',
    CardImage: 'marketplace-assets/assets/images/jiniese.png',
    CardTag: 'Infinity',
    saleType: 'COLLECTION'
  },
  {
    nftId: '',
    tags: [''],
    _id: '523',
    saleHours: '2022-11-18T13:07:56.188Z',
    CardImage: 'marketplace-assets/assets/images/solortero.png',
    CardTag: 'Aztec',
    saleType: 'COLLECTION'
  },
  {
    nftId: '',
    tags: [''],
    _id: '656',
    saleHours: '2022-11-18T13:07:56.188Z',
    CardImage: 'marketplace-assets/assets/images/purplish.png',
    CardTag: 'Purple',
    saleType: 'COLLECTION'
  },
  {
    nftId: '',
    tags: [''],
    _id: '775',
    saleHours: '2022-11-18T13:07:56.188Z',
    CardImage: 'marketplace-assets/assets/images/agteisd.png',
    CardTag: 'Quantum',
    saleType: 'COLLECTION'
  },
  {
    nftId: '',
    tags: [''],
    _id: '832',
    saleHours: '2022-11-18T13:07:56.188Z',
    CardImage: 'marketplace-assets/assets/images/citydelgaame.png',
    CardTag: 'CITADEL',
    saleType: 'COLLECTION'
  },
  {
    nftId: '',
    tags: [''],
    _id: '965',
    saleHours: '2022-11-18T13:07:56.188Z',
    CardImage: 'marketplace-assets/assets/images/grenades.png',
    CardTag: 'Big Bang',
    saleType: 'COLLECTION'
  },
  {
    nftId: '',
    tags: [''],
    _id: '104',
    saleHours: '2022-11-18T13:07:56.188Z',
    CardImage: 'marketplace-assets/assets/images/couples.png',
    CardTag: 'Babylon',
    saleType: 'COLLECTION'
  },
  {
    nftId: '',
    tags: [''],
    _id: '116',
    saleHours: '2022-11-18T13:07:56.188Z',
    CardImage: 'marketplace-assets/assets/images/karchgi.png',
    CardTag: 'City of light',
    saleType: 'COLLECTION'
  }
];

export const collectionLatestData = [
  'All',
  'Top Collection',
  'Last 7 Days',
  'Last 3 Months',
  '2022',
  '2021'
];

export const collectionNFTData = [
  {
    saleType: 'AUCTION',
    heart: false,
    image: 'marketplace-assets/assets/images/detailed-collection-card-img.png',
    deal: 'Hot Deal',
    nftId: '',
    tags: [''],
    _id: '#B8/457843',
    saleHours: '2022-11-18T13:07:56.188Z',
    no_of_likes: 93,
    citizen: 'Enoch Citizen',
    price: {
      token: 'ETH',
      amount: 10
    }
  },
  {
    saleType: 'AUCTION',
    heart: true,
    image: 'marketplace-assets/assets/images/detailed-collection-card-img.png',
    deal: 'Hot Deal',
    nftId: '',
    tags: [''],
    _id: '#B8/4578444',
    saleHours: '2022-11-18T13:07:56.188Z',
    no_of_likes: 93,
    citizen: 'Enoch Citizen',
    price: {
      token: 'ETH',
      amount: 10
    }
  },
  {
    saleType: 'SALE',
    deal: 'Hot Deal',
    heart: false,
    nftId: '',
    tags: [''],
    _id: '#B8/4578445',
    saleHours: '2022-11-18T13:07:56.188Z',
    image: 'marketplace-assets/assets/images/detailed-collection-card-img.png',
    no_of_likes: 93,
    citizen: 'Enoch Citizen',
    price: {
      token: 'ETH',
      amount: 10
    },
    sale_price: 260,
    off_percent: '15% OFF'
  },
  {
    saleType: 'SALE',
    deal: 'Hot Deal',
    heart: false,
    nftId: '',
    tags: [''],
    _id: '#B8/4578445',
    saleHours: '2022-11-18T13:07:56.188Z',
    image: 'marketplace-assets/assets/images/detailed-collection-card-img.png',
    no_of_likes: 93,
    citizen: 'Enoch Citizen',
    price: {
      token: 'ETH',
      amount: 10
    },
    sale_price: 260,
    off_percent: '15% OFF'
  },
  {
    saleType: 'SALE',
    deal: 'Hot Deal',
    heart: false,
    nftId: '',
    tags: [''],
    _id: '#B8/4578445',
    saleHours: '2022-11-18T13:07:56.188Z',
    image: 'marketplace-assets/assets/images/detailed-collection-card-img.png',
    no_of_likes: 93,
    citizen: 'Enoch Citizen',
    price: {
      token: 'ETH',
      amount: 10
    },
    sale_price: 260,
    off_percent: '15% OFF'
  },
  {
    saleType: 'SALE',
    deal: 'Hot Deal',
    heart: false,
    nftId: '',
    tags: [''],
    _id: '#B8/4578445',
    saleHours: '2022-11-18T13:07:56.188Z',
    image: 'marketplace-assets/assets/images/detailed-collection-card-img.png',
    no_of_likes: 93,
    citizen: 'Enoch Citizen',
    price: {
      token: 'ETH',
      amount: 10
    },
    sale_price: 260,
    off_percent: '15% OFF'
  },
  { saleType: 'ENOCH CITIZEN' },
  { saleType: 'ENOCH CITIZEN' },
  { saleType: 'ENOCH CITIZEN' },
  { saleType: 'ENOCH CITIZEN' },
  { saleType: 'ENOCH CITIZEN' },
  { saleType: 'ENOCH CITIZEN' },
];
export const avatarPackData = [
  { saleType: 'ENOCH CITIZEN',enochTitle:'The Perfect Master ',id:'0' },
  { saleType: 'ENOCH CITIZEN',enochTitle:'The Perfect Master',id:'1' },
  { saleType: 'ENOCH CITIZEN',enochTitle:'The Perfect Master ',id:'2' },
  { saleType: 'ENOCH CITIZEN',enochTitle:'The Perfect Master ',id:'3' },
  { saleType: 'ENOCH CITIZEN',enochTitle:'The Perfect Master ',id:'4' },
  { saleType: 'ENOCH CITIZEN',enochTitle:'The Perfect Master ',id:'5' },
  { saleType: 'ENOCH CITIZEN',enochTitle:'The Perfect Master ',id:'6' },
  { saleType: 'ENOCH CITIZEN',enochTitle:'The Perfect Master ',id:'7' },
  { saleType: 'ENOCH CITIZEN',enochTitle:'The Perfect Master ',id:'8' },
  { saleType: 'ENOCH CITIZEN',enochTitle:'The Perfect Master ',id:'9' },
]