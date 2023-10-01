'use client';
import Link from 'next/link';
import React, {useState} from 'react';
import { Button, Alert, Heading, Divider, Input, Label, Grid, TextAreaField, Head, Flex } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import {ImPlus} from 'react-icons/im';


const PostCreationPage = () => {
    
  
  return (
        <Flex as = "form" direction = "row" justifyContent = "space-evenly" alignContent = "stretch">
            <Flex direction = "row">
                <Heading level={1} color= "blue"> Post Creation</Heading>
            </Flex>
            <Divider orientation = "vertical"/>
            <Flex direction = "row">
            <Flex direction = "column" justifyContent = "center" alignContent = "center">
                <Label htmlFor = "title">Title:</Label>
                <Input id = "title"
                    variation="quiet"
                    size = "large"
                    placeholder = "Enter title .."
                    isRequired = {true}/>
                <br /><br />
                <Label htmlFor = "tags">Tags/Key Words:</Label>
                <Input id = "tags"
                    variation="quiet"
                    size = "large"
                    placeholder = "Enter tags/key words .." 
                    isRequired = {true}/>
                <br /><br />
                <TextAreaField label = "Description:"
                    maxLength = {250}
                    rows = {6}
                    placeholder = "Enter a description .." 
                    isRequired = {true}/>
                <Button variation = "primary" type = "submit">Create</Button>
            </Flex>
            </Flex>
           
      </Flex>
     
    
  );
};

export default PostCreationPage;