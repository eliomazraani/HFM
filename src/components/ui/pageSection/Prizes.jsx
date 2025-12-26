import PageSection from "../pageElement/pageSecion"
import SectionTitle from "../pageElement/SectionTitle"
import { prizes } from "../../../assets/js/data"
import PrizeCard from "../prizes/PrizeCard"
import SubmitBtn from "../submitButton/SubmitBtn"
import "../../../assets/style/prizes.css"

function Prizes() {
    return (
        <>
            <PageSection cls="prizesElement">
                <div className="wrap">
                    <SectionTitle title="Prizes" />
                    <div className="boxCards">
                        {prizes.map((prize, index) => (
                            <PrizeCard key={index} imgSrc={`/Medal${index+1}.svg`} price={prize.price} tag={prize.tag}/>
                        ))}
                    </div>
                    <SubmitBtn show scroll/>
                </div>
            </PageSection>
        </>
    )
}

export default Prizes