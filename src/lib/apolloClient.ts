/* eslint-disable */
import { useMemo } from 'react'
import { ApolloClient, HttpLink, InMemoryCache, from, DataProxy } from '@apollo/client'
import { onError } from '@apollo/client/link/error'
import {
    NextSSRInMemoryCache,
    NextSSRApolloClient,
} from "@apollo/experimental-nextjs-app-support/ssr";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";


const httpLink = new HttpLink({
    uri: 'https://secondfront-admin-app-l2wpe.ondigitalocean.app/api/graphql/',
    credentials: 'same-origin', // Additional fetch() options like `credentials` or `headers`
})


export const { getClient } = registerApolloClient(() => {
    return new NextSSRApolloClient({
        cache: new NextSSRInMemoryCache(),
        link: httpLink,
    });
});
