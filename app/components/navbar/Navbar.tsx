"use client";

import { User } from "@prisma/client";
import Container from "components/Container";
import Logo from "./Logo";
import Search from "./Search";
import UserMenu from "./UserMenu";

interface Props {
  currentUser: User | null;
}

const Navbar: React.FC<Props> = ({ currentUser }) => {
  console.log(currentUser);

  return (
    <div className="fixed z-10 w-full bg-white shadow-sm">
      <div className="border-b-[1px] py-4">
        <Container>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            <Logo />
            <Search />
            <UserMenu currentUser={currentUser} />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
