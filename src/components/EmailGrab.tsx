const EmailGrab = () => (
  <section className="bg-gradient-to-b from-black to-purple-900/10">
    <div
      className="w-[100vw] pt-[151vw] sm:pt-[105vw] md:pt-[55vw] lg:pt-[40vw] xl:pt-[32vw] 2xl:pt-[27vw]"
      style={{
        position: "relative",
        overflow: "hidden",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <iframe
        src={import.meta.env.VITE_EMAIL_GRAB_URL}
        style={{
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
          maxWidth: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          width: " 100%",
          height: "100%",
        }}
      ></iframe>
    </div>
  </section>
);

export default EmailGrab;
