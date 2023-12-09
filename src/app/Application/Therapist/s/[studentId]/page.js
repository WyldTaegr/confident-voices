'use client'

import { listExerciseProgressByStudent, listExercisesUnassigned } from "@/util/api";
import { useEffect, useState } from "react";
import { Box, Button, Paper, Typography } from "@mui/material";

export default function StudentProgress({ params }) {

    params.studentId = params.studentId.replace(/\%40/g, "@");

    const [progressList, setProgressList] = useState([]);
    const [progressNames, setProgressNames] = useState([]);
    const [exerciseList, setExerciseList] = useState([]);
    
    useEffect(() => {
        listExerciseProgressByStudent(params.studentId).then((progresses) => {
            setProgressList(progresses);
            listExercisesUnassigned(progresses).then(exercises => {
                console.log(exercises);
                setExerciseList(exercises)
            });
        })
    }, [params.studentId]);

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center', padding: 2}}>
            <Typography variant="h4">Progress for {params.studentId}</Typography>
            <Paper sx = {{ display: 'flex', flexDirection: 'column', padding: 2, gap: 2 }}>
                <Typography variant="h5">Active Exercises</Typography>
                {progressList.length > 0 ? progressList.map((exerciseProgress) => {
                    return (
                        <Paper key={exerciseProgress.id}>
                            <p>{exerciseProgress.id}</p>
                        </Paper>
                    )
                }) : <p>No exercises active.</p>}
            </Paper>
            <Paper sx = {{ display: 'flex', flexDirection: 'column', padding: 2, gap: 2 }}>
                <Typography variant="h5">Assign Exercises</Typography>
                {exerciseList.map((exercise) => {
                    return (
                        <Button key={exercise.id} variant="outlined">{exercise.name}</Button>
                    )
                })}
            </Paper>
        </Box>
    );
}