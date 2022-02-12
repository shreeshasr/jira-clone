import { createSlice } from "@reduxjs/toolkit";
import trump from "../images/trump.jpeg"
const initialState = {
    project:{
        projectName: "Sample Project",
        projectIcon: trump,
        url: "https://www.atlassian.com/software/jira",
        description: "Plan, track, and manage your agile and software development projects in Jira. Customize your workflow, collaborate, and release great software.",
        projectCategory: "Software",
        users: ["1234", "5467", "34567"]
    }
}

const ProjectsSlice = createSlice( {
    initialState,
    name: "project",
    reducers: {
        changeProjectName : (state, action) => {
            state.project.projectName = action.payload.projectName
        }
    }
})


export const {changeProjectName} = ProjectsSlice.actions

export default ProjectsSlice.reducer