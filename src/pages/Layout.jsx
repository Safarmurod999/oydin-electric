import { Header} from '../components/index'
import { Outlet } from 'react-router-dom'

const Layout = () => {

    return (
        <>
            <Header />
            <main className='pt-[194px]'>
                <Outlet />
            </main>
            {/* <Footer /> */}
        </>
    )
}

export default Layout