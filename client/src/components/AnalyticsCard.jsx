export default function AnalyticsCard({title,icon,value,change}){

     const styles = {
    success: "bg-green-500 border-green-700",
    error: "bg-red-500 border-red-700",
    warning: "bg-yellow-500 border-yellow-700 text-black",
    info: "bg-blue-500 border-blue-700",
  };

    return (
        <div className="bg-white p-5 rounded-xl shadow w-full">
            <h3 className="text-gray 500 text-sm">{title}</h3>

            <div className="text-lg"><i className={icon} ></i></div>

            <div className="flex items-center justify-between mt-2">
                <p className="text-2xl font-bold">{value}</p>

                <span className="text-green-500 text-sm">{change}</span>
            </div>
        </div>
    )
}