import PageSection from "../pageElement/pageSecion"
import SectionTitle from "../pageElement/SectionTitle"
import { benefits } from "../../../assets/js/data"
import IconText from "../iconText/IconText"
import Phone from "/Phone.svg"
import "../../../assets/style/benefits.css"

function Benefits() {
    return (
        <>
            <PageSection cls="benefitsElement">
                <div className="wrap">
                    <SectionTitle title="Quisque rutrum" />
                    <div className="gridView">
                        {benefits.map((benefit, index) => (
                            <IconText key={index} cls={`benefit benefit${index + 1}`} imgSrc={benefit.icon} description={benefit.description} />
                        ))}
                        <img src={Phone} className="midImg" alt="Phone" />
                    </div>
                </div>
            </PageSection>
        </>
    )
}

export default Benefits