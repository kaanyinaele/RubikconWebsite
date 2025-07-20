import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface BookMeetingModalProps {
  /**
   * Optional className for the trigger button
   */
  className?: string;
  /**
   * Optional label for the trigger button. Defaults to "Book a Meeting →"
   */
  label?: string;
}

/**
 * Reusable modal dialog that displays a simple contact form for booking a meeting.
 * Can be placed anywhere in the app (e.g., Home page, Footer) without duplicating markup.
 */
export function BookMeetingModal({ className, label = "Book a Meeting →" }: BookMeetingModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className={className ?? "bg-black text-white hover:bg-gray-800 rounded-lg px-6 py-3 font-semibold"}>
          {label}
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Book a Meeting</DialogTitle>
          <DialogDescription>
            Fill out the form below and we’ll get back to you shortly.
          </DialogDescription>
        </DialogHeader>

        <form className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium">
              Name
            </label>
            <Input id="name" type="text" placeholder="Your name" required />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="datetime" className="text-sm font-medium">
              Preferred Date &amp; Time
            </label>
            <Input id="datetime" type="datetime-local" />
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium">
              Additional Details
            </label>
            <Textarea
              id="message"
              placeholder="Tell us anything relevant…"
              rows={4}
            />
          </div>

          <DialogFooter>
            <Button
              type="submit"
              className="w-full bg-black text-white hover:bg-gray-800"
            >
              Submit
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
