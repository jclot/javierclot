export default function Custom404() {
    return (
        <div style={styles.container}>
            <h1 style={styles.h1}>404 - Page Not Found</h1>
            <p style={styles.p}>Oops! The page you are looking for doesn’t exist.</p>
        </div>
    );
}

const styles: { [key: string]: React.CSSProperties } = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#1f2839',
        textAlign: 'center',
    },

    h1: {
        fontSize: '3rem',
        margin: 0,
        padding: 0,
        color: '#F5F5F5',
    },

    p: {
        fontSize: '1.2rem',
        marginTop: '1rem',
        color: '#F5F5F5',
    },
};
