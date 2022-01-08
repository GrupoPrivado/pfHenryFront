import React from 'react'
import { getAllGroup } from '../../actions/actionGroup'
import { useSelector } from "react-redux";

export default function FamilyGroupDash() {
    const { grupo } = useSelector((state) => state.planes);

    return (
        <div>
            
        </div>
    )
}
