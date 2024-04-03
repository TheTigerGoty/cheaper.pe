import Searcher from "@/components/shared/Searcher"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Search } from "lucide-react"

export function ModalSearch() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline" className="flex space-x-3">
                    <span>Buscar...</span>
                    <Search size={16} />
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Busque las cosas de su interes</DialogTitle>
                    <DialogDescription>
                        Contamos con todos los productos del momento.
                    </DialogDescription>
                </DialogHeader>
                <div className="my-5">
                    <Searcher />
                </div>
                <DialogFooter>
                    <Button type="submit">Cerrar</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
