import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const Statistics = () => {
    const [donated, setDonated] = useState(0)
    const lists = useLoaderData()
    useEffect(() => {
        const donatedItems = JSON.parse(localStorage.getItem('donated')) || []
        
        if (donatedItems){
            setDonated(donatedItems.length * 100 / lists.length)
        }
    }, [lists.length])
    const totalDonation = 100-donated
    const data = [
        { name: "Your Donation", value: donated, color: "#00C49F" },
        { name: "Total Donation", value: totalDonation, color: "#FF444A" }
    ];
    return (
        <div style={{ width: "100%", height: 300 }}>
            <ResponsiveContainer>
                <PieChart>
                    <Pie dataKey="value" data={data} label>
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
            <div key={lists.id} className="flex-col md:flex-row" style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
                {data.map((item) => (
                    <p key={lists.id} className="text-lg">
                        {" "}
                        {item.name}
                        {" "}
                        <span className="mx-4"
                            style={{ padding: "1px 100px ", borderRadius: "2px", backgroundColor: item.color }}
                        ></span>
                    </p>
                ))}
            </div>
        </div>
    );
};

export default Statistics;