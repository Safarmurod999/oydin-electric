import { Header} from '../components/index'
import { Outlet } from 'react-router-dom'

const Layout = () => {

    return (
        <>
            <Header />
            <main className='pt-[120px] sm:pt-[150px] md:pt-[170px] lg:pt-[194px] bg-[#FAFAFA]'>
                <Outlet />
            </main>
            {/* <Footer /> */}
        </>
    )
}

export default Layout   