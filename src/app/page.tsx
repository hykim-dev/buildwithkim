import HomeMain from "@/pages/home/HomeMain";
import { profile } from "@/data/profileData";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: `${profile.displayName} | ${profile.title}`,
};

export default function Home() {
  return (
    <HomeMain />
  );
}
