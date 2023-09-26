import { useEffect, useState } from "react";
import DonatedList from "../DonatedList/DonatedList";

const Donation = () => {

    const [donated, setDonated] = useState([])
    const [noFound, setNoFound] = useState("")
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
                        {donated.map(list => <DonatedList key={list.id} list={list}></DonatedList>)}
                    </div>
                </div>
            }
        </div>
    );
};

export default Donation;