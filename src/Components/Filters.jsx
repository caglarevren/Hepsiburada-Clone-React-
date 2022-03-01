import React from "react";

const Filters = () => {
    return (
        <aside className='filters'>
            <h5>Renk</h5>
            <div className='filters__container'>
                <button>
                    Label Text <span>(4)</span>
                </button>
                <button>
                    Lacivert <span>(3)</span>
                </button>
                <button>
                    Sarı <span>(1)</span>
                </button>
                <button>
                    Siyah <span>(5)</span>
                </button>
            </div>
            <h5>Sıralama</h5>
            <div className='filters__container'>
                <button>En Düşük Fiyat</button>
                <button>En Yüksek Fiyat</button>
                <button>En Yeniler (A&#62;Z)</button>
                <button>En Yeniler (Z&#60;A)</button>
            </div>
            <h5>Marka</h5>
            <div className='filters__container'>
                <button>
                    Samsung <span>(4)</span>
                </button>
                <button>
                    Nokia <span>(3)</span>
                </button>
                <button>
                    Apple <span>(1)</span>
                </button>
                <button>
                    LG <span>(5)</span>
                </button>
            </div>
        </aside>
    );
};

export default Filters;
