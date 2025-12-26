import Form from "../components/app/partials/Form"
import FormBG from "/FormBG.png"
import Benefit from "../components/app/partials/Benefits"
import Prizes from "../components/app/partials/Prizes"
import List from "../components/app/partials/List"
import FAQ from "../components/app/partials/FAQ"

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