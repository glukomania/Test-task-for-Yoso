
  const STORAGE_KEY = 'userTableData'

 type User = { 
    id?: number, 
    name: string,
    email: string, 
    position: string, 
    workingTime: string 
  }


  export const getTableData = (): any => {
    const storedData = localStorage.getItem(STORAGE_KEY);
    return storedData ? JSON.parse(storedData) : null;
  }

  export const saveTableData = (data: any): void => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
  }

  export const saveUser =(user: User):void => {
    const tableData = getTableData();
    tableData[user.id] = user;
    saveTableData(tableData);
  }

  export const updateUser = (id: number, updatedData: User):void => {
    const tableData = getTableData();
    if (tableData[id]) {
      tableData[id] = { ...tableData[id], ...updatedData };
      saveTableData(tableData);
    }
  }

  export const deleteUser = (id: number):void => {
    const tableData = getTableData();
    if (tableData[id]) {
      delete tableData[id];
      saveTableData(tableData);
    }
  }

  export const getUser = (id: number) => {
    const tableData = getTableData();
    return tableData[id] || null;
  }

  export const addUser = (user: User) => {
    console.log('user', user)
    const tableData = getTableData();
    // here I try to get max value of current id to make an id for a new user

    const maxId = Object.keys(tableData).reduce((max, userId) => {
      const numericId = parseInt(userId, 10);
      return numericId > max ? numericId : max;
    }, 0);

    const newUserId = maxId + 1;
    console.log('newUserId', newUserId)

    const newUser = { ...user, id: newUserId };

    tableData[newUserId] = newUser
    saveTableData(tableData);

    console.log('user has been saved')
  }


  export const getAllUsers = () => {
    const tableData = getTableData();
    return Object.values(tableData);
  }
