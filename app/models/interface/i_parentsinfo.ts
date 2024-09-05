interface IParentInfo {
  name: string;
  nic_number: string;
  contact_number: number;
  address: string;
  job: string;
}

interface IParent {
  father: IParentInfo;
  mother: IParentInfo;
  guardian: IParentInfo;
}
