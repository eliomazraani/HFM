import PageSection from '../pageElement/pageSecion'
import SectionTitle from '../pageElement/SectionTitle'
import { faq } from '../../../assets/js/data'
import { Accordion } from 'rsuite'
import 'rsuite/dist/rsuite.min.css'
import "../../../assets/style/faq.css"

function FAQ() {
    return (
        <>
            <PageSection cls="faqElement">
                <div className="wrap">
                    <SectionTitle title="FAQs" />
                    <Accordion>
                        {faq.map((panel, index) => (
                            <Accordion.Panel header={panel.header} key={index}>
                                <p>{panel.parag}</p>
                            </Accordion.Panel>
                        ))}
                    </Accordion>
                </div>
            </PageSection>
        </>
    )
}

export default FAQ