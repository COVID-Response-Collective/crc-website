import React, { useState, useEffect } from 'react'
import { NovelCovid } from 'novelcovid'
import DataTable from 'react-data-table-component'
import { columns } from '../utils/statsColumns'
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
            <img className="About-logo" src="crc_logo.png" alt="logo" />
            <div className="Stats-Big">
                STATISTICS
            </div>
            <div>
                <DataTable
                    title="American States COVID-19 Statistics"
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