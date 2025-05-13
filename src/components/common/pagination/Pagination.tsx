import Link from 'next/link';
import React from 'react';

const PaginationItems = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <span><Link href="#">Prev</Link></span>
                    </li>
                    <li>
                        <Link href="#">1</Link>
                    </li>
                    <li>
                        <span className="current">2</span>
                    </li>
                    <li>
                        <Link href="#">3</Link>
                    </li>
                    <li>
                        <span><Link href="#">Next</Link></span>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default PaginationItems;