import React from 'react'
import { useState } from 'react'

function listHewan() {

    const [listHewan, setListHewan] = useState([
        { id: 1,nama: 'kambing', jumlah: 1 },
        { id: 2,nama: 'sapi', jumlah: 2 },
        { id: 3,nama: 'ayam', jumlah: 3 },
        { id: 4,nama: 'ikan', jumlah: 4 },
    ])

    return (
        <>

        <div>
            <h1>hewan</h1>
            <ul>
                {listHewan.length == 0 ? (
                    <div>data tidak ada</div>
                ) : (
                    listHewan.map((item, index) => (
                        <div key={item.id}>
                            <h3>{item.nama}</h3>
                        </div>
                    ))
                )
                }
            </ul>
        </div>
        </>
    )
}

export default listHewan
