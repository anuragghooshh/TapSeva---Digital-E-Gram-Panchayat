interface UserDataInterface {
    _id: string;
    name: string;
    sex: string;
    email: string;
    phone: string;
    address: string;
    aadhaarNo: string;
    dob: string;
    maritalStatus: 'Single' | 'Married' | 'Divorced' | 'Widowed';
    role: 'villager' | 'admin' | 'staff';
}

export default UserDataInterface;