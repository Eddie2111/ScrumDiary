import Loader from "../loading";

export default function LoadingNavbar() {
    return (
        <nav className="flex justify-between items-center p-4 border-b">
            <h1 className="font-bold text-2xl">WorkList</h1>
            <div className="flex items-center space-x-4">
                <Loader />
                <Loader />
            </div>
        </nav>
    )
}