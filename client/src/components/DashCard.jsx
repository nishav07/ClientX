export default function DashCard({title="lol",body="test"}){
    return(<>
    <div id="dashCards" className="min-h-30 min-w-85 border-2 border-black flex items-center justify-center rounded-lg m-2">
       <div className="flex flex-col gap-1">
         <h1 className="text-2xl font-weight-500">{title}</h1>
        <p>{body}</p>
       </div>
    </div>
    </>)
}