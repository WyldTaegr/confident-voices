'use client'

import { connectStudentToTherapist, getStudentsByTherapist, listStudents, listUsers } from "@/util/api";
import { getCurrentUser } from "@/util/auth";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";

export default function TherapistDashboard() {
    const [therapistId, setTherapistId] = useState();
    const [studentList, setStudentList] = useState([]);
    const [userList, setUserList] = useState([]);

    useEffect(() => {
        getCurrentUser().then((currentUser) => {
            setTherapistId(currentUser.attributes.email);

            getStudentsByTherapist(therapistId).then((students) => {
                console.log(students);
                setStudentList(students.map((connection) => {
                    console.log(connection.studentId);
                    return connection.studentId;
                }))
                console.log(studentList)
            });

            listStudents().then((students) => {
                setUserList(students);
            });
            
        })
    }, [therapistId, studentList]);

    async function addStudent(studentId) {
        await connectStudentToTherapist(studentId, therapistId);
    }

    return (
        <div>
            <h1>Therapist Dashboard</h1>
            <h2>Student List</h2>
            {studentList.map((student) => {
                return (
                    <p>{student}</p>
                )
            })}
            <h2>User List</h2>
            {userList.map((student) => {
                return !studentList.includes(student.id) && (
                    <Button key={student.id} variant="outlined" id={student.id} onClick={() => addStudent(student.id)}>{student.id}</Button>
                )
            })}
        </div>
    )
}