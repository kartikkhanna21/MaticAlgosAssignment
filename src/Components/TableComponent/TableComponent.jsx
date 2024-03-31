import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';

const TableComponent = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('/ddperiod.json') // Fetch the JSON file from the public folder
            .then(response => response.json())
            .then(jsonData => {
                setData(jsonData.data); // Assuming 'combined' is the key containing the data array
            })
            .catch(error => console.error(error));
    }, []);
    return (
        <div >
            <Table bordered>
                <thead> 
                    <tr className='text-center' style={{fontSize:'16px'}}>
                        <th>Period</th>
                        <th>Max DD</th>
                        <th>Days</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.Start_Date} className='text-center' style={{fontSize:'14px'}}>
                            <td>{item.Start_Date}-{item.End_Date}</td>
                            <td className='text-danger'>{item.Max_Drawdown.toFixed(2)}</td>
                            <td>{item.Drawdown_days}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}

export default TableComponent
