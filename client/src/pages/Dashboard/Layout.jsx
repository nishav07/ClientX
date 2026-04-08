export default function Layout({userData}){
    return (<>
    <h1>User Dashboard</h1>
    <p>userId:{userData.userId}</p>
    <p>userName:{userData.userName}</p>
    <p>email:{userData.email}</p>
    </>)
}