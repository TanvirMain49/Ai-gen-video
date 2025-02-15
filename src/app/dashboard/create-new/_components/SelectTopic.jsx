"use client";
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export default function SelectTopic({onUserSelect}) {
  const options = [
    "Custom Prompt",
    "Random Ai Story",
    "Scary Story",
    "Historical Facts",
    "Bed Time Story",
    "Fun Fact",
  ];
  const [selectedOption, setSelectedOption] = useState('');
  return (
    <>
      <h2 className="text-2xl font-bold text-primary">Content</h2>
      <p className="text-gray-500">What's the topic of your video?</p>

      <Select onValueChange={(value)=>{
        setSelectedOption(value);
        value!="Custom Prompt" && onUserSelect('topic', value)
        }}>
        <SelectTrigger className="w-full text-lg p-6 mt-2">
          <SelectValue placeholder="Content Type" />
        </SelectTrigger>
        <SelectContent>
          {options.map((option, idx) => (
            <SelectItem key={idx} value={option}>
              {option}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {
        selectedOption === "Custom Prompt"&& <div>
            <Textarea
            onChange={(e)=>onUserSelect('topic', e.target.value)} 
            className="mt-3" 
            placeholder="write a prompt in which you want to generate video"/>
        </div>

      }

    </>
  );
}
