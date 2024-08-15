interface IParentInfo {
  name: string;
  nicNumber: number;
  contactNumber: number;
  address: string;
  job: string;
}

interface IParent {
  father: IParentInfo;
  mother: IParentInfo;
  guardian: IParentInfo;
}
