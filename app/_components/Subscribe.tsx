import { useState } from "react";
import { Mail } from "lucide-react";
import Heading from "$/components/Typography/Headings";
import Paragraph from "$/components/Typography/paragraph";
import Input from "$/components/Input";
import Button from "$/components/button";
import Spinner from "$/components/loading-indicator/Spinner";
import Popup from "$/components/popup";

export default function Subscribe() {
  const [mail, setMail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setMail(e.target.value);
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
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
        className={`px-4 py-2 rounded-lg bg-glassy h-48 ${
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
              className="flex items-center gap-2 !text-white !mb-4"
            >
              <span>
                <Mail />
              </span>
              <span>Stay Up to date</span>
            </Heading>
            <Paragraph className="!text-white">
              Get notified when I publish something new, and unsubscribe at any
              time.
            </Paragraph>
            <div className="flex items-center justify-between">
              <Input
                placeholder="Email Address"
                type="email"
                value={mail}
                onChange={(event) => handleChange(event)}
              />
              <Button className="py-1" type="submit">
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
          L
        </Popup>
      )}
    </>
  );
}
