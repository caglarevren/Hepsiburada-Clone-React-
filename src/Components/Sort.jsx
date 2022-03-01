import React from "react";

const Sort = ({ sortProduct }) => {
    return (
        <div className='sort'>
            <div className='sort__search'>
                <h1>iPhone iOS cep telefonu</h1>
                <div>
                    <span className='sort__search--left'>Aranan Kelime:</span>
                    <span className='sort__search--right'> iphone 11</span>
                </div>
            </div>
            <select onChange={(e) => sortProduct(e.target.value)}>
                <option>Sıralama</option>
                <option value='min'>En Düşük Fiyat</option>
                <option value='max'>En Yüksek Fiyat</option>
                <option value='abc'>En Yeniler (A-Z)</option>
                <option value='cba'>En Yeniler (Z-A)</option>
            </select>
        </div>
    );
};

export default Sort;
