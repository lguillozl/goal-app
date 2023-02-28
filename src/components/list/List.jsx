import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { Context } from "../../services/Memory";
import { Goal } from "./Goal"

export function List() {

  const [goals] = useContext(Context);

  return (
    <>
      { goals.order.map(id => (
        <Goal key={id} { ...goals.objects[id] }></Goal>
        ))}
      <Outlet />
    </>
  )
}
