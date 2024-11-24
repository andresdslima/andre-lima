"use client";
import { ReactNode, useEffect, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import { cn } from "../../lib/utils";
import { FaHome } from "react-icons/fa";
import { usePathname } from "next/navigation";

export interface NavItem {
  name: string;
  link: string;
  icon?: ReactNode;
};

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: NavItem[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);
  const activeLink = "border-b-purple";
  const url = window.location.href;
  const [active, setActive] = useState<string>(url);

  useEffect(() => {
    const sectionName = url.split("#").pop();
    if (sectionName) {
      setActive(`#${sectionName}`);
    }
  }, [url]);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit md:min-w-[70vw] lg:min-w-fit fixed z-[5000] top-10 inset-x-0 mx-auto px-10 py-5 rounded-lg border border-black/.1 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] items-center justify-center space-x-4",
          className
        )}
        style={{
          backdropFilter: "blur(16px) saturate(180%)",
          backgroundColor: "rgba(17, 25, 40, 0.75)",
          borderRadius: "12px",
          border: "1px solid rgba(255, 255, 255, 0.125)",
        }}
      >
        {navItems.map((navItem: NavItem, idx: number) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              `relative dark:text-neutral-50 items-center  flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500 hover:border-b-purple border-transparent border-2 transition-all duration-300
              ${active === navItem.link && idx !== 0 ? activeLink : ""}`
            )}
          >
            {idx === 0 ? (
              <span className="block !cursor-pointer">
                <FaHome />
              </span>
            ) : (
              <span className="text-sm !cursor-pointer">{navItem.name}</span>
            )}
          </Link>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};