import { LogoutOutlined, MenuOpenOutlined } from "@mui/icons-material"
import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material"


export const NavBar = ({drawerWidth = 240}) => {
  return (
    <AppBar
        position='fixed'
        sx={{ width: { sm:`calc(100% - ${drawerWidth}px)`},
        ml: { sm: `${drawerWidth}px`},} 
    }
    >
        <Toolbar>
            <IconButton
                color="inherit"
                edge="start"
                sx={{ mr: 2, display: { sm: 'none' } }}>
                <MenuOpenOutlined/>
            </IconButton>
            <Grid container derection='row' justifyContent='space-around' alignItems='center'>
            <Typography variant="h6" noWrap component='div'>JournalApp</Typography>
            <IconButton color="error">
                <LogoutOutlined/>
            </IconButton>
            </Grid>
        </Toolbar>
    </AppBar>
  )
}
