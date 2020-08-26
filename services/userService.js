const getUser = async () => {
  try {
    const data = await fetch("https://jsonplaceholder.typicode.com/users");
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

export default getUser;
