import PageSection from "../pageElement/pageSecion"
import SectionTitle from "../pageElement/SectionTitle"
import { prizes, list } from "../../../assets/js/data"
import Voucher from "../vouchers/Voucher"
import RowTable from "../table/RowTable"
import SubmitBtn from "../submitButton/SubmitBtn"
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
                                <Voucher key={index} imgSrc={`/Trophy${index+1}.svg`} name={entry.name} id={entry.id} prize={prizes[index].price} />
                            ))}
                        </div>
                        <div className="rankingList">
                            <p className="title">Aliquam lorem ant</p>
                            <div className="table">
                                <RowTable cls="tableHead" name="Name" gain="Gain" />
                                <div className="tableBody">
                                    {sortedList.slice(3).map((row, index) => (
                                        <RowTable key={index} name={row.name} gain={`${row.gain}%`} />
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