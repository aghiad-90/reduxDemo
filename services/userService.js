const GetUser = async () => {
  await fetch("https://jsonplaceholder.typicode.com/users").then((Response) =>
    Response.json()
  );
};

export default GetUser;
