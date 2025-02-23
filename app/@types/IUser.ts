export default interface IUser {
    id: number;
    name: string;
    email: string;
    address: { street: string } | string;
    phone: string;
    website: string;
    company: {
        name: string;
    };

}
