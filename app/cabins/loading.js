import Spinner from "@/app/_components/Spinner";

export default function Laoding() {
  return (
    <div className="grid items-center justify-center">
      <Spinner />
      <p className="text-xl">Loading cabin data...</p>
    </div>
  );
}
