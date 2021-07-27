/* This example requires Tailwind CSS v2.0+ */
import Button from "../components/button";
import ButtonGroup from "./buttonGroup";
import { Icon } from "../types/icons";

type Props = {};

const Header = () => {
  return (
    <header className="bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="">
            <h1 className="text-3xl font-bold text-white">FIRE calculator</h1>
          </div>
          <ButtonGroup>
            <Button text="Reset" icon={Icon.Refresh} />
            <Button text="Save" icon={Icon.Link} />
          </ButtonGroup>
        </div>
      </div>
    </header>
  );
};

export default Header;
