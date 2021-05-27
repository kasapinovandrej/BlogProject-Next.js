import React from "react";
import Form from "../components/contact/contact-form";
import Head from "next/head";

const ContactPage = () => {
  return (
    <>
      <Head>
        <title>Contact Me</title>
        <meta name="description" content="Send me your messages!" />
      </Head>
      <Form />
    </>
  );
};

export default ContactPage;
