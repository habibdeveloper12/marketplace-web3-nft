export interface UserTypes {
  id: number;
  avatar: string;
  username: string;
  profilePicture: string;
  isPromoted: boolean;
  isVerified: boolean;
}

export const TrendingTopics = [
  {
    id: 1,
    avatar: '',
    username: '@djirridiant',
    isPromoted: true,
    isVerified: false
  }
];

export const suggestedUsers: UserTypes[] = [
  {
    id: 1,
    avatar: '',
    username: '@djirridiant',
    profilePicture:
      'https://images.unsplash.com/photo-1667324698552-14a7e7213211?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    isPromoted: true,
    isVerified: false
  },
  {
    id: 2,
    avatar: '',
    username: '@CurtisDaws',
    profilePicture:
      'https://images.unsplash.com/photo-1667324698552-14a7e7213211?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    isPromoted: false,
    isVerified: true
  },
  {
    id: 3,
    avatar: '',
    username: '@JaniceHum',
    profilePicture:
      'https://images.unsplash.com/photo-1667324698552-14a7e7213211?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    isPromoted: false,
    isVerified: false
  }
];

export const quickLinks = [
  {
    id: 1,
    text: 'Events',
    route: ''
  },
  {
    id: 2,
    text: 'Communities',
    route: ''
  },
  {
    id: 3,
    text: 'Marketplace',
    route: ''
  },
  {
    id: 4,
    text: 'Livezone',
    route: ''
  },
  {
    id: 5,
    text: 'Spheres',
    route: ''
  }
];
