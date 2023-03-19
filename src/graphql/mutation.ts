import { gql } from '@apollo/client';

export const ADD_WHITELIST = gql`
  mutation addEnochWhitelist($enochwhitelist: CreateEnochWhitelistInput!) {
    addEnochWhitelist(enochwhitelist: $enochwhitelist) {
      email
      is_sent
    }
  }
`;

export const ADD_WAITLIST = gql`
  mutation addEnochWaitlist($enochwaitlist: CreateEnochWaitlistInput!) {
    addEnochWaitlist(enochwaitlist: $enochwaitlist) {
      email
      is_sent
    }
  }
`;

export const ADD_NEWSLETTER = gql`
  mutation addEnochNewsletter($enochnewsletter: CreateEnochNewsletterInput!) {
    addEnochNewsletter(enochnewsletter: $enochnewsletter) {
      email
      is_sent
    }
  }
`;
