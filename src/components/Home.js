import React, { useEffect, useState } from "react";
import { Card } from "../components/cards/Card";

/**SPINNER AL CARGAR LAS CARDS**/

export const Home = () => {
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 2000)

    }, [])
    return (
        <>
            {loading ? (
                <div className="d-flex justify-content-center m-5">
                    <div className="spinner-border" role="status">
                    </div>
                </div>
            ) :
                <Card />
            }
        </>

    )
}

