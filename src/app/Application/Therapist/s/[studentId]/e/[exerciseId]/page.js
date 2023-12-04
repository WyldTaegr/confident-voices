

export default function ExerciseProgress({ params }) {


    return (
        <div>
            <h1>Student Id:</h1>
            <p>{params.studentId}</p>
            <h1>Exercise Id:</h1>
            <p>{params.exerciseId}</p>
        </div>
    )
}