import Button from "../../../components/reuseable/Button";

const WhatsAppPage: React.FC = () => {
  // Predefined message
  const message = "Hello, Guddu Catering Service!";

  const sendMessage = () => {
    const phoneNumber = "918851253661"; // Fixed phone number
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <Button
      onClick={sendMessage}
      label="Send WhatsApp Message"
      className="!bg-green-500 "
    />
  );
};

export default WhatsAppPage;