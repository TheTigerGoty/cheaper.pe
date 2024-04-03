import Phone from "./Phone";
import Searcher from '../shared/Searcher';


export default function Hero() {
  return (
    <>
      <div className="grid gap-5 md:grid-cols-2 grid-cols-1 items-center py-10">
        <Phone />
        <div className="gap-5 flex flex-col">
          <h1 className="text-3xl">
            Ex nulla eiusmod laboris veniam velit fugiat minim do officia ut dolore
            nisi. Exercitation mollit consectetur ea consequat quis ea anim Lorem anim
            veniam excepteur magna cillum. Mollit laboris occaecat ex consequat.
            Pariatur magna occaecat officia officia ea labore quis officia eu sint
            dolore duis magna tempor.
          </h1>
          <Searcher />
        </div>
      </div>
    </>
  )
}