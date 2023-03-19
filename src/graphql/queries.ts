import { gql } from '@apollo/client';

export const FETCH_USER_INFO = gql`
  query getUser($id: String!) {
    getUser(id: $id) {
      _id
      isOnboardingCompleted
      loginCounter
      firstName
      lastName
      avatar
      email
      emailSecondary
      dateOfBirth
      phoneNumber
      phoneNumberSecondary
      walletAddress
      country
      accountType
      cardType
      userId
      timeZone
      address1
      address2
      city
      accountStatus
      kycStatus
      autoPlayVideos
      username
    }
  }
`;
