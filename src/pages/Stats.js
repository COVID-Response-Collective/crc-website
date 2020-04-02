import React, { useState, useEffect } from 'react';
import { NovelCovid } from 'novelcovid';
import DataTable from 'react-data-table-component';
import { columns } from '../utils/statsColumns';
import crc_heart from '../assets/images/CRC_HEART_RD_T.svg';
import './Stats.css';

const track = new NovelCovid()

const Stats = () => {
    const [data, setData] = useState([])
    const [pending, setPending] = useState(true)

    const queryApi = async () => {
        try {
            const res = await track.states()
            setData(res)
            setPending(false)
        }
        catch (e) {
            throw e
        }
    }

    useEffect(() => {
        queryApi()
    }, [])

    return (
        <div className="Stats">
            <img className="About-logo" src={crc_heart} alt="logo" />
            <div className="Title">
                STATISTICS
            </div>
            <div>
                <DataTable
                    title="U.S. COVID-19 Statistics By State"
                    columns={columns}
                    data={data}
                    theme="dark"
                    progressPending={pending}
                />
            </div>
        </div>
    )
}

export default Stats
