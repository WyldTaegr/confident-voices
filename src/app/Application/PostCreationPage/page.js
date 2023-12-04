'use client';
// imports for routing and page switching
import Link from 'next/link';
import {useRouter} from 'next/navigation';


// front-end imports
import { Amplify, Auth} from 'aws-amplify';
import React, {useState, useEffect, useRef} from 'react';
import { Button, Alert, Heading, Divider, Input, Label, Grid, 
TextAreaField, Head, Flex, Radio,
RadioGroupField, DropZone, VisuallyHidden, Text } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import {ImPlus} from 'react-icons/im';

// backend imports
import {createPost} from '@/util/api';
import awsExports from '@/aws-exports';
import { getCurrentUser, signOut } from '@/util/auth';
//import { Amplify } from 'aws-amplify';
Amplify.configure(awsExports);


const PostCreationPage = () => {
    
  const router = useRouter(); //used for going back to Community Page

  // get current user
  const [user, setUser] = useState(false);

  //if user not set, set user
  if(!user){
      // get current user
   getCurrentUser().then((user) => {
		setUser(user);
	})
  }
  //}
  // to set values in the input
  const [inputTitle, setInputTitle] = useState("");
  const [inputTags, setInputTags] = useState("");
  const [inputDesc, setInputDesc] = useState("");

  // to make input red when not valid input
  const [hasErrorTitle, setErrorTitle] = useState(false);
  const [hasErrorTags, setErrorTags] = useState(false);
  const [hasErrorDesc, setErrorDesc] = useState(false);

  // alerts to notify user of bad input
  const [alertTitle, setAlertTitle] = useState(false);
  const [alertTags, setAlertTags] = useState(false);
  const [alertDesc, setAlertDesc] = useState(false);

  // for allowed filetypes for post image
  const acceptedFileTypes = ['image/png', 'image/jpeg'];

  //for setting images
  const [files, setFiles] = useState([]);
  const hiddenInput = useRef(null);

  // to change the image
  const onFilePickerChange = (event) => {
    const { files } = event.target;
    if (!files || files.length === 0) {
      return;
    }
    setFiles(Array.from(files));
  };

  // check user input on submission
  const submitCheck = (e) => {
      //prevent default submission behavior
      //e.preventDefault();
      var titleCheck = inputTitle.length == 0
      var tagsCheck = inputTags.length == 0;
      var descCheck = inputDesc.length == 0;
      //check title
      if(titleCheck){
          setErrorTitle(true);
          setAlertTitle(true);
      }
      else{
          setErrorTitle(false);
          setAlertTitle(false);
      }
      //check tags
      if(tagsCheck){
          setErrorTags(true);
          setAlertTags(true);
      }
      else{
          setErrorTags(false);
          setAlertTags(false);
      }
      //check descripton
      if(descCheck){
          setErrorDesc(true);
          setAlertDesc(true);
      }
      else{
          setErrorDesc(false);
          setAlertDesc(false);
      }
      
      if((titleCheck == false) && (tagsCheck == false) && (descCheck == false)){
          let fileName;
          let fileContent;
          files.map((file) => {
              fileName = file.name;
              fileContent = file;
          });
          console.log(files);
          // puts information to backend dB
          createPost(inputTitle, inputTags, inputDesc, user, fileName, fileContent, "image/jpg");// NOT DONET YET
          
          // go back to Community Page to see new post 
          router.push("/Application/CommunityPage");
      }
  };
  // front end 
  return (
        <Flex as = "form" direction = "row" justifyContent = "space-evenly" alignContent = "stretch">
            <Flex direction = "column" justifyContent = "space-between">
                <Heading level={1} color= "blue"> Post Creation</Heading>
                <Flex direction = "column">
                    <br/><br/>
                    <DropZone
                        acceptedFileTypes={acceptedFileTypes}
                        onDropComplete={({ acceptedFiles, rejectedFiles }) => {
                        setFiles(acceptedFiles);
                        }}>
                            <Flex direction="column" alignItems="center">
                                <Text>Drag images here or</Text>
                                <Button size="small" onClick={() => hiddenInput.current.click()}>
                                    Browse
                                </Button>
                            </Flex>
                            <VisuallyHidden>
                                <input
                                type="file"
                                tabIndex={-1}
                                ref={hiddenInput}
                                onChange={onFilePickerChange}
                                multiple={true}
                                accept={acceptedFileTypes.join(',')}/>
                            </VisuallyHidden>
                </DropZone>
                    {files.map((file) => (
                    <Text key={file.name}>{file.name}</Text>
                    ))}
                    
                </Flex>
                <Flex direction = "column">
                    {alertTitle? (<Alert variation="error" isDimissible={true} hasIcon={true}>Please enter a title</Alert>): null}
                    {alertTags? (<Alert variation="error" isDimissible={true} hasIcon={true}>Please enter tags</Alert>): null}
                    {alertDesc? (<Alert variation="error" isDimissible={true} hasIcon={true}>Please enter a description</Alert>): null}
                </Flex>
            </Flex>
            
            <Divider orientation = "vertical"/>
            <Flex direction = "row">
            <Flex direction = "column" justifyContent = "center" alignContent = "center">
                <Label htmlFor = "title">Title:</Label>
                <Input id = "title"
                    variation="quiet"
                    size = "large"
                    placeholder = "Enter title .."
                    value = {inputTitle}
                    hasError = {hasErrorTitle}
                    onChange = {(e) => setInputTitle(e.currentTarget.value)}/>
                <br /><br />
                <Label htmlFor = "tags">Tags/Key Words:</Label>
                <Input id = "tags"
                    variation="quiet"
                    size = "large"
                    placeholder = "Enter tags/key words .." 
                    value = {inputTags}
                    onChange = {(e) => setInputTags(e.currentTarget.value)}
                    hasError = {hasErrorTags}/>
                <br /><br />
                <TextAreaField label = "Description:"
                    maxLength = {250}
                    rows = {6}
                    placeholder = "Enter a description .." 
                    value = {inputDesc}
                    onChange = {(e) => setInputDesc(e.currentTarget.value)}
                    hasError = {hasErrorDesc}/>
                <Button variation = "primary" onClick = {submitCheck}>Create</Button>
            </Flex>
            </Flex>
           
      </Flex>
     
    
  );
};

export default PostCreationPage;