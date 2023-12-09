import { API, Storage } from "aws-amplify"
import awsExports from '@/aws-exports';
import { GRAPHQL_AUTH_MODE } from "@aws-amplify/api";
import * as mutations from '@/graphql/mutations'
import * as queries from '@/graphql/queries';

API.configure(awsExports);
Storage.configure({ level: "public" });

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

export async function createExerciseProgress(studentId, exercise) {
    const progressDetails = {
        name: exercise.name,
        studentID: studentId
    }

    const progress = (await API.graphql({
        query: mutations.createExerciseProgress,
        variables: { input: progressDetails },
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS
    })).data.createExerciseProgress;

    // TODO: build questionProgress set

    const questionFilter = {
        filter: {
            exerciseID: {
                eq: exercise.id
            }
        }
    }

    const questions = (await API.graphql({
        query: queries.listQuestions,
        variables: questionFilter,
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS
    })).data.listQuestions.items;

    for (const question of questions) {
        const questionDetails = {
            exerciseprogressID: progress.id,
            description: question.description,
            completed: false
        }
        const result = await API.graphql({
            query: mutations.createQuestionProgress,
            variables: { input: questionDetails },
            authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS
        })
    }

    return progress;
}

// TODO: link button in student page with above function
// Add list of exercise names for tracking which exercises are assigned
// Filter exercise list through name list

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

export async function setAboutMe(email, text) {
    const userDetails = {
        id: email,
        aboutMe: text
    }

    const result = await API.graphql({
        query: mutations.updateUser,
        variables: { input: userDetails },
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS
    })

    return result.data.updateUser;
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

export async function listUsers() {
    const result = await API.graphql({
        query: queries.listUsers,
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS
    });

    return result.data.listUsers.items
}

export async function listStudents() {
    const result = await API.graphql({
        query: queries.listStudents,
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS
    })

    return result.data.listStudents.items
}

export async function connectStudentToTherapist(studentId, therapistId) {
    const connectionDetails = {
        studentId: studentId,
        therapistId: therapistId
    }
    try {
        const result = await API.graphql({
            query: mutations.createTherapistsStudents,
              variables: {input: connectionDetails},
              authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS
        })
    } catch (e) {
        console.error("Error connecting student to therapist:", e)
    }
}

export async function getStudentsByTherapist(therapistId) {
    const connectionDetails = {
        filter: {
            therapistId: {
                eq: therapistId
            }
        }
    }

    const result = await API.graphql({
        query: queries.listTherapistsStudents,
        variables: connectionDetails,
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS
    });

    return result.data.listTherapistsStudents.items;
}

export async function listExerciseProgressByStudent(studentId) {
    const details = {
        filter: {
            studentID: {
                eq: studentId
            }
        }
    }

    const result = await API.graphql({
        query: queries.listExerciseProgresses,
        variables: details,
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS
    });

    const exercises = result.data.listExerciseProgresses.items;
    return exercises;
}

export async function listExercisesUnassigned(progresses) {
    const progressNames = progresses.map(progress => progress.name);
    
    const result = await API.graphql({
        query: queries.listExercises,
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS
    });

    return result.data.listExercises.items.filter(exercise => !progressNames.includes(exercise.name));
}

export async function listExercises() {
    const result = await API.graphql({
        query: queries.listExercises,
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS
    })

    return result.data.listExercises.items
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