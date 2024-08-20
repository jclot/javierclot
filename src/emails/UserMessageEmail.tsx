import { Html, Head, Preview, Body, Container, Section, Text, Heading } from "@react-email/components";

interface UserMessageEmailProps {
    user_name: string;
    user_email: string;
    message: string;
}

export default function UserMessageEmail({ user_name, user_email, message }: UserMessageEmailProps) {
    return (
        <Html>
            <Head />
            <Preview>Nuevo mensaje de {user_name}</Preview>
            <Body style={styles.body}>
                <Container style={styles.container}>
                    <Heading style={styles.heading}>Nuevo mensaje de {user_name}</Heading>
                    <Text style={styles.text}>Nombre: {user_name}</Text>
                    <Text style={styles.text}>Correo electrónico: {user_email}</Text>
                    <Section style={styles.messageSection}>
                        <Text style={styles.text}>Mensaje:</Text>
                        <Text style={styles.messageText}>{message}</Text>
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
    messageSection: {
        marginTop: "20px",
        padding: "10px",
        borderTop: "1px solid #dddddd",
    },
    messageText: {
        fontSize: "16px",
        color: "#333333",
        lineHeight: "1.5",
    },
};
