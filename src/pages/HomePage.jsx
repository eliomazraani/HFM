import Form from "../components/ui/pageSection/Form"
import FormBG from "/FormBG.png"
import Benefit from "../components/ui/pageSection/Benefits"
import Prizes from "../components/ui/pageSection/Prizes"
import List from "../components/ui/pageSection/List"
import FAQ from "../components/ui/pageSection/FAQ"

function HomePage() {
    return (
        <>
            <Form background={FormBG} titleSpan="Lorem ipsum dolor" title="sit amet tosik" formTitle="Lorem ipsum dolor sit amet" />
            <Benefit />
            <Prizes />
            <List />
            <FAQ />
        </>
    );
}

export default HomePage