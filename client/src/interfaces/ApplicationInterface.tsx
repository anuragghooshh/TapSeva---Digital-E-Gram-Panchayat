export default interface ApplicationInterface{
    _id : string;
    serviceId : string;
    serviceName : string;
    userId : string;
    message : string;
    currentOccupation : string;
    status : 'Pending' | 'Approved' | 'Rejected';
    createdAt : Date;
};