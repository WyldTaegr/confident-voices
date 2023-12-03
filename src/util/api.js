import { API, Storage } from "aws-amplify"
import awsExports from '@/aws-exports';
import { GRAPHQL_AUTH_MODE } from "@aws-amplify/api";
import * as mutations from '@/graphql/mutations'
import * as queries from '@/graphql/queries';

API.configure(awsExports);
Storage.configure({ level: "protected" });

export async function createUser(email, mode) {
    const userDetails = {
        id: email,
        active: mode === "student" ? "Student" : "Therapist",
    }

    const newUser = await API.graphql({
        query: mutations.createUser,
        variables: { input: userDetails },
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS
    });
    
    return newUser;
}

export async function getUser(email) {
    const userDetails = {
        id: email
    }

    const user = await API.graphql({
        query: queries.getUser,
        variables: userDetails,
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS
    })

    return user.data.getUser;
}

export async function createTherapist(userId, parent) {
    const therapistDetails = {
        id: userId,
        therapistUserId: userId,
        parent: parent
    }

    const newTherapist = await API.graphql({
        query: mutations.createTherapist,
        variables: { input: therapistDetails },
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS
    });

    return newTherapist;
}

export async function createStudent(userId) {
    const studentDetails = {
        id: userId,
        studentUserId: userId
    }

    const newStudent = await API.graphql({
        query: mutations.createStudent,
        variables: { input: studentDetails },
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS
    })

    return newStudent;
}

export async function getStudent(studentID){
    const studentDetails = {
        studentID: studentID
    }

    const student = await API.graphql({
        query: queries.getStudent,
        variables: {input: studentDetails},
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS
    });
    return student.data.getStudent;
}

export async function createExerciseProgress(studentID){
    const exerciseProgressParams = {
        studentID: studentID
    };

    const newExerciseProgress = await API.graphql({
        query: mutations.createExerciseProgress,
        variables:{input: exerciseProgressParams},
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS
    });

    return newExerciseProgress;
}

export async function createS3Object1(name){
    const s3ObjectData = {
    name: name,
    key: name, // or any other unique identifier you'd like to use
    // You need to determine how to get this ID
  };
  await API.graphql({
    query: mutations.createS3Object,
    variables:{input: s3ObjectData},
    authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS
  });
}

export async function createS3Object(fileName, file, type) {
    const objectDetails = {
        name: fileName
    }

    const resultAPI = await API.graphql({
        query: mutations.createS3Object,
        variables: { input: objectDetails },
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS
    })

    const s3Object = resultAPI.data.createS3Object
    const resultStorage = await Storage.put(`${s3Object.id}-${fileName}`, file, { contentType: type });

    const updateDetails = {
        id: s3Object.id,
        key: resultStorage.key
    }

    const updateResponse = await API.graphql({
        query: mutations.updateS3Object,
        variables: { input: updateDetails },
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS
    })

    const updatedObject = updateResponse.data.updateS3Object;

    const signedURL = await Storage.get(updatedObject.key);

    return s3Object.id;
}

export async function getS3Object(id) {
    const details = {
        id: id
    }

    const result = await API.graphql({
        query: queries.getS3Object,
        variables: details,
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS
    });

    const s3Object = result.data.getS3Object;

    const signedURL = await Storage.get(s3Object.key);
    return signedURL;
}

export async function setProfilePicture(email, fileName, file, type) {
    const id = await createS3Object(fileName, file, type);
    const userDetails = {
        id: email,
        userPictureId: id
    }

    const result = await API.graphql({
        query: mutations.updateUser,
        variables: { input: userDetails },
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS
    });

    return await getS3Object(id);
}

export async function getProfilePicture(email) {
    const user = await getUser(email);
    if (!user.userPictureId) return null;

    return await getS3Object(user.userPictureId);
}

//RACHEL MESSED WITH THIS FUNCTION BELOW:
export async function createPost(inputTitle, inputTags, inputDesc, user, fileName, file, type){
    const id = await createS3Object(fileName, file, type);

    const postDetails = {
        title: inputTitle,
        tags: inputTags,
        description: inputDesc,
        likes: 0,
        fname: user.attributes.name,
        lname: user.attributes.family_name,
        email: user.attributes.email,
        postInfoPictureId: id
    }
    const result = await API.graphql({
              query: mutations.createPostInfo,
              variables: {input: postDetails},
              authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS
    });

    return await getS3Object(id);
} 

export async function getPost(post_id) {
    const postDetails = {
        id: post_id
    }

    const post = await API.graphql({
        query: queries.getPostInfo,
        variables: postDetails,
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS
    })

    return post.data.getPostInfo;
}

export async function getPostPicture(id) {
    const post = await getPost(id);
    if (!post.postInfoPictureId) return null;

    return await getS3Object(post.postInfoPictureId);
}