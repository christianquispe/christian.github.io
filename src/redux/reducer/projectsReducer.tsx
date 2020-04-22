export interface IActionAuth {
  type: string;
  payload: IProjectsState;
}

export interface IProjectsState {
  projects: any;
}

const initialState: IProjectsState = {
  projects: [],
};

export const projectsReducer = (
  state = initialState,
  action: IActionAuth
): IProjectsState => {
  switch (action.type) {
    case "ADD_GITHUB_PROJECTS":
      return {
        ...state,
        projects: action.payload,
      };
    default:
      return state;
  }
};
