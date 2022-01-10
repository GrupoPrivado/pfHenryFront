import React from 'react'

export default function CardMemberGroup({name, lastname, dni , id}) {
    return (
        <div>
            <label>{name}</label>
            <label>{lastname}</label>
            <label>{dni}</label>
        </div>
    )
}
