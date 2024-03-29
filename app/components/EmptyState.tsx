"use client";

import Button from "@/components/Button";
import Heading from "@/components/Heading";
import { useRouter } from "next/navigation";

interface Props {
  title?: string;
  subtitle?: string;
  showReset?: boolean;
}

const EmptyState: React.FC<Props> = ({
  title = "No exact matches",
  subtitle = "Try changing or removing some of your filters",
  showReset,
}) => {
  const router = useRouter();

  return (
    <div className="h-[60vh] flex flex-col gap-2 justify-center items-center">
      <Heading title={title} subtitle={subtitle} center />
      <div className="w-48 mt-4">
        {showReset && (
          <Button
            outline
            label="Remove all filters"
            onClick={() => router.push("/")}
          />
        )}
      </div>
    </div>
  );
};

export default EmptyState;
