"use client";
import { useMemo } from "react";
import { createAvatar } from "@dicebear/core";
import { avataaars } from "@dicebear/collection";

type Gender = "MALE" | "FEMALE" | "OTHER";

const FEMALE_HAIR = [
  "bob",
  "longButNotTooLong",
  "straight01",
  "straight02",
  "straightAndStrand",
  "curvy",
  "bigHair",
  "bun",
  "miaWallace",
] as const;

const MALE_HAIR = [
  "shortFlat",
  "shortRound",
  "shortWaved",
  "shortCurly",
  "theCaesar",
  "theCaesarAndSidePart",
  "sides",
] as const;

export default function DoctorAvatar({
  name,
  gender,
  size = 48,
}: {
  name: string;
  gender?: Gender;
  size?: number;
}) {
  const src = useMemo(() => {
    const isFemale = gender === "FEMALE";
    const isMale = gender === "MALE";

    return createAvatar(avataaars, {
      seed: name,
      eyes: ["default", "happy"],
      eyebrows: ["default", "defaultNatural", "raisedExcited"],
      mouth: ["smile", "default", "twinkle"],
      ...(isFemale && {
        top: [...FEMALE_HAIR],
        facialHairProbability: 0,
      }),
      ...(isMale && {
        top: [...MALE_HAIR],
        facialHairProbability: 30,
      }),
    }).toDataUri();
  }, [name, gender]);

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={name}
      width={size}
      height={size}
      className="rounded-full bg-muted object-cover"
    />
  );
}