import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import DataTable from 'react-data-table-component';
import { columns } from '../utils/statsColumns';
import crc_heart from '../assets/images/CRC_HEART_RD_T.svg';
import './Stats.css';

import { processData } from '../utils/data'

const sourceUrl = 'https://raw.githubusercontent.com/stevenliuyi/covid19/master/public/data/all.json'

const TextField = styled.input`
  height: 32px;
  width: 200px;
  border-radius: 3px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border: 1px solid #e5e5e5;
  padding: 0 32px 0 16px;

  &:hover {
    cursor: pointer;
  }
`

const Button = styled.button`
  background: ${props => props.primary ? "red" : "white"};
  color: ${props => props.primary ? "white" : "red"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid red;
  border-radius: 3px;
`;


const ClearButton = styled(Button)`
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  height: 34px;
  width: 32px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;


const FilterComponent = ({ filterText, onFilter, onClear }) => (
    <>
        <TextField id="search" type="text" placeholder="Filter By County" value={filterText} onChange={onFilter} />
        <ClearButton type="button" onClick={onClear}>X</ClearButton>
    </>
);

const Stats = () => {
    const [filterText, setFilterText] = useState('')
    const [data, setData] = useState([])
    const [pending, setPending] = useState(true)
    const filteredItems = data.filter(item => item.ENGLISH && item.ENGLISH.toUpperCase().includes(filterText.toUpperCase()))

    const subHeaderComponentMemo = React.useMemo(() => {
        const handleClear = () => {
            if (filterText) { setFilterText('') }
        };

        return <FilterComponent onFilter={e => setFilterText(e.target.value)} onClear={handleClear} filterText={filterText} />;
    }, [filterText]);

    const queryApi = async () => {
        try {
            const res = await fetch(sourceUrl)
            const json = await res.json()
            const dataStates = processData(json)
            setData(dataStates)
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
                    title="COVID-19 Statistics Pacific NW Counties"
                    columns={columns}
                    data={filteredItems}
                    subHeader
                    subHeaderComponent={subHeaderComponentMemo}
                    persistTableHead
                    theme="dark"
                    progressPending={pending}
                />
                <br />
                <a href="https://raw.githubusercontent.com/stevenliuyi/covid19/master/public/data/all.json">Data sourced from stevenliuyi</a>
            </div>
        </div>
    )
}

export default Stats
