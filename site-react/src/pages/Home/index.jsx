import { SectionBanner } from '../../components/SectionBanner';
import { SectionCards } from '../../components/SectionCards';
import { SectionReasons } from '../../components/SectionReasons';
import { SectionSpecialist } from '../../components/SectionSpecialist';
import { SectionValues } from '../../components/SectionValues';

export function HomePage() {
    return (
        <div id="home-page">
            <div className="container">

<SectionBanner />

<SectionCards />

<SectionReasons />

<SectionSpecialist />

<SectionValues />
</div>
            
        </div>
    )
}