"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import { Mail } from "lucide-react";
import Heading from "$/components/typography/Headings";
import Paragraph from "$/components/typography/paragraph";
import Input from "$/components/input";
import Button from "$/components/button";
import Spinner from "$/components/loading-indicator/Spinner";
import Popup from "$/components/popup";

export default function Subscribe() {
  const [mail, setMail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  function handleChange(e: ChangeEvent<HTMLInputElement> | undefined) {
    if (!e) return;
    setMail(e.target.value);
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMail("");
    setSubmitting(true);
    // Simulate async submission
    setTimeout(() => {
      setSubmitting(false);
      setShowThankYou(true);
    }, 3000);
  };

  const handleThankYouClose = () => {
    setShowThankYou(false);
  };

  return (
    <>
      <form
        className={`px-4 py-2 rounded-lg bg-glassy min-h-48 w-full sm:w-[26rem] lg:w-auto ${
          submitting ? "flex items-center justify-center" : ""
        }`}
        onSubmit={handleSubmit}
      >
        {submitting ? (
          <Spinner />
        ) : (
          <>
            <Heading
              size="h6"
              className="flex items-center gap-2  !mb-4 !font-bold"
            >
              <span>
                <Mail />
              </span>
              <span>Stay Up to date</span>
            </Heading>
            <Paragraph>
              Get notified when I publish something new, and unsubscribe at any
              time.
            </Paragraph>
            <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-4  items-center sm:gap-2 lg:gap-4 xl:justify-between">
              <Input
                placeholder="Email Address"
                type="email"
                value={mail}
                onChange={(event) => handleChange(event)}
                className="self-stretch flex-1"
              />
              <Button
                className="!py-1.5 w-full sm:w-auto lg:w-full xl:w-auto"
                type="submit"
              >
                Join
              </Button>
            </div>
          </>
        )}
      </form>

      {showThankYou && (
        <Popup
          title="Thank you for subscribing!"
          open={showThankYou}
          onClose={handleThankYouClose}
        >
          {" "}
        </Popup>
      )}
    </>
  );
}
