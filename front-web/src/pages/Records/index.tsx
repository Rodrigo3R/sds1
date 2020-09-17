import React, { useEffect, useState } from 'react';
import './styles.css';
import axios from 'axios';
import { RecordsResponse } from './types';

const BASE_URL = 'http://localhost:8080';

const Records = () => {

    const [ recordsResponse, setRecordsResponse] = useState<RecordsResponse>();
    console.log(recordsResponse);

    useEffect(() => {
        axios.get(`${BASE_URL}/records?linesPerPage=12`)
        .then(response => setRecordsResponse(response.data));
    }, []);

    return (

        <div className="page-container">
            <table className="records-table" cellPadding="0" cellSpacing="0">
                <thead>
                    <tr>
                        <th>INSTANTE</th>
                        <th>NOME</th>
                        <th>IDADE</th>
                        <th>PLATAFORMA</th>
                        <th>GÊNERO</th>
                        <th>TITULO DO GAME</th>
                    </tr>
                </thead>
                <tbody>
                    {recordsResponse?.content.map(record => (
                        <tr key={record.id}>
                            <td>20/08/2020 13:45</td>
                            <td>dodrigo Rocha Rodrigues</td>
                            <td>44</td>
                            <td>Xbox</td>
                            <td>Ação - Aventura</td>
                            <td>The last of Us 2</td>
                        </tr>
                    ))}
                                              
                </tbody>
            </table>
        </div>
    )
};

export default Records;