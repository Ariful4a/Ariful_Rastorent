import pest from '../../../assets/menu/pest-3.jpeg'
import AllPestControl from './PestControlChild';
import { Helmet } from 'react-helmet-async';
import Cover from '../Menu_Page/Cover';

const MainPest = () => {
    return (
        <div>
            <Helmet>
                <title>
                    Ariful || Pest control
                </title>
            </Helmet>
            <Cover title={'Pest Controls'} img={pest}></Cover>
            <AllPestControl></AllPestControl>
        </div>
    );
};

export default MainPest;