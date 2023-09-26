import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DonationDetails = () => {

    const [list, setList] = useState({})
    const { id } = useParams()
    const lists = useLoaderData()

    useEffect(() => {
        const findList = lists.find((list) => list.id == id)
        setList(findList)
    }, [id, lists])

    const btnColor = {
        "backgroundColor": `${list.textColor}`,
    }

    const handleAddToDonated = () => {
        const donatedArray = [];
        const donatedItems = JSON.parse(localStorage.getItem('donated'))
        if (!donatedItems) {
            donatedArray.push(list)
            localStorage.setItem('donated', JSON.stringify(donatedArray))
            toast("Thank you for donating!");
        }
        else {
            const isExists = donatedItems.find(list => list.id == id)

            if (!isExists) {
                donatedArray.push(...donatedItems, list)
                localStorage.setItem('donated', JSON.stringify(donatedArray))
                toast("Thank you for donating!");
            }
            else {
                toast("Already Donated!");
            }
        }
    }

    return (
        <div>
            <div className="relative w-full image-full rounded-lg">
                <figure><img className="w-full" src={list.image} alt="Shoes" /></figure>
                <div className="absolute bottom-0 left-0 card-body bg-black bg-opacity-50 w-full">
                    <div className="card-actions justify-start items-end">
                        <button onClick={handleAddToDonated} style={btnColor} className="btn border-none text-white text-xl font-semibold px-6">Donate ${list.price}</button>
                    </div>
                </div>
            </div>
            <div className="my-14">
                <h3 className="text-4xl font-bold mb-6">{list.title}</h3>
                <p className="text-base font-normal">{list.description}</p>
            </div>
            <ToastContainer />
        </div>
    );
};

export default DonationDetails;