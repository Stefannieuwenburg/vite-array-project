export default function FilterNew() {
    const tasks = [
        {
            taskId: 1,
            taskName: "Clean the bathroom",
            taskStatus: "Complete",
        },
        {
            taskId: 2,
            taskName: "Learn filtering data in React",
            taskStatus: "To do",
        },
        {
            taskId: 3,
            taskName: "Fix the bug on React project",
            taskStatus: "To do",
        },
        {
            taskId: 4,
            taskName: "Fix the car",
            taskStatus: "Complete",
        },
    ];

    return (
        <ul>
          
            To-do list:
            {tasks.filter((task) => task.taskStatus === "To do")
                .map((task) => (
                    <li key={task.taskId}>{task.taskName}</li>
                ))}
        </ul>
    );
}
export default function FunFilter() {
    
    const array = [23, 45, 67, 89, 12];

    return (
        <ul>
            {array.filter((number) => number > 60).map((number) => (
                    <li key="some text">{number}</li>
                ))}
        </ul>
    );
}
