import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Duration({onUserSelect}) {
  return (
    <div className="mt-8">
         <h2 className="text-2xl font-bold text-primary">Duration</h2>
         <p className="text-gray-500">Select duration of your video</p>
      <div>
        <Select onValueChange={(value)=>onUserSelect('duration', value)}>
          <SelectTrigger className="w-full text-lg p-6 mt-3">
            <SelectValue placeholder="Select Duration" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="30">30</SelectItem>
            <SelectItem value="60">60</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
