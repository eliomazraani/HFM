import PageSection from "../../ui/pageElement/PageSection"
import SectionTitle from "../../ui/pageElement/PageSection"
import { prizes } from "../../../assets/js/data"
import CardContainer from "../../ui/card/CardContainer"
import PrizeCard from "../PrizeCard"
import SubmitBtn from "../../ui/button/SubmitBtn"
import "../../../assets/style/prizes.css"

function Prizes() {
    return (
        <>
            <PageSection cls="prizesElement">
                <div className="wrap">
                    <SectionTitle title="Prizes" />
                    <div className="boxCards">
                        {prizes.map((prize, index) => (
                            <CardContainer as={PrizeCard} key={index} imgSrc={`/Medal${index+1}.svg`} price={prize.price} tag={prize.tag} />
                        ))}
                    </div>
                    <SubmitBtn show scroll/>
                </div>
            </PageSection>
        </>
    )
}

export default Prizes