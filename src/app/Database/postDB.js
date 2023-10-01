import React from 'react';

// backend imports
import {API} from 'aws-amplify';
import {GRAPHQL_AUTH_MODE} from "@aws-amplify/api";
import * as mutations from '../../graphql/mutations';
import * as queries from '../../graphql/queries';

export function addInformation(newPostInfo){
    return API.graphql({
              query: mutations.createPostInfo,
              variables: {input: newPostInfo},
              authMode: GRAPHQL_AUTH_MODE.API_KEY
    });
} 

export async function allPostInformation(){
     return await API.graphql({
         query: queries.listPostInfos,
         authMode: GRAPHQL_AUTH_MODE.API_KEY
     });
}