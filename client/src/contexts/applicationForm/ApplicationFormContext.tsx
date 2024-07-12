import React from 'react'

const ApplicationFormContext = React.createContext({
    isFormOpen: false,
    selectedService: {
        _id: '',
        service_name : '',
    },
    openForm: (_id: string, service_name: string) => {},
    closeForm: () => {},
})

export default ApplicationFormContext
