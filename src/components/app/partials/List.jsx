import PageSection from "../../ui/pageElement/PageSection"
import SectionTitle from "../../ui/pageElement/PageSection"
import { prizes, list } from "../../../assets/js/data"
import CardContainer from "../../ui/card/CardContainer"
import VoucherCard from "../VoucherCard"
import TableRow from "../../ui/table/TableRow"
import SubmitBtn from "../../ui/button/SubmitBtn"
import "../../../assets/style/list.css"

function List() {
    const sortedList = [...list].sort((a, b) => b.gain - a.gain);    

    return (
        <>
            <PageSection cls="listElement">
                <div className="wrap">
                    <SectionTitle title="Sed fringilla mauris sit" />
                    <div className="listWindow">
                        <div className="winnerCard">
                            {sortedList.slice(0,3).map((entry, index) => (
                                <CardContainer as={VoucherCard} key={index} imgSrc={`/Trophy${index+1}.svg`} name={entry.name} id={entry.id} gain={entry.gain} prize={prizes[index].price} />
                            ))}
                        </div>
                        <div className="rankingList">
                            <p className="title">Aliquam lorem ant</p>
                            <div className="table">
                                <TableRow cls="tableHead" name="Name" gain="Gain" />
                                <div className="tableBody">
                                    {sortedList.slice(3).map((row, index) => (
                                        <TableRow key={index} name={row.name} gain={`${row.gain}%`} />
                                    ))}
                                </div>
                            </div>
                            <p className="note">Nam quam nunc, blandit vel, luctus pulvinar</p>
                        </div>
                    </div>
                    <SubmitBtn show scroll/>
                </div>
            </PageSection>
        </>
    )
}

export default List