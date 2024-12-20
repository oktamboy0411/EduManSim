import { Outlet } from "react-router-dom"
import { Header } from "../../components/common"

function Home() {
  return (
    <div className="h-[100vh]">
        <Header />
        <Outlet />
    </div>
  )
}

export default Home