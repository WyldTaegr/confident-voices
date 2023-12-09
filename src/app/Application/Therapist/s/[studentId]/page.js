'use client'

import { createExerciseProgress, listExerciseProgressByStudent, listExercisesUnassigned } from "@/util/api";
import { useEffect, useState } from "react";
import { Box, Button, Paper, Typography } from "@mui/material";
import Link from "next/link";

export default function StudentProgress({ params }) {

    params.studentId = params.studentId.replace(/\%40/g, "@");

    const [progressList, setProgressList] = useState([]);
    const [exerciseList, setExerciseList] = useState([]);

    async function updateInfo() {
        const progresses = await listExerciseProgressByStudent(params.studentId);
        setProgressList(progresses);
        const exercises = await listExercisesUnassigned(progresses);
        setExerciseList(exercises);
    }
    
    useEffect(() => {
        listExerciseProgressByStudent(params.studentId).then((progresses) => {
            setProgressList(progresses);
            listExercisesUnassigned(progresses).then(exercises => setExerciseList(exercises));
        })
    }, [params.studentId]);

    async function assignExercise(exercise) {
        const progress = await createExerciseProgress(params.studentId, exercise);
        await updateInfo();
    }

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center', padding: 2}}>
            <Typography variant="h4">Progress for {params.studentId}</Typography>
            <Paper sx = {{ display: 'flex', flexDirection: 'column', padding: 2, gap: 2 }}>
                <Typography variant="h5">Active Exercises</Typography>
                {progressList.length > 0 ? progressList.map((exerciseProgress) => {
                    return (
                        <Link key={exerciseProgress.id} href={`${params.studentId}/e/${exerciseProgress.exerciseProgressExerciseId}`} passHref>
                            <Button variant="text">{exerciseProgress.name}</Button>
                        </Link>
                    )
                }) : <p>No exercises active.</p>}
            </Paper>
            <Paper sx = {{ display: 'flex', flexDirection: 'column', padding: 2, gap: 2 }}>
                <Typography variant="h5">Assign Exercises</Typography>
                {exerciseList.map((exercise) => {
                    return (
                        <Button key={exercise.id} variant="outlined" onClick={() => assignExercise(exercise)}>{exercise.name}</Button>
                    )
                })}
            </Paper>
        </Box>
    );
}