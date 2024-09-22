interface IParentInfo {
  name: string;
  nic_number: string;
  contact_number: string;
  address: string;
  job: string;
}

interface IParent {
  father: IParentInfo;
  mother: IParentInfo;
  guardian: IParentInfo;
}
