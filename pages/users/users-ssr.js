export default function Users(props) {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nama</th>
          <th>Email</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {props.data?.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.username}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch("https://jsonplaceholder.typicode.com/users/");
  const data = await res.json();

  return {
    props: { data },
  };
}
