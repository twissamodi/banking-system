export const BACKEND_URL = 'http://localhost:3002/bankDetails';
export const getBankName = {
  method: 'get',
  url: '/getBankNames/',
};

export const getBranchNames = (bankName) => ({
  method: 'get',
  url: `/getBranches/${bankName}`,
});

export const getIFSCCode = (bankName, branchName) => ({
  method: 'get',
  url: `/getIfsc/${bankName}/${branchName}`,
});

export const getBankDetails = (ifscCode) => ({
  method: 'get',
  url: `/getBankDetails/${ifscCode}`,
});
