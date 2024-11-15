import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import Cookies from "universal-cookie"
import DashboardRouter from "../../Components/Dashboard/DashboardRouter"
import Sidebar from "../../Components/Sidebar/Sidebar"

const cookie = new Cookies()

const DashboardPage = () => {
    const navigate = useNavigate()
    const [dashboard, setDashboard] = useState(null)
    const user = useSelector(state => state.userData)
    const menuData = [
        {
            id: 10893,
            name: "საიტზე გადასვლა",
            link: "/"
        },
        {
            id: 10894,
            name: "ადმინის მხარე",
            link: "/dashboard"
        },
        {
            id: 10895,
            name: "მომხმარებლები",
            link: "/dashboard/users"
        },
        {
            id: 10896,
            name: "ღონისძიებები",
            link: "/dashboard/events"
        }
    ]
    
    useEffect(()=>{
        if(cookie.get('sessionID') == undefined) {
            if(user.status) {
                if(user.status !== 'admin') {
                    navigate("/")
                } else {
                    setDashboard(true)
                }
            }
        } else {
            navigate("/")
        }
    }, [cookie, user, dashboard])

    return (
        <>
        {
            dashboard !== null && dashboard && ( 
            <>
            <Sidebar data={menuData}/>
                <DashboardRouter />
            </>
            )
        }
        </>
    )
}

export default DashboardPage