import { Search } from "lucide-react";

export default function Searcher() {
    return (
        <div className="w-auto">
            <div className="bg-base-300 p-3 rounded-full">
                <div className="flex items-center">
                    <input
                        type="text"
                        placeholder="Buscar producto"
                        className="input w-full rounded-full"
                    />
                    <button id="btn-search">
                        <Search
                            className={"w-12 h-12 ml-3 dark:text-neutral-content text-base-100"}
                        />
                    </button>
                </div>
            </div>
        </div>
    )
}
