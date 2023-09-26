import { useEffect, useState } from "react";
import DonatedList from "../DonatedList/DonatedList";

const Donation = () => {

    const [donated, setDonated] = useState([])
    const [noFound, setNoFound] = useState("")
    const [isShowMore, setIsShowMore] = useState(false)
    useEffect(() => {
        const donatedItems = JSON.parse(localStorage.getItem('donated'))
        
        if (donatedItems){
            setDonated(donatedItems)
        }
        else {
            setNoFound('No Data Found!')
        }
    }, [])

    return (
        <div>
            {
                noFound ? <p className="justify-center items-center flex h-[80vh]">{noFound}</p> :
                <div>
                    <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {
                            isShowMore ? donated.map(list => <DonatedList key={list.id} list={list}></DonatedList>) : donated.slice(0, 4).map(list => <DonatedList key={list.id} list={list}></DonatedList>)
                        }
                    </div>
                    <div className="text-center">
                        {
                            donated.length > 4 && <button onClick={() => setIsShowMore(!isShowMore)} className="px-7 py-4 bg-[#009444] rounded-lg text-base font-semibold text-white my-10">{isShowMore ? "Show less" : "Show More"}</button>
                        }
                    </div>
                    
                </div>
            }
        </div>
    );
};

export default Donation;