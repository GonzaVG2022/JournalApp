import { Box } from "@mui/material"
import { NavBar, SiderBar } from "../../jounarl/components";

const drawerWidth = 240;
export const JournalLayout = ({children}) => {
  return (
    <Box sx={{display: 'flex'}}>
      <NavBar drawerWidth={drawerWidth}/>
      <SiderBar drawerWidth={drawerWidth}/>
        <Box 
        component= 'main'
        sx={{flexGrow: 1, p: 3}}
        >
            { children }
        </Box>
    </Box>

  )
}
