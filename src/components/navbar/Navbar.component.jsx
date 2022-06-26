const Navbar = () => {
    return (
        <nav className="flex items-center px-4 md:px-16 shadow-md py-6 gap-4">
            <span className="w-4 h-4 bg-indigo-700 rounded-full"/>
            <span className="w-4 h-4 bg-indigo-700 rounded-full"/>
            <span className="w-4 h-4 bg-indigo-500 rounded-full mr-auto"/>
            <h1 className="text-sm sm:text-base font-semibold">
                Expense Tracker App
            </h1>
        </nav>
    )
}

export default Navbar