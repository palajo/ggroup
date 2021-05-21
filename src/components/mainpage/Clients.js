/* eslint-disable jsx-a11y/alt-text */
import React from 'react'

import ClientLogo1 from '../../assets/images/clients/client-1.png'
import ClientLogo2 from '../../assets/images/clients/client-2.png'
import ClientLogo3 from '../../assets/images/clients/client-3.png'
import ClientLogo4 from '../../assets/images/clients/client-4.png'
import ClientLogo5 from '../../assets/images/clients/client-5.png'
import ClientLogo6 from '../../assets/images/clients/client-6.png'
import ClientLogo7 from '../../assets/images/clients/client-7.png'
import ClientLogo8 from '../../assets/images/clients/client-8.png'
import ClientLogo9 from '../../assets/images/clients/client-9.png'
import ClientLogo10 from '../../assets/images/clients/client-10.png'
import ClientLogo11 from '../../assets/images/clients/client-11.png'
import ClientLogo12 from '../../assets/images/clients/client-12.png'
import ClientLogo13 from '../../assets/images/clients/client-13.png'
import ClientLogo14 from '../../assets/images/clients/client-14.png'
import ClientLogo15 from '../../assets/images/clients/client-15.png'
import ClientLogo16 from '../../assets/images/clients/client-16.png'
import ClientLogo17 from '../../assets/images/clients/client-17.png'
import ClientLogo18 from '../../assets/images/clients/client-18.png'
import ClientLogo19 from '../../assets/images/clients/client-19.png'
import ClientLogo20 from '../../assets/images/clients/client-20.png'
import ClientLogo21 from '../../assets/images/clients/client-21.png'
import { NavLink } from 'react-router-dom'

const clients = [
    {
        id: 1,
        image: ClientLogo1
    },
    {
        id: 2,
        image: ClientLogo2
    },
    {
        id: 3,
        image: ClientLogo3
    },
    {
        id: 4,
        image: ClientLogo4
    },
    {
        id: 5,
        image: ClientLogo5
    },
    {
        id: 6,
        image: ClientLogo6
    },
    {
        id: 7,
        image: ClientLogo7
    },
    {
        id: 8,
        image: ClientLogo8
    },
    {
        id: 9,
        image: ClientLogo9
    },
    {
        id: 10,
        image: ClientLogo10
    },
    {
        id: 11,
        image: ClientLogo11
    },
    {
        id: 12,
        image: ClientLogo12
    },
    {
        id: 13,
        image: ClientLogo13
    },
    {
        id: 14,
        image: ClientLogo14
    },
    {
        id: 15,
        image: ClientLogo15
    },
    {
        id: 16,
        image: ClientLogo16
    },
    {
        id: 17,
        image: ClientLogo17
    },
    {
        id: 18,
        image: ClientLogo18
    },
    {
        id: 19,
        image: ClientLogo19
    },
    {
        id: 20,
        image: ClientLogo20
    },
    {
        id: 21,
        image: ClientLogo21
    },
]

export function ClientBlock(props) {
    return (
        <div className="client-block">
            <NavLink to="#">
                <img src={props.logo} />
            </NavLink>
        </div>
    )
}


export default function Clients() {
    return (
        <section className="section section-clients">
            <div className="container">
                <div className="row">
                    <div className="container-body">
                        <h2 className="container-title">
                            Our Clients
                        </h2>
                        <div className="clients-row">
                            {
                                clients.map((client) => (
                                    <ClientBlock logo={client.image} key={client.id} />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
