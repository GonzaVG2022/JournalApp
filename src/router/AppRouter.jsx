import { Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { JournalRoutes } from "../jounarl/routes/JournalRoutes"



export const AppRouter = () => {
  return (
    <Routes>
      {/* Login */}
      <Route path="/auth/*" element={ <AuthRoutes /> }/>
      {/* JounarApp */}
      <Route path="/*" element={ <JournalRoutes /> }/>
    </Routes>
  )
}
