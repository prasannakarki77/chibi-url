"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

import { useEffect, useState } from "react";

export default function Home() {
  const [message, setMessage] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/hello");
      const { message } = await res.json();
      setMessage(message);
    };
    fetchData();
  }, []);

  if (!message) return <p>Loading...</p>;

  return (
    <div className="text-center ">
      {message}

      <div className="flex mx-auto max-w-sm items-center space-x-2 translate-y-[200px] ">
        <Input type="text" placeholder="Enter url" />
        <Button type="submit">Generate URL</Button>
      </div>
    </div>
  );
}
