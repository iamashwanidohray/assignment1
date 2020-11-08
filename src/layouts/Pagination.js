import React,{useEffect, useState} from 'react'
import './Pagination.css';

function Pagination({activePage, numOfPages, setActivePage}) {

    const [pagesLink,setPagesLink] = useState();

    const paginationClickHandler = (page) => {
        if(page === 'backward') {
            setActivePage(activePage > 1 ? activePage-1 : activePage);
        } else if (page === 'forward') {
            setActivePage(activePage < numOfPages ? activePage+1 : activePage);
        } else {
            setActivePage(page);
        }
    }

    useEffect(() => {
        let pages = [];
        
        pages.push(<button key='backward' onClick={() => paginationClickHandler('backward') } className = {activePage === 1 ? 'btnDisabled' : ''}>&laquo;</button>);

        for(let i = 1; i <= numOfPages; i++){
            pages.push(<button key={i} className={activePage === i ? 'active': ''} onClick={() => paginationClickHandler(i) }>{i}</button>);    
        }
        
        pages.push(<button key='forward' onClick={() => paginationClickHandler('forward') } className = {activePage === 4 ? 'btnDisabled' : ''}>&raquo;</button>);

        setPagesLink(pages);

    }, [activePage,numOfPages])


    return (
        <div className="pagination">
            {
                pagesLink
            }
        </div>
    )
}

export default Pagination
