
import { Meta } from "./Meta";
import { NavBar } from "../components/NavBar";
import { AppConfig } from "../utils/AppConfig";


export default function Layout({ children }) {
  return (
    <div>
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <main>
        <NavBar />
        {children}
      </main>
    </div>
  )
}