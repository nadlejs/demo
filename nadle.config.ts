import { tasks, configure } from "nadle";

import { createTask } from "./create-task.js";

configure({
	maxWorkers: 3
});

tasks.register(...createTask("task-A-0", { subTaskCount: 3, subTaskDuration: 700 }));
tasks.register(...createTask("task-A-1", { subTaskCount: 3, subTaskDuration: 1200 }));
tasks.register(...createTask("task-A-2", { subTaskCount: 3, subTaskDuration: 1000 }));
tasks
	.register(
		...createTask("task-A", {
			subTaskCount: 3,
			subTaskDuration: 1000
		})
	)
	.config({ dependsOn: ["task-A-0", "task-A-1", "task-A-2"] });

tasks.register(...createTask("task-B-0", { subTaskCount: 3, subTaskDuration: 1300 }));
tasks.register(...createTask("task-B-1", { subTaskCount: 3, subTaskDuration: 1700 }));
tasks.register(...createTask("task-B-2", { subTaskCount: 3, subTaskDuration: 1400 }));
tasks
	.register(
		...createTask("task-B", {
			subTaskCount: 3,
			subTaskDuration: 1500
		})
	)
	.config({ dependsOn: ["task-B-0", "task-B-1", "task-B-2"] });

tasks
	.register(
		...createTask("task-C-0", {
			subTaskCount: 3,
			subTaskDuration: 1200
		})
	)
	.config({ dependsOn: ["task-A", "task-B"] });
tasks
	.register(
		...createTask("task-C-1", {
			subTaskCount: 3,
			subTaskDuration: 1500
		})
	)
	.config({ dependsOn: ["task-A", "task-B"] });
tasks
	.register(
		...createTask("task-C-2", {
			subTaskCount: 3,
			subTaskDuration: 1300
		})
	)
	.config({ dependsOn: ["task-A", "task-B"] });
tasks
	.register(
		...createTask("task-C-3", {
			subTaskCount: 3,
			subTaskDuration: 1300
		})
	)
	.config({ dependsOn: ["task-A", "task-B"] });
tasks
	.register(
		...createTask("task-C-4", {
			subTaskCount: 3,
			subTaskDuration: 1300
		})
	)
	.config({ dependsOn: ["task-A", "task-B"] });
tasks
	.register(
		...createTask("task-C-5", {
			subTaskCount: 3,
			subTaskDuration: 1300
		})
	)
	.config({ dependsOn: ["task-A", "task-B"] });
tasks
	.register(...createTask("task-C", { subTaskCount: 3, subTaskDuration: 1000 }))
	.config({ description: "Main task", dependsOn: ["task-A", "task-B", "task-C-0", "task-C-1", "task-C-2", "task-C-3", "task-C-4", "task-C-5"] });
