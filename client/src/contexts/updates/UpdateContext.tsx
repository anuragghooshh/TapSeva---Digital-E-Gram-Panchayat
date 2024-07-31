import React from 'react'
import UpdateInterface from '../../interfaces/UpdateInterface'

interface UpdateContextInterface {
    updates : UpdateInterface[],
    setUpdates: React.Dispatch<React.SetStateAction<UpdateInterface[]>>
}

const UpdateContext = React.createContext<UpdateContextInterface>({
    updates: [],
    setUpdates: () => {}
});

export default UpdateContext;