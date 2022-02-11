import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tickets: [
        {
            id: "1",
            issueType: "Task",
            issuePriority: "Major",
            shortSummary: "What is Jira clone application?",
            description: "This is a cool Jira-clone app written in React",
            reporter: "Shreesha SR",
            assignees: ["Shreesha SR"],
            points: 1,
            status: "Backlog",
            createdAt: "Jun 12, 2020, 8:10:00 PM",
            updatedAt: "Feb 11, 2022, 8:15:46 PM",
            comments: []
        },
        {
            id: "2",
            issueType: "Task",
            issuePriority: "Major",
            shortSummary: "What is Jira clone application?",
            description: "This is a cool Jira-clone app written in React",
            reporter: "Shreesha SR",
            assignees: ["Shreesha SR"],
            points: 3,
            status: "Selected For Development",
            createdAt: "Jun 12, 2020, 8:10:00 PM",
            updatedAt: "Feb 11, 2022, 8:15:46 PM",
            comments: []
        },
        {
            id: "3",
            issueType: "Task",
            issuePriority: "Major",
            shortSummary: "What is Jira clone application?",
            description: "This is a cool Jira-clone app written in React",
            reporter: "Shreesha SR",
            assignees: ["Shreesha SR"],
            points: 3,
            status: "Done",
            createdAt: "Jun 12, 2020, 8:10:00 PM",
            updatedAt: "Feb 11, 2022, 8:15:46 PM",
            comments: []
        },
        {
            id: "3",
            issueType: "Task",
            issuePriority: "Major",
            shortSummary: "What is Jira clone application?",
            description: "This is a cool Jira-clone app written in React",
            reporter: "Shreesha SR",
            assignees: ["Shreesha SR"],
            points: 5,
            status: "In Progress",
            createdAt: "Jun 12, 2020, 8:10:00 PM",
            updatedAt: "Feb 11, 2022, 8:15:46 PM",
            comments: []
        },
        {
            id: "1",
            issueType: "Task",
            issuePriority: "Major",
            shortSummary: "What is Jira clone application?",
            description: "This is a cool Jira-clone app written in React",
            reporter: "Shreesha SR",
            assignees: ["Shreesha SR"],
            status: "Backlog",
            points: 8,
            createdAt: "Jun 12, 2020, 8:10:00 PM",
            updatedAt: "Feb 11, 2022, 8:15:46 PM",
            comments: []
        },
        {
            id: "2",
            issueType: "Task",
            issuePriority: "Major",
            shortSummary: "What is Jira clone application?",
            description: "This is a cool Jira-clone app written in React",
            reporter: "Shreesha SR",
            assignees: ["Shreesha SR"],
            points: 1,
            status: "Selected For Development",
            createdAt: "Jun 12, 2020, 8:10:00 PM",
            updatedAt: "Feb 11, 2022, 8:15:46 PM",
            comments: []
        },
        {
            id: "3",
            issueType: "Task",
            issuePriority: "Major",
            shortSummary: "What is Jira clone application?",
            description: "This is a cool Jira-clone app written in React",
            reporter: "Shreesha SR",
            assignees: ["Shreesha SR"],
            status: "Done",
            points: 5,
            createdAt: "Jun 12, 2020, 8:10:00 PM",
            updatedAt: "Feb 11, 2022, 8:15:46 PM",
            comments: []
        },
        {
            id: "3",
            issueType: "Task",
            issuePriority: "Major",
            shortSummary: "What is Jira clone application?",
            description: "This is a cool Jira-clone app written in React",
            reporter: "Shreesha SR",
            assignees: ["Shreesha SR"],
            status: "In Progress",
            points: 3,
            createdAt: "Jun 12, 2020, 8:10:00 PM",
            updatedAt: "Feb 11, 2022, 8:15:46 PM",
            comments: []
        },
    ]
}

const TicketsSlice = createSlice( {
    initialState,
    name: "tickets",
    reducers: {
        filterTicketsByStatus : (state, action) => {
            
            return "Hi";
        }
    }
})


export const {filterTicketsByStatus} = TicketsSlice.actions

export default TicketsSlice.reducer