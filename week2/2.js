let monday = [{
        name: 'Write a summary HTML/CSS',
        duration: 180
    },
    {
        name: 'Some web development',
        duration: 120
    },
    {
        name: 'Fix homework for class10',
        duration: 20
    },
    {
        name: 'Talk to a lot of people',
        duration: 200
    }
];

let tuesday = [{
        name: 'Keep writing summary',
        duration: 240
    },
    {
        name: 'Some more web development',
        duration: 180
    },
    {
        name: 'Staring out the window',
        duration: 10
    },
    {
        name: 'Talk to a lot of people',
        duration: 200
    },
    {
        name: 'Look at application assignments new students',
        duration: 40
    }
];
let tasks = monday.concat(tuesday);

var task_names = tasks.map((worthOfTasks) => {

    return worthOfTasks;
});


tasks.forEach((task) => {
    task.duration = task.duration / 60;
    console.log(task.duration);
});

for (let info in tasks) {
    tasks = tasks.filter(info => {

        return info.duration < 2
    });
}
console.log(tasks);