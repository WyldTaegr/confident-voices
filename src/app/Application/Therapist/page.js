'use client'

import { connectStudentToTherapist, getStudentsByTherapist, listStudents, listUsers } from "@/util/api";
import { getCurrentUser } from "@/util/auth";
import { Box, Button, Paper, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Link from 'next/link';

export default function TherapistDashboard() {
    const [therapistId, setTherapistId] = useState();
    const [studentList, setStudentList] = useState([]);
    const [userList, setUserList] = useState([]);

    useEffect(() => {
        getCurrentUser().then((currentUser) => {
            setTherapistId(currentUser.attributes.email);

            getStudentsByTherapist(therapistId).then((students) => {
                setStudentList(students.map((connection) => {
                    return connection.studentId;
                }))
            });

            listStudents().then((students) => {
                setUserList(students);
            });
            
        })
    }, [therapistId]);

    async function addStudent(studentId) {
        await connectStudentToTherapist(studentId, therapistId);
    }

    return (
        <Box sx={ {display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center', justifyContent: 'start', height: '100vh', bgcolor: 'background.default', color: 'text.primary' }}>
            
            <Typography variant="h4" sx={{ textAlign: 'center', padding: 2 }}>
                Therapist Dashboard
            </Typography>
            <Paper sx={{ display: 'flex', flexDirection: 'column', padding: 2, gap: 2 }}>
                <Typography variant="h5">Your Students</Typography>
                <Box sx={{display: 'flex', flexDirection: 'column', gap: 1}}>
                    {studentList.map((student) => {
                        return (
                            <Link key={student} href={`Therapist/s/${student}`} passHref><Button variant="text">{student}</Button></Link>
                        )
                    })}
                </Box>
            </Paper>
            <Paper sx={{ display: 'flex', flexDirection: 'column', padding: 2, gap: 2 }}>
                <Typography variant="h5">Add Student</Typography>
                <Box sx={{display: 'flex', flexDirection: 'column', gap: 1}}>
                    {userList.map((student) => {
                        return !studentList.includes(student.id) && (
                            <Button key={student.id} variant="outlined" id={student.id} onClick={() => addStudent(student.id)}>{student.id}</Button>
                        )
                    })}
                </Box>
            </Paper>
        </Box>
    )
}