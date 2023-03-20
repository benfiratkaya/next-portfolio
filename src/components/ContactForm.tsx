import {useState} from "react";
import axios from "axios";
import {CheckBadgeIcon} from "@heroicons/react/24/solid";
import Label from "@/components/Label";
import Input from "@/components/Input";
import Textarea from "@/components/Textarea";
import Button from "@/components/Button";
import useTranslation from "next-translate/useTranslation";

const ContactForm = () => {
  const {t} = useTranslation("contact");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState('pending');
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    
    if (status === 'sending') return false;
    setStatus('sending');
    
    axios.post("/api/contact", {
      name,
      email,
      subject,
      message
    }).then(res => {
      if (res.data.status) {
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
        setStatus('sent');
      } else {
        setStatus('error');
        window.scrollTo({top: 100, left: 0, behavior: 'smooth'});
      }
    }).catch(err => {
      console.log(err);
      setStatus('error');
      window.scrollTo({top: 100, left: 0, behavior: 'smooth'});
    });
  };
  
  if (status === 'sent')
    return (
      <div className="flex flex-col items-center justify-center p-12 border border-gray-100 rounded-lg bg-white text-center">
        <CheckBadgeIcon className="w-20 h-20 text-emerald-500"/>
        <h2 className="text-2xl font-bold text-emerald-800 mt-3 mb-2">
          {t("form.success.title")}
        </h2>
        <p className="text-emerald-900 text-center">
          {t("form.success.message")}
        </p>
      </div>
    )
  
  return (
    <>
      {status === 'error' && (
        <div className="bg-red-500 text-white mb-6 py-3 px-4 rounded-lg">
          There was an error sending your message. Please try again.
        </div>
      )}
      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
        <div className="sm:col-span-2">
          <Label id="fullName">
            {t("form.name")}
          </Label>
          <div className="mt-1">
            <Input
              type="text"
              name="fullName"
              id="fullName"
              autoComplete="full-name"
              onChange={(e) => setName(e.target.value)}
              value={name}
              required={true}
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <Label id="email">
            {t("form.email")}
          </Label>
          <div className="mt-1">
            <Input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required={true}
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <Label id="subject">
            {t("form.subject")}
          </Label>
          <div className="mt-1">
            <Input
              type="text"
              name="subject"
              id="subject"
              onChange={(e) => setSubject(e.target.value)}
              value={subject}
              required={true}
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <Label id="message">
            {t("form.message")}
          </Label>
          <div className="mt-1">
          <Textarea
            id="message"
            name="message"
            rows={4}
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            required={true}
          />
          </div>
        </div>
        <div className="sm:col-span-2">
          <Button
              type="submit"
              isLoading={status === 'sending'}
          >
            {t("form.submit")}
          </Button>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
