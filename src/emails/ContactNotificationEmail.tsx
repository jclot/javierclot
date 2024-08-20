import { Html, Head, Preview, Body, Container, Section, Text, Heading } from "@react-email/components";

interface ContactNotificationEmailProps {
  user_name: string;
}

export default function ContactNotificationEmail({ user_name }: ContactNotificationEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Thank you for contacting us</Preview>
      <Body style={styles.body}>
        <Container style={styles.container}>
          <Heading style={styles.heading}>Thank you for contacting us</Heading>
          <Text style={styles.text}>
            Dear {user_name},
          </Text>
          <Text style={styles.text}>
            We have received your message and one of our representatives will contact you as soon as possible. Thank you for your patience.
          </Text>
          <Text style={styles.text}>
            In the meantime, if you have any additional questions, please feel free to reply to this email.
          </Text>
          <Section style={styles.signature}>
            <Text style={styles.text}>
              Sincerely yours,
            </Text>
            <Text style={styles.text}>
              The customer service team
            </Text>
            <Text style={styles.text}>
              Javier Clot
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

const styles = {
  body: {
    backgroundColor: "#f6f6f6",
    fontFamily: "'Arial', sans-serif",
    margin: 0,
    padding: 0,
  },
  container: {
    maxWidth: "600px",
    margin: "0 auto",
    padding: "20px",
    backgroundColor: "#ffffff",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  },
  heading: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#333333",
    marginBottom: "20px",
  },
  text: {
    fontSize: "16px",
    color: "#555555",
    lineHeight: "1.5",
    marginBottom: "20px",
  },
  signature: {
    marginTop: "40px",
    borderTop: "1px solid #dddddd",
    paddingTop: "20px",
  },
};
