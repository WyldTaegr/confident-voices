'use client'

import { listExerciseProgressByStudent } from "@/util/api";
import { useEffect, useState } from "react";
import { Box, Button, Paper, Typography } from "@mui/material";

export default function StudentProgress({ params }) {

    params.studentId = params.studentId.replace(/\%40/g, "@");

    const [exerciseList, setExerciseList] = useState([]);
    
    useEffect(() => {
        listExerciseProgressByStudent(params.studentId).then((exercises) => {
            setExerciseList(exercises);
        })
    }, [params.studentId]);

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center', padding: 2}}>
            <Typography variant="h4">Progress for {params.studentId}</Typography>
            <Box>
                {exerciseList ? exerciseList.map((exerciseProgress) => {
                    console.table(exerciseProgress)
                    return (
                        <Paper>
                            <p>{exerciseProgress.id}</p>
                        </Paper>
                    )
                }) : <p>Nothing</p>}
                <p>Something</p>
            </Box>
        </Box>
    );
}