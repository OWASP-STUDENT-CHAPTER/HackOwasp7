import { motion } from "framer-motion"
import { Check, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const Benefit = ({
  text,
  checked
}) => {
  return (
    <div className="flex items-center gap-3">
      {checked ? (
        <span
          className="grid size-4 place-content-center rounded-full bg-primary text-sm text-primary-foreground">
          <Check className="size-3" />
        </span>
      ) : (
        <span
          className="grid size-4 place-content-center rounded-full bg-zinc-800 text-sm text-zinc-400 ">
          <X className="size-3" />
        </span>
      )}
      <span className="text-sm dark:text-zinc-300 text-zinc-600">{text}</span>
    </div>
  );
}

export const PricingCard = ({
  tier,
  price,
  bestFor,
  CTA,
  benefits,
  className
}) => {
  return (
    <motion.div
      initial={{ filter: "blur(2px)" }}
      whileInView={{ filter: "blur(0px)" }}
      transition={{ duration: 0.5, ease: "easeInOut", delay: 0.25 }}>
      <Card
        className={cn(
          "relative h-full w-full overflow-hidden border",
          "border-zinc-700 bg-gradient-to-br from-zinc-950/50 to-zinc-900/80",
          "p-6",
          className
        )}>
        <div
          className="flex flex-col items-center border-b pb-6 border-zinc-700 ">
          <span className="mb-6 inline-block text-zinc-50 ">
            {tier}
          </span>
          <span className="mb-3 inline-block text-4xl font-medium">
            {price}
          </span>
          <span
            className="bg-gradient-to-br from-zinc-200 to-zinc-500 bg-clip-text text-center text-transparent">
            {bestFor}
          </span>
        </div>
        <div className="space-y-4 py-9">
          {benefits.map((benefit, index) => (
            <Benefit key={index} {...benefit} />
          ))}
        </div>
        <Button className="w-full" variant={tier === "Pro" ? "default" : "ghost"}>
          {CTA}
        </Button>
      </Card>
    </motion.div>
  );
}
