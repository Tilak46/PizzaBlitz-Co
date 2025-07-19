import { Link, Outlet, useNavigation } from "react-router-dom";
import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import Loader from "./Loader";
import { useSelector } from "react-redux";
import { getTotalCartQuantity } from "../features/cart/cartSlice";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  const totalCartQuanitity = useSelector(getTotalCartQuantity);
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      {isLoading && <Loader />}

      <Header />

      <div className="overflow-scroll">
        <main className="mx-auto max-w-3xl">
          <Outlet />
        </main>
      </div>

      {totalCartQuanitity > 0 && <CartOverview />}
    </div>
  );
}

export default AppLayout;
