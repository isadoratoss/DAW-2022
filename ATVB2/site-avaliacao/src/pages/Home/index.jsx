import { SectionBanner } from '../../components/SectionBanner';
import { SectionReasons } from '../../components/SectionReasons';
import { SectionDepoiments } from '../../components/SectionDepoiments';
import { SectionValues } from '../../components/SectionValues';
import { SectionCards } from '../../components/SectionCards';


export function HomePage() {
    return (
        <div id="home-page">
            <div className="container">

                <SectionBanner />

                <SectionCards />
                
                <SectionReasons />

                <SectionDepoiments/>

                <SectionValues />
            </div>
        </div>
    )
}